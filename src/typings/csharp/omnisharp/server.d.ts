import * as protocol from './protocol';
import { vscode, CancellationToken } from '../vscodeAdapter';
import { LaunchTarget } from './launcher';
import { PlatformInformation } from '../platform';
import { EventStream } from '../EventStream';
import { NetworkSettingsProvider } from '../NetworkSettings';
import Disposable from '../Disposable';
import OptionProvider from '../observers/OptionProvider';
import { IHostExecutableResolver } from '../constants/IHostExecutableResolver';
export declare class OmniSharpServer {
    private vscode;
    private packageJSON;
    private platformInfo;
    private eventStream;
    private optionProvider;
    private extensionPath;
    private monoResolver;
    private dotnetResolver;
    decompilationAuthorized: boolean;
    private static _nextId;
    private _readLine;
    private _disposables;
    private _delayTrackers;
    private _telemetryIntervalId;
    private _eventBus;
    private _state;
    private _launchTarget;
    private _requestQueue;
    private _serverProcess;
    private _sessionProperties;
    private _omnisharpManager;
    private updateProjectDebouncer;
    private firstUpdateProject;
    constructor(vscode: vscode, networkSettingsProvider: NetworkSettingsProvider, packageJSON: any, platformInfo: PlatformInformation, eventStream: EventStream, optionProvider: OptionProvider, extensionPath: string, monoResolver: IHostExecutableResolver, dotnetResolver: IHostExecutableResolver, decompilationAuthorized: boolean);
    get sessionProperties(): {
        [key: string]: any;
    };
    isRunning(): boolean;
    waitForEmptyEventQueue(): Promise<void>;
    private _setState;
    private _recordRequestDelay;
    private _reportTelemetry;
    getSolutionPathOrFolder(): string;
    onStdout(listener: (e: string) => any, thisArg?: any): Disposable;
    onStderr(listener: (e: string) => any, thisArg?: any): Disposable;
    onError(listener: (e: protocol.ErrorMessage) => any, thisArg?: any): Disposable;
    onServerError(listener: (err: any) => any, thisArg?: any): Disposable;
    onUnresolvedDependencies(listener: (e: protocol.UnresolvedDependenciesMessage) => any, thisArg?: any): Disposable;
    onBeforePackageRestore(listener: () => any, thisArg?: any): Disposable;
    onPackageRestore(listener: () => any, thisArg?: any): Disposable;
    onProjectChange(listener: (e: protocol.ProjectInformationResponse) => any, thisArg?: any): Disposable;
    onProjectAdded(listener: (e: protocol.ProjectInformationResponse) => any, thisArg?: any): Disposable;
    onProjectRemoved(listener: (e: protocol.ProjectInformationResponse) => any, thisArg?: any): Disposable;
    onProjectDiagnosticStatus(listener: (e: protocol.ProjectDiagnosticStatus) => any, thisArg?: any): Disposable;
    onMsBuildProjectDiagnostics(listener: (e: protocol.MSBuildProjectDiagnostics) => any, thisArg?: any): Disposable;
    onTestMessage(listener: (e: protocol.V2.TestMessageEvent) => any, thisArg?: any): Disposable;
    onBeforeServerInstall(listener: () => any): Disposable;
    onBeforeServerStart(listener: (e: string) => any): Disposable;
    onServerStart(listener: (e: string) => any): Disposable;
    onServerStop(listener: () => any): Disposable;
    onMultipleLaunchTargets(listener: (targets: LaunchTarget[]) => any, thisArg?: any): Disposable;
    onOmnisharpStart(listener: () => any): Disposable;
    private _addListener;
    protected _fireEvent(event: string, args: any): void;
    private _start;
    private onProjectConfigurationReceived;
    private debounceUpdateProjectWithLeadingTrue;
    private updateProjectInfo;
    stop(): Promise<void>;
    restart(launchTarget?: LaunchTarget): Promise<void>;
    autoStart(preferredPath: string): Thenable<void>;
    makeRequest<TResponse>(command: string, data?: any, token?: CancellationToken): Promise<TResponse>;
    private _doConnect;
    private _onLineReceived;
    private _handleResponsePacket;
    private _handleEventPacket;
    private _makeRequest;
}
