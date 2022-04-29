import { CompletionTriggerKind, CompletionItemKind, CompletionItemTag, InsertTextFormat } from 'vscode-languageserver-protocol';
export declare module Requests {
    const AddToProject = "/addtoproject";
    const CodeCheck = "/codecheck";
    const CodeFormat = "/codeformat";
    const ChangeBuffer = "/changebuffer";
    const FilesChanged = "/filesChanged";
    const FindSymbols = "/findsymbols";
    const FindUsages = "/findusages";
    const FormatAfterKeystroke = "/formatAfterKeystroke";
    const FormatRange = "/formatRange";
    const GetCodeActions = "/getcodeactions";
    const GoToTypeDefinition = "/gototypedefinition";
    const FindImplementations = "/findimplementations";
    const Project = "/project";
    const Projects = "/projects";
    const RemoveFromProject = "/removefromproject";
    const Rename = "/rename";
    const RunCodeAction = "/runcodeaction";
    const SignatureHelp = "/signatureHelp";
    const TypeLookup = "/typelookup";
    const UpdateBuffer = "/updatebuffer";
    const Metadata = "/metadata";
    const RunFixAll = "/runfixall";
    const GetFixAll = "/getfixall";
    const ReAnalyze = "/reanalyze";
    const QuickInfo = "/quickinfo";
    const Completion = "/completion";
    const CompletionResolve = "/completion/resolve";
    const CompletionAfterInsert = "/completion/afterInsert";
    const SourceGeneratedFile = "/sourcegeneratedfile";
    const UpdateSourceGeneratedFile = "/updatesourcegeneratedfile";
    const SourceGeneratedFileClosed = "/sourcegeneratedfileclosed";
    const InlayHint = "/inlayHint";
    const InlayHintResolve = "/inlayHint/resolve";
    const FileOpen = "/open";
    const FileClose = "/close";
}
export declare namespace WireProtocol {
    interface Packet {
        Type: string;
        Seq: number;
    }
    interface RequestPacket extends Packet {
        Command: string;
        Arguments: any;
    }
    interface ResponsePacket extends Packet {
        Command: string;
        Request_seq: number;
        Running: boolean;
        Success: boolean;
        Message: string;
        Body: any;
    }
    interface EventPacket extends Packet {
        Event: string;
        Body: any;
    }
}
export interface FileBasedRequest {
    FileName: string;
}
export interface Request extends FileBasedRequest {
    Line?: number;
    Column?: number;
    Buffer?: string;
    Changes?: LinePositionSpanTextChange[];
    ApplyChangesTogether?: boolean;
}
export interface FindImplementationsRequest extends Request {
}
export interface LinePositionSpanTextChange {
    NewText: string;
    StartLine: number;
    StartColumn: number;
    EndLine: number;
    EndColumn: number;
}
export interface MetadataSource {
    AssemblyName: string;
    ProjectName: string;
    VersionNumber: string;
    Language: string;
    TypeName: string;
}
export interface MetadataRequest extends MetadataSource {
    Timeout?: number;
}
export interface MetadataResponse {
    SourceName: string;
    Source: string;
}
export interface UpdateBufferRequest extends Request {
    FromDisk?: boolean;
}
export interface ChangeBufferRequest {
    FileName: string;
    StartLine: number;
    StartColumn: number;
    EndLine: number;
    EndColumn: number;
    NewText: string;
}
export interface AddToProjectRequest extends Request {
}
export interface RemoveFromProjectRequest extends Request {
}
export interface FindUsagesRequest extends Request {
    OnlyThisFile: boolean;
    ExcludeDefinition: boolean;
}
export interface FindSymbolsRequest extends Request {
    Filter: string;
    MaxItemsToReturn?: number;
}
export interface FormatRequest extends Request {
    ExpandTab: boolean;
}
export interface CodeActionRequest extends Request {
    CodeAction: number;
    WantsTextChanges?: boolean;
    SelectionStartColumn?: number;
    SelectionStartLine?: number;
    SelectionEndColumn?: number;
    SelectionEndLine?: number;
}
export interface FormatResponse {
    Buffer: string;
}
export interface TextChange {
    NewText: string;
    StartLine: number;
    StartColumn: number;
    EndLine: number;
    EndColumn: number;
}
export interface FormatAfterKeystrokeRequest extends Request {
    Character: string;
}
export interface FormatRangeRequest extends Request {
    EndLine: number;
    EndColumn: number;
}
export interface FormatRangeResponse {
    Changes: TextChange[];
}
export interface ResourceLocation {
    FileName: string;
    Line: number;
    Column: number;
}
export interface Error {
    Message: string;
    Line: number;
    Column: number;
    EndLine: number;
    EndColumn: number;
    FileName: string;
}
export interface ErrorResponse {
    Errors: Error[];
}
export interface QuickFix {
    LogLevel: string;
    FileName: string;
    Line: number;
    Column: number;
    EndLine: number;
    EndColumn: number;
    Text: string;
    Projects: string[];
    Tags: string[];
    Id: string;
}
export interface SymbolLocation extends QuickFix {
    Kind: string;
}
export interface QuickFixResponse {
    QuickFixes: QuickFix[];
}
export interface FindSymbolsResponse {
    QuickFixes: SymbolLocation[];
}
export interface DocumentationItem {
    Name: string;
    Documentation: string;
}
export interface DocumentationComment {
    SummaryText: string;
    TypeParamElements: DocumentationItem[];
    ParamElements: DocumentationItem[];
    ReturnsText: string;
    RemarksText: string;
    ExampleText: string;
    ValueText: string;
    Exception: DocumentationItem[];
}
export interface TypeLookupRequest extends Request {
    IncludeDocumentation: boolean;
}
export interface TypeLookupResponse {
    Type: string;
    Documentation: string;
    StructuredDocumentation: DocumentationComment;
}
export interface RunCodeActionResponse {
    Text: string;
    Changes: TextChange[];
}
export interface GetCodeActionsResponse {
    CodeActions: string[];
}
export interface RunFixAllActionResponse {
    Text: string;
    Changes: FileOperationResponse[];
}
export interface FixAllItem {
    Id: string;
    Message: string;
}
export interface GetFixAllResponse {
    Items: FixAllItem[];
}
export interface SyntaxFeature {
    Name: string;
    Data: string;
}
export interface ProjectInformationResponse {
    MsBuildProject: MSBuildProject;
}
export declare enum DiagnosticStatus {
    Processing = 0,
    Ready = 1
}
export interface ProjectDiagnosticStatus {
    Status: DiagnosticStatus;
    ProjectFilePath: string;
    Type: "background";
}
export interface WorkspaceInformationResponse {
    MsBuild?: MsBuildWorkspaceInformation;
    DotNet?: DotNetWorkspaceInformation;
    ScriptCs?: ScriptCsContext;
    Cake?: CakeContext;
}
export interface MsBuildWorkspaceInformation {
    SolutionPath: string;
    Projects: MSBuildProject[];
}
export interface ScriptCsContext {
    CsxFiles: {
        [n: string]: string;
    };
    References: {
        [n: string]: string;
    };
    Usings: {
        [n: string]: string;
    };
    ScriptPacks: {
        [n: string]: string;
    };
    Path: string;
}
export interface CakeContext {
    Path: string;
}
export interface MSBuildProject {
    ProjectGuid: string;
    Path: string;
    AssemblyName: string;
    TargetPath: string;
    TargetFramework: string;
    SourceFiles: string[];
    TargetFrameworks: TargetFramework[];
    OutputPath: string;
    IsExe: boolean;
    IsUnityProject: boolean;
    IsWebProject: boolean;
    IsBlazorWebAssemblyStandalone: boolean;
    IsBlazorWebAssemblyHosted: boolean;
}
export interface TargetFramework {
    Name: string;
    FriendlyName: string;
    ShortName: string;
}
export interface DotNetWorkspaceInformation {
    Projects: DotNetProject[];
    RuntimePath: string;
}
export interface DotNetProject {
    Path: string;
    Name: string;
    ProjectSearchPaths: string[];
    Configurations: DotNetConfiguration[];
    Frameworks: DotNetFramework[];
    SourceFiles: string[];
}
export interface DotNetConfiguration {
    Name: string;
    CompilationOutputPath: string;
    CompilationOutputAssemblyFile: string;
    CompilationOutputPdbFile: string;
    EmitEntryPoint?: boolean;
}
export interface DotNetFramework {
    Name: string;
    FriendlyName: string;
    ShortName: string;
}
export interface RenameRequest extends Request {
    RenameTo: string;
    WantsTextChanges?: boolean;
    ApplyTextChanges: boolean;
}
export interface FileOperationResponse {
    FileName: string;
    ModificationType: FileModificationType;
}
export interface ModifiedFileResponse extends FileOperationResponse {
    Buffer: string;
    Changes: TextChange[];
}
export interface RenamedFileResponse extends FileOperationResponse {
    NewFileName: string;
}
export interface OpenFileResponse extends FileOperationResponse {
}
export declare enum FileModificationType {
    Modified = 0,
    Opened = 1,
    Renamed = 2
}
export interface RenameResponse {
    Changes: ModifiedFileResponse[];
}
export interface SignatureHelp {
    Signatures: SignatureHelpItem[];
    ActiveSignature: number;
    ActiveParameter: number;
}
export interface SignatureHelpItem {
    Name: string;
    Label: string;
    Documentation: string;
    Parameters: SignatureHelpParameter[];
    StructuredDocumentation: DocumentationComment;
}
export interface SignatureHelpParameter {
    Name: string;
    Label: string;
    Documentation: string;
}
export interface MSBuildProjectDiagnostics {
    FileName: string;
    Warnings: MSBuildDiagnosticsMessage[];
    Errors: MSBuildDiagnosticsMessage[];
}
export interface MSBuildDiagnosticsMessage {
    LogLevel: string;
    FileName: string;
    Text: string;
    StartLine: number;
    StartColumn: number;
    EndLine: number;
    EndColumn: number;
}
export interface ErrorMessage {
    Text: string;
    FileName: string;
    Line: number;
    Column: number;
}
export interface PackageRestoreMessage {
    FileName: string;
    Succeeded: boolean;
}
export interface UnresolvedDependenciesMessage {
    FileName: string;
    UnresolvedDependencies: PackageDependency[];
}
export interface ProjectConfigurationMessage {
    ProjectId: string;
    SessionId: string;
    OutputKind: number;
    ProjectCapabilities: string[];
    TargetFrameworks: string[];
    References: string[];
    FileExtensions: string[];
    FileCounts: number[];
}
export interface PackageDependency {
    Name: string;
    Version: string;
}
export interface FilesChangedRequest extends Request {
    ChangeType: FileChangeType;
}
export declare enum FileChangeType {
    Change = "Change",
    Create = "Create",
    Delete = "Delete",
    DirectoryDelete = "DirectoryDelete"
}
export declare enum FixAllScope {
    Document = "Document",
    Project = "Project",
    Solution = "Solution"
}
export interface GetFixAllRequest extends FileBasedRequest {
    Scope: FixAllScope;
    FixAllFilter?: FixAllItem[];
}
export interface RunFixAllRequest extends FileBasedRequest {
    Scope: FixAllScope;
    FixAllFilter?: FixAllItem[];
    WantsTextChanges: boolean;
    WantsAllCodeActionOperations: boolean;
    ApplyChanges: boolean;
}
export interface QuickInfoRequest extends Request {
}
export interface QuickInfoResponse {
    Markdown?: string;
}
export interface CompletionRequest extends Request {
    CompletionTrigger: CompletionTriggerKind;
    TriggerCharacter?: string;
}
export interface CompletionResponse {
    IsIncomplete: boolean;
    Items: OmnisharpCompletionItem[];
}
export interface CompletionResolveRequest {
    Item: OmnisharpCompletionItem;
}
export interface CompletionResolveResponse {
    Item: OmnisharpCompletionItem;
}
export interface CompletionAfterInsertionRequest {
    Item: OmnisharpCompletionItem;
}
export interface CompletionAfterInsertResponse {
    Changes?: LinePositionSpanTextChange[];
    Line?: number;
    Column?: number;
}
export interface OmnisharpCompletionItem {
    Label: string;
    Kind: CompletionItemKind;
    Tags?: CompletionItemTag[];
    Detail?: string;
    Documentation?: string;
    Preselect: boolean;
    SortText?: string;
    FilterText?: string;
    InsertText?: string;
    InsertTextFormat?: InsertTextFormat;
    TextEdit?: LinePositionSpanTextChange;
    CommitCharacters?: string[];
    AdditionalTextEdits?: LinePositionSpanTextChange[];
    Data: any;
    HasAfterInsertStep: boolean;
}
export interface SourceGeneratedFileInfo {
    ProjectGuid: string;
    DocumentGuid: string;
}
export interface SourceGeneratedFileRequest extends SourceGeneratedFileInfo {
}
export interface SourceGeneratedFileResponse {
    Source: string;
    SourceName: string;
}
export interface UpdateSourceGeneratedFileRequest extends SourceGeneratedFileInfo {
}
export interface UpdateSourceGeneratedFileResponse {
    UpdateType: UpdateType;
    Source?: string;
}
export declare enum UpdateType {
    Unchanged = 0,
    Deleted = 1,
    Modified = 2
}
export interface SourceGeneratedFileClosedRequest extends SourceGeneratedFileInfo {
}
export interface InlayHintRequest {
    Location: V2.Location;
}
export interface InlayHint {
    Position: V2.Point;
    Label: string;
    Tooltip?: string;
    Data: any;
}
export interface InlayHintResponse {
    InlayHints: InlayHint[];
}
export interface InlayHintResolve {
    Hint: InlayHint;
}
export interface Definition {
    Location: V2.Location;
    MetadataSource?: MetadataSource;
    SourceGeneratedFileInfo?: SourceGeneratedFileInfo;
}
export interface GoToTypeDefinitionRequest extends Request {
    WantMetadata?: boolean;
}
export interface GoToTypeDefinitionResponse {
    Definitions?: Definition[];
}
export declare namespace V2 {
    export module Requests {
        const GetCodeActions = "/v2/getcodeactions";
        const RunCodeAction = "/v2/runcodeaction";
        const GetTestStartInfo = "/v2/getteststartinfo";
        const RunTest = "/v2/runtest";
        const RunAllTestsInClass = "/v2/runtestsinclass";
        const RunTestsInContext = "/v2/runtestsincontext";
        const DebugTestGetStartInfo = "/v2/debugtest/getstartinfo";
        const DebugTestsInClassGetStartInfo = "/v2/debugtestsinclass/getstartinfo";
        const DebugTestsInContextGetStartInfo = "/v2/debugtestsincontext/getstartinfo";
        const DebugTestLaunch = "/v2/debugtest/launch";
        const DebugTestStop = "/v2/debugtest/stop";
        const DiscoverTests = "/v2/discovertests";
        const BlockStructure = "/v2/blockstructure";
        const CodeStructure = "/v2/codestructure";
        const Highlight = "/v2/highlight";
        const GoToDefinition = "/v2/gotodefinition";
    }
    export interface SemanticHighlightSpan {
        StartLine: number;
        StartColumn: number;
        EndLine: number;
        EndColumn: number;
        Type: number;
        Modifiers: number[];
    }
    export interface SemanticHighlightRequest extends Request {
        Range?: Range;
        VersionedText?: string;
    }
    export interface SemanticHighlightResponse {
        Spans: SemanticHighlightSpan[];
    }
    export interface Point {
        Line: number;
        Column: number;
    }
    export interface Range {
        Start: Point;
        End: Point;
    }
    export interface Location {
        FileName: string;
        Range: Range;
    }
    export interface GetCodeActionsRequest extends Request {
        Selection?: Range;
    }
    export interface OmniSharpCodeAction {
        Identifier: string;
        Name: string;
    }
    export interface GetCodeActionsResponse {
        CodeActions: OmniSharpCodeAction[];
    }
    export interface RunCodeActionRequest extends Request {
        Identifier: string;
        Selection?: Range;
        WantsTextChanges: boolean;
        WantsAllCodeActionOperations: boolean;
        ApplyTextChanges: boolean;
    }
    export interface RunCodeActionResponse {
        Changes: FileOperationResponse[];
    }
    export interface MSBuildProjectDiagnostics {
        FileName: string;
        Warnings: MSBuildDiagnosticsMessage[];
        Errors: MSBuildDiagnosticsMessage[];
    }
    export interface MSBuildDiagnosticsMessage {
        LogLevel: string;
        FileName: string;
        Text: string;
        StartLine: number;
        StartColumn: number;
        EndLine: number;
        EndColumn: number;
    }
    export interface ErrorMessage {
        Text: string;
        FileName: string;
        Line: number;
        Column: number;
    }
    export interface PackageRestoreMessage {
        FileName: string;
        Succeeded: boolean;
    }
    export interface UnresolvedDependenciesMessage {
        FileName: string;
        UnresolvedDependencies: PackageDependency[];
    }
    export interface PackageDependency {
        Name: string;
        Version: string;
    }
    interface BaseTestRequest extends Request {
        RunSettings: string;
        TestFrameworkName: string;
        TargetFrameworkVersion: string;
        NoBuild?: boolean;
    }
    interface SingleTestRequest extends BaseTestRequest {
        MethodName: string;
    }
    interface MultiTestRequest extends BaseTestRequest {
        MethodNames: string[];
    }
    interface TestsInContextRequest extends Request {
        RunSettings?: string;
        TargetFrameworkVersion?: string;
    }
    export interface DebugTestGetStartInfoRequest extends SingleTestRequest {
    }
    export interface DebugTestClassGetStartInfoRequest extends MultiTestRequest {
    }
    export interface DebugTestGetStartInfoResponse {
        FileName: string;
        Arguments: string;
        WorkingDirectory: string;
        EnvironmentVariables: Map<string, string>;
        Succeeded: boolean;
        ContextHadNoTests: boolean;
        FailureReason?: string;
    }
    export interface DebugTestLaunchRequest extends Request {
        TargetProcessId: number;
    }
    export interface DebugTestLaunchResponse {
    }
    export interface DebugTestStopRequest extends Request {
    }
    export interface DebugTestStopResponse {
    }
    export interface DiscoverTestsRequest extends BaseTestRequest {
    }
    export interface TestInfo {
        FullyQualifiedName: string;
        DisplayName: string;
        Source: string;
        CodeFilePath: string;
        LineNumber: number;
    }
    export interface DiscoverTestsResponse {
        Tests: TestInfo[];
    }
    export interface GetTestStartInfoRequest extends SingleTestRequest {
    }
    export interface GetTestStartInfoResponse {
        Executable: string;
        Argument: string;
        WorkingDirectory: string;
    }
    export interface RunTestRequest extends SingleTestRequest {
    }
    export interface RunTestsInClassRequest extends MultiTestRequest {
    }
    export interface RunTestsInContextRequest extends TestsInContextRequest {
    }
    export interface DebugTestsInContextGetStartInfoRequest extends TestsInContextRequest {
    }
    export module TestOutcomes {
        const None = "none";
        const Passed = "passed";
        const Failed = "failed";
        const Skipped = "skipped";
        const NotFound = "notfound";
    }
    export interface DotNetTestResult {
        MethodName: string;
        Outcome: string;
        ErrorMessage: string;
        ErrorStackTrace: string;
        StandardOutput: string[];
        StandardError: string[];
    }
    export interface RunTestResponse {
        Failure: string;
        Pass: boolean;
        Results: DotNetTestResult[];
        ContextHadNoTests: boolean;
    }
    export interface TestMessageEvent {
        MessageLevel: string;
        Message: string;
    }
    export interface BlockStructureRequest {
        FileName: string;
    }
    export interface BlockStructureResponse {
        Spans: CodeFoldingBlock[];
    }
    export interface CodeFoldingBlock {
        Range: Range;
        Kind: string;
    }
    export module SymbolKinds {
        const Class = "class";
        const Delegate = "delegate";
        const Enum = "enum";
        const Interface = "interface";
        const Struct = "struct";
        const Constant = "constant";
        const Constructor = "constructor";
        const Destructor = "destructor";
        const EnumMember = "enummember";
        const Event = "event";
        const Field = "field";
        const Indexer = "indexer";
        const Method = "method";
        const Operator = "operator";
        const Property = "property";
        const Namespace = "namespace";
        const Unknown = "unknown";
    }
    export module SymbolAccessibilities {
        const Internal = "internal";
        const Private = "private";
        const PrivateProtected = "private protected";
        const Protected = "protected";
        const ProtectedInternal = "protected internal";
        const Public = "public";
    }
    export module SymbolPropertyNames {
        const Accessibility = "accessibility";
        const Static = "static";
        const TestFramework = "testFramework";
        const TestMethodName = "testMethodName";
    }
    export module SymbolRangeNames {
        const Attributes = "attributes";
        const Full = "full";
        const Name = "name";
    }
    export namespace Structure {
        interface CodeElement {
            Kind: string;
            Name: string;
            DisplayName: string;
            Children?: CodeElement[];
            Ranges: {
                [name: string]: Range;
            };
            Properties?: {
                [name: string]: any;
            };
        }
        interface CodeStructureRequest extends FileBasedRequest {
        }
        interface CodeStructureResponse {
            Elements?: CodeElement[];
        }
        function walkCodeElements(elements: CodeElement[], action: (element: CodeElement, parentElement?: CodeElement) => void): void;
    }
    export interface GoToDefinitionRequest extends Request {
        WantMetadata?: boolean;
    }
    export interface GoToDefinitionResponse {
        Definitions?: Definition[];
    }
    export interface Definition {
        Location: Location;
        MetadataSource?: MetadataSource;
        SourceGeneratedFileInfo?: SourceGeneratedFileInfo;
    }
    export {};
}
export declare function findNetFrameworkTargetFramework(project: MSBuildProject): TargetFramework;
export declare function findNetCoreTargetFramework(project: MSBuildProject): TargetFramework;
export declare function findNetCoreAppTargetFramework(project: MSBuildProject): TargetFramework;
export declare function findModernNetFrameworkTargetFramework(project: MSBuildProject): TargetFramework;
export declare function findNetStandardTargetFramework(project: MSBuildProject): TargetFramework;
export declare function isDotNetCoreProject(project: MSBuildProject): Boolean;
export interface ProjectDescriptor {
    Name: string;
    Directory: string;
    FilePath: string;
}
export declare function getDotNetCoreProjectDescriptors(info: WorkspaceInformationResponse): ProjectDescriptor[];
export declare function findExecutableMSBuildProjects(projects: MSBuildProject[]): MSBuildProject[];
