import { FormattingOptions } from 'jsonc-parser';
import * as protocol from './omnisharp/protocol';
import * as tasks from 'vscode-tasks';
import * as vscode from 'vscode';
import { OmniSharpServer } from './omnisharp/server';
export declare class AssetGenerator {
    workspaceFolder: vscode.WorkspaceFolder;
    vscodeFolder: string;
    tasksJsonPath: string;
    launchJsonPath: string;
    private executeableProjects;
    private startupProject;
    private fallbackBuildProject;
    constructor(workspaceInfo: protocol.WorkspaceInformationResponse, workspaceFolder?: vscode.WorkspaceFolder);
    hasExecutableProjects(): boolean;
    isStartupProjectSelected(): boolean;
    selectStartupProject(selectedIndex?: number): Promise<boolean>;
    setStartupProject(index: number): void;
    hasWebServerDependency(): boolean;
    computeProgramLaunchType(): ProgramLaunchType;
    private computeProgramPath;
    private computeWorkingDirectory;
    createLaunchJsonConfigurationsArray(programLaunchType: ProgramLaunchType): vscode.DebugConfiguration[];
    createLaunchJsonConfigurations(programLaunchType: ProgramLaunchType): string;
    private createBuildTaskDescription;
    private createPublishTaskDescription;
    private createWatchTaskDescription;
    private AddAdditionalCommandArgs;
    private getBuildProjectPath;
    createTasksConfiguration(): tasks.TaskConfiguration;
}
export declare enum ProgramLaunchType {
    Console = 0,
    Web = 1,
    BlazorWebAssemblyHosted = 2,
    BlazorWebAssemblyStandalone = 3
}
export declare function createWebLaunchConfiguration(programPath: string, workingDirectory: string): string;
export declare function createBlazorWebAssemblyHostedLaunchConfiguration(programPath: string, workingDirectory: string): string;
export declare function createBlazorWebAssemblyStandaloneLaunchConfiguration(workingDirectory: string): string;
export declare function createLaunchConfiguration(programPath: string, workingDirectory: string): string;
export declare function createFallbackLaunchConfiguration(): vscode.DebugConfiguration;
export declare function createAttachConfiguration(): string;
export interface AssetOperations {
    addTasksJson?: boolean;
    updateTasksJson?: boolean;
    addLaunchJson?: boolean;
}
export declare function getBuildOperations(generator: AssetGenerator): Promise<AssetOperations>;
export declare function getFormattingOptions(): FormattingOptions;
export declare function addTasksJsonIfNecessary(generator: AssetGenerator, operations: AssetOperations): Promise<void>;
export declare enum AddAssetResult {
    NotApplicable = 0,
    Done = 1,
    Disable = 2,
    Cancelled = 3
}
export declare function addAssetsIfNecessary(server: OmniSharpServer): Promise<AddAssetResult>;
export declare function generateAssets(server: OmniSharpServer, selectedIndex?: number): Promise<void>;
export declare function replaceCommentPropertiesWithComments(text: string): string;
export declare function updateJsonWithComments(text: string, replacements: any[], nodeName: string, keyName: string, formattingOptions: FormattingOptions): string;
