import * as vscode from 'vscode';
import { OmniSharpServer } from './omnisharp/server';
export declare class CSharpConfigurationProvider implements vscode.DebugConfigurationProvider {
    private server;
    constructor(server: OmniSharpServer);
    /**
     * TODO: Remove function when https://github.com/OmniSharp/omnisharp-roslyn/issues/909 is resolved.
     *
     * Note: serverUtils.requestWorkspaceInformation only retrieves one folder for multi-root workspaces. Therefore, generator will be incorrect for all folders
     * except the first in a workspace. Currently, this only works if the requested folder is the same as the server's solution path or folder.
     */
    private checkWorkspaceInformationMatchesWorkspaceFolder;
    /**
     * Returns a list of initial debug configurations based on contextual information, e.g. package.json or folder.
     */
    provideDebugConfigurations(folder: vscode.WorkspaceFolder | undefined, token?: vscode.CancellationToken): Promise<vscode.DebugConfiguration[]>;
    /**
     * Parse envFile and add to config.env
     */
    private parseEnvFile;
    /**
     * Try to add all missing attributes to the debug configuration being launched.
     */
    resolveDebugConfiguration(folder: vscode.WorkspaceFolder | undefined, config: vscode.DebugConfiguration, token?: vscode.CancellationToken): vscode.ProviderResult<vscode.DebugConfiguration>;
    private static showFileWarningAsync;
}
