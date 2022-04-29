// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import CSharpExtensionExports from "./typings/csharp/CSharpExtensionExports";
import { BaseEvent } from "./typings/csharp/omnisharp/loggingEvents";
import TestManager from "./typings/csharp/features/dotnetTest";
import { ReactiveClient } from "omnisharp-client";
import { EventStream } from "./typings/csharp/EventStream";
import { discoverTests } from "./typings/csharp/omnisharp/utils";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "dotnet-test-explorer" is now active!'
  );

  const controller = vscode.tests.createTestController(
    "dotnet-test-explorer",
    ".Net Test Explorer"
  );
  context.subscriptions.push(controller);
  const csharp = vscode.extensions.getExtension<
    Promise<CSharpExtensionExports>
  >("ms-dotnettools.csharp");

  if (!csharp) {
    return;
  }
  await csharp?.activate();
  const exports = await csharp.exports;
  await exports.initializationFinished();

  const testManager = await exports.getTestManager();
  const eventStream = exports.eventStream;

  controller.refreshHandler = async () => {
    await Promise.all(
      getWorkspaceTestPatterns().map(({ pattern }) =>
        findInitialFiles(controller, pattern, testManager)
      )
    );
  };

  const runHandler = async (
    request: vscode.TestRunRequest,
    eventStream: EventStream,
    token: vscode.CancellationToken
  ) => {
    const queue: { test: vscode.TestItem }[] = [];
    const run = controller.createTestRun(request);

    const enqueueTests = async (tests: Iterable<vscode.TestItem>) => {
      for (const test of tests) {
        if (request.exclude?.includes(test)) {
          continue;
        }
        queue.push({ test });
        run.enqueued(test);
      }
    };

    const runTestQueue = async () => {
      for (const { test } of queue) {
        run.appendOutput(`Running ${test.id}`);
        if (token.isCancellationRequested) {
          run.skipped(test);
        } else {
          const sub = eventStream.subscribe((e: any) => {
            // TODO any
            switch (e.type) {
              case 29: // EventType.ReportDotNetTestResults:
                for (const result of e.results) {
                  switch (result.Outcome) {
                    case "passed":
                      run.passed(test);
                      break;
                    case "failed":
                      run.failed(
                        test,
                        new vscode.TestMessage(result.ErrorMessage)
                      );
                      break;
                    case "skipped":
                      run.skipped(test);
                      break;
                  }
                }
              case 59: //EventType.DotNetTestRunFailure:
                console.log(e);
                break;
            }
          });
          run.started(test);
          await testManager.runDotnetTest(test.id, test.uri!.fsPath, "nunit");

          sub.unsubscribe();
        }
        run.appendOutput(`Completed ${test.id}`);
      }
      run.end();
    };

    await enqueueTests(request.include ?? getIncluded(controller.items));
    runTestQueue();
  };

  controller.createRunProfile(
    "Run Tests",
    vscode.TestRunProfileKind.Run,
    (request, token) => runHandler(request, eventStream, token),
    true
  );
}

const getWorkspaceTestPatterns = () => {
  if (!vscode.workspace.workspaceFolders) {
    return [];
  }

  return vscode.workspace.workspaceFolders.map((workspaceFolder) => ({
    workspaceFolder,
    pattern: new vscode.RelativePattern(workspaceFolder, "**/*.cs"),
  }));
};

// this method is called when your extension is deactivated
export function deactivate() {}

const findInitialFiles = async (
  controller: vscode.TestController,
  pattern: vscode.GlobPattern,
  testManager: TestManager
) => {
  for (const file of await vscode.workspace.findFiles(pattern)) {
    const tests = await testManager.discoverTests(file.fsPath, "", false);
    tests.forEach((t) => {
      const item = controller.createTestItem(
        t.FullyQualifiedName,
        t.DisplayName,
        vscode.Uri.file(t.CodeFilePath)
      );
      item.range = new vscode.Range(t.LineNumber, 0, t.LineNumber, 1);
      controller.items.add(item);
    });
  }
};
function getIncluded(items: vscode.TestItemCollection): vscode.TestItem[] {
  const result: vscode.TestItem[] = [];
  items.forEach((i) => result.push(i));
  return result;
}
