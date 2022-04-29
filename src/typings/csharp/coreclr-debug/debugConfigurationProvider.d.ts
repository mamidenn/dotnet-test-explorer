import * as vscode from 'vscode';
import { PlatformInformation } from '../platform';
export declare class DotnetDebugConfigurationProvider implements vscode.DebugConfigurationProvider {
    platformInformation: PlatformInformation;
    constructor(platformInformation: PlatformInformation);
    resolveDebugConfigurationWithSubstitutedVariables(folder: vscode.WorkspaceFolder | undefined, debugConfiguration: vscode.DebugConfiguration, token?: vscode.CancellationToken): Promise<vscode.DebugConfiguration>;
}
