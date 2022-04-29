// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import CSharpExtensionExports from "./typings/csharp/CSharpExtensionExports";
import { BaseEvent } from "./typings/csharp/omnisharp/loggingEvents";
import TestManager from "./typings/csharp/features/dotnetTest";

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

  if (!csharp || !csharp.isActive) {
    return;
  }

  const testManager = await (await csharp.exports).getTestManager();

  controller.refreshHandler = async () => {
    await Promise.all(
      getWorkspaceTestPatterns().map(({ pattern }) =>
        findInitialFiles(controller, pattern, testManager)
      )
    );
  };

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "dotnet-test-explorer.helloWorld",
    async () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage(
        "Hello World from .Net Test Explorer!"
      );
    }
  );

  context.subscriptions.push(disposable);
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
        t.DisplayName
      );
      controller.items.add(item);
    });
  }
};
