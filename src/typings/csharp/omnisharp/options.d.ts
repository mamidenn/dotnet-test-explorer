import { vscode } from '../vscodeAdapter';
export declare class Options {
    path: string;
    useModernNet: boolean;
    useGlobalMono: string;
    waitForDebugger: boolean;
    loggingLevel: string;
    autoStart: boolean;
    projectLoadTimeout: number;
    maxProjectResults: number;
    useEditorFormattingSettings: boolean;
    useFormatting: boolean;
    organizeImportsOnFormat: boolean;
    showReferencesCodeLens: boolean;
    showTestsCodeLens: boolean;
    filteredSymbolsCodeLens: string[];
    disableCodeActions: boolean;
    disableMSBuildDiagnosticWarning: boolean;
    showOmnisharpLogOnError: boolean;
    minFindSymbolsFilterLength: number;
    maxFindSymbolsItems: number;
    razorDisabled: boolean;
    razorDevMode: boolean;
    enableMsBuildLoadProjectsOnDemand: boolean;
    enableRoslynAnalyzers: boolean;
    enableEditorConfigSupport: boolean;
    enableDecompilationSupport: boolean;
    enableImportCompletion: boolean;
    enableAsyncCompletion: boolean;
    analyzeOpenDocumentsOnly: boolean;
    useSemanticHighlighting: boolean;
    inlayHintsEnableForParameters: boolean;
    inlayHintsForLiteralParameters: boolean;
    inlayHintsForObjectCreationParameters: boolean;
    inlayHintsForIndexerParameters: boolean;
    inlayHintsForOtherParameters: boolean;
    inlayHintsSuppressForParametersThatDifferOnlyBySuffix: boolean;
    inlayHintsSuppressForParametersThatMatchMethodIntent: boolean;
    inlayHintsSuppressForParametersThatMatchArgumentName: boolean;
    inlayHintsEnableForTypes: boolean;
    inlayHintsForImplicitVariableTypes: boolean;
    inlayHintsForLambdaParameterTypes: boolean;
    inlayHintsForImplicitObjectCreation: boolean;
    razorPluginPath?: string;
    defaultLaunchSolution?: string;
    monoPath?: string;
    dotnetPath?: string;
    excludePaths?: string[];
    maxProjectFileCountForDiagnosticAnalysis?: number | null;
    testRunSettings?: string;
    constructor(path: string, useModernNet: boolean, useGlobalMono: string, waitForDebugger: boolean, loggingLevel: string, autoStart: boolean, projectLoadTimeout: number, maxProjectResults: number, useEditorFormattingSettings: boolean, useFormatting: boolean, organizeImportsOnFormat: boolean, showReferencesCodeLens: boolean, showTestsCodeLens: boolean, filteredSymbolsCodeLens: string[], disableCodeActions: boolean, disableMSBuildDiagnosticWarning: boolean, showOmnisharpLogOnError: boolean, minFindSymbolsFilterLength: number, maxFindSymbolsItems: number, razorDisabled: boolean, razorDevMode: boolean, enableMsBuildLoadProjectsOnDemand: boolean, enableRoslynAnalyzers: boolean, enableEditorConfigSupport: boolean, enableDecompilationSupport: boolean, enableImportCompletion: boolean, enableAsyncCompletion: boolean, analyzeOpenDocumentsOnly: boolean, useSemanticHighlighting: boolean, inlayHintsEnableForParameters: boolean, inlayHintsForLiteralParameters: boolean, inlayHintsForObjectCreationParameters: boolean, inlayHintsForIndexerParameters: boolean, inlayHintsForOtherParameters: boolean, inlayHintsSuppressForParametersThatDifferOnlyBySuffix: boolean, inlayHintsSuppressForParametersThatMatchMethodIntent: boolean, inlayHintsSuppressForParametersThatMatchArgumentName: boolean, inlayHintsEnableForTypes: boolean, inlayHintsForImplicitVariableTypes: boolean, inlayHintsForLambdaParameterTypes: boolean, inlayHintsForImplicitObjectCreation: boolean, razorPluginPath?: string, defaultLaunchSolution?: string, monoPath?: string, dotnetPath?: string, excludePaths?: string[], maxProjectFileCountForDiagnosticAnalysis?: number | null, testRunSettings?: string);
    static Read(vscode: vscode): Options;
    static getExcludedPaths(vscode: vscode, includeSearchExcludes?: boolean): string[];
    private static readPathOption;
    private static readUseGlobalMonoOption;
}