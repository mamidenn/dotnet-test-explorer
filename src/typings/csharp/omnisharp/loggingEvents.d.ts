import { PlatformInformation } from "../platform";
import { Request } from "./requestQueue";
import * as protocol from './protocol';
import { LaunchTarget } from "./launcher";
import { EventType } from "./EventType";
export interface BaseEvent {
    type: EventType;
}
export declare class TelemetryEvent implements BaseEvent {
    eventName: string;
    properties?: {
        [key: string]: string;
    };
    measures?: {
        [key: string]: number;
    };
    type: EventType;
    constructor(eventName: string, properties?: {
        [key: string]: string;
    }, measures?: {
        [key: string]: number;
    });
}
export declare class TelemetryErrorEvent implements BaseEvent {
    eventName: string;
    properties?: {
        [key: string]: string;
    };
    measures?: {
        [key: string]: number;
    };
    errorProps?: string[];
    type: EventType;
    constructor(eventName: string, properties?: {
        [key: string]: string;
    }, measures?: {
        [key: string]: number;
    }, errorProps?: string[]);
}
export declare class TelemetryEventWithMeasures implements BaseEvent {
    eventName: string;
    measures: {
        [key: string]: number;
    };
    type: EventType;
    constructor(eventName: string, measures: {
        [key: string]: number;
    });
}
export declare class OmnisharpDelayTrackerEventMeasures extends TelemetryEventWithMeasures {
    type: EventType;
}
export declare class OmnisharpStart extends TelemetryEventWithMeasures {
    type: EventType;
}
export declare class OmnisharpInitialisation implements BaseEvent {
    timeStamp: Date;
    solutionPath: string;
    type: EventType;
    constructor(timeStamp: Date, solutionPath: string);
}
export declare class OmnisharpLaunch implements BaseEvent {
    hostVersion: string;
    hostPath: string;
    hostIsMono: boolean;
    command: string;
    pid: number;
    type: EventType;
    constructor(hostVersion: string, hostPath: string, hostIsMono: boolean, command: string, pid: number);
}
export declare class PackageInstallStart implements BaseEvent {
    type: EventType;
}
export declare class PackageInstallation implements BaseEvent {
    packageInfo: string;
    type: EventType;
    constructor(packageInfo: string);
}
export declare class LogPlatformInfo implements BaseEvent {
    info: PlatformInformation;
    type: EventType;
    constructor(info: PlatformInformation);
}
export declare class InstallationStart implements BaseEvent {
    packageDescription: string;
    type: EventType;
    constructor(packageDescription: string);
}
export declare class InstallationFailure implements BaseEvent {
    stage: string;
    error: any;
    type: EventType;
    constructor(stage: string, error: any);
}
export declare class DownloadProgress implements BaseEvent {
    downloadPercentage: number;
    packageDescription: string;
    type: EventType;
    constructor(downloadPercentage: number, packageDescription: string);
}
export declare class OmnisharpFailure implements BaseEvent {
    message: string;
    error: Error;
    type: EventType;
    constructor(message: string, error: Error);
}
export declare class OmnisharpRequestMessage implements BaseEvent {
    request: Request;
    id: number;
    type: EventType;
    constructor(request: Request, id: number);
}
export declare class TestExecutionCountReport implements BaseEvent {
    debugCounts: {
        [testFrameworkName: string]: number;
    };
    runCounts: {
        [testFrameworkName: string]: number;
    };
    type: EventType;
    constructor(debugCounts: {
        [testFrameworkName: string]: number;
    }, runCounts: {
        [testFrameworkName: string]: number;
    });
}
export declare class OmnisharpServerOnError implements BaseEvent {
    errorMessage: protocol.ErrorMessage;
    type: EventType;
    constructor(errorMessage: protocol.ErrorMessage);
}
export declare class OmnisharpProjectDiagnosticStatus implements BaseEvent {
    message: protocol.ProjectDiagnosticStatus;
    type: EventType;
    constructor(message: protocol.ProjectDiagnosticStatus);
}
export declare class OmnisharpServerMsBuildProjectDiagnostics implements BaseEvent {
    diagnostics: protocol.MSBuildProjectDiagnostics;
    type: EventType;
    constructor(diagnostics: protocol.MSBuildProjectDiagnostics);
}
export declare class OmnisharpServerUnresolvedDependencies implements BaseEvent {
    unresolvedDependencies: protocol.UnresolvedDependenciesMessage;
    type: EventType;
    constructor(unresolvedDependencies: protocol.UnresolvedDependenciesMessage);
}
export declare class OmnisharpServerEnqueueRequest implements BaseEvent {
    queueName: string;
    command: string;
    type: EventType;
    constructor(queueName: string, command: string);
}
export declare class OmnisharpServerDequeueRequest implements BaseEvent {
    queueName: string;
    queueStatus: string;
    command: string;
    id?: number;
    type: EventType;
    constructor(queueName: string, queueStatus: string, command: string, id?: number);
}
export declare class OmnisharpServerRequestCancelled implements BaseEvent {
    command: string;
    id: number;
    type: EventType;
    constructor(command: string, id: number);
}
export declare class OmnisharpServerProcessRequestStart implements BaseEvent {
    name: string;
    availableRequestSlots: number;
    type: EventType;
    constructor(name: string, availableRequestSlots: number);
}
export declare class OmnisharpEventPacketReceived implements BaseEvent {
    logLevel: string;
    name: string;
    message: string;
    type: EventType;
    constructor(logLevel: string, name: string, message: string);
}
export declare class OmnisharpServerOnServerError implements BaseEvent {
    err: any;
    type: EventType;
    constructor(err: any);
}
export declare class OmnisharpOnMultipleLaunchTargets implements BaseEvent {
    targets: LaunchTarget[];
    type: EventType;
    constructor(targets: LaunchTarget[]);
}
export declare class ProjectConfiguration implements BaseEvent {
    projectConfiguration: protocol.ProjectConfigurationMessage;
    type: EventType;
    constructor(projectConfiguration: protocol.ProjectConfigurationMessage);
}
export declare class WorkspaceInformationUpdated implements BaseEvent {
    info: protocol.WorkspaceInformationResponse;
    type: EventType;
    constructor(info: protocol.WorkspaceInformationResponse);
}
export declare class EventWithMessage implements BaseEvent {
    message: string;
    type: EventType;
    constructor(message: string);
}
export declare class DownloadStart implements BaseEvent {
    packageDescription: string;
    type: EventType;
    constructor(packageDescription: string);
}
export declare class DownloadFallBack implements BaseEvent {
    fallbackUrl: string;
    type: EventType;
    constructor(fallbackUrl: string);
}
export declare class DownloadSizeObtained implements BaseEvent {
    packageSize: number;
    type: EventType;
    constructor(packageSize: number);
}
export declare class ZipError implements BaseEvent {
    message: string;
    type: EventType;
    constructor(message: string);
}
export declare class ReportDotNetTestResults implements BaseEvent {
    results: protocol.V2.DotNetTestResult[];
    type: EventType;
    constructor(results: protocol.V2.DotNetTestResult[]);
}
export declare class DotNetTestRunStart implements BaseEvent {
    testMethod: string;
    type: EventType;
    constructor(testMethod: string);
}
export declare class DotNetTestDebugStart implements BaseEvent {
    testMethod: string;
    type: EventType;
    constructor(testMethod: string);
}
export declare class DotNetTestDebugProcessStart implements BaseEvent {
    targetProcessId: number;
    type: EventType;
    constructor(targetProcessId: number);
}
export declare class DotNetTestsInClassRunStart implements BaseEvent {
    className: string;
    type: EventType;
    constructor(className: string);
}
export declare class DotNetTestsInClassDebugStart implements BaseEvent {
    className: string;
    type: EventType;
    constructor(className: string);
}
export declare class DotNetTestRunInContextStart implements BaseEvent {
    fileName: string;
    line: number;
    column: number;
    type: EventType;
    constructor(fileName: string, line: number, column: number);
}
export declare class DotNetTestDebugInContextStart implements BaseEvent {
    fileName: string;
    line: number;
    column: number;
    type: EventType;
    constructor(fileName: string, line: number, column: number);
}
export declare class DocumentSynchronizationFailure implements BaseEvent {
    documentPath: string;
    errorMessage: string;
    type: EventType;
    constructor(documentPath: string, errorMessage: string);
}
export declare class OpenURL {
    url: string;
    type: EventType;
    constructor(url: string);
}
export declare class IntegrityCheckFailure {
    packageDescription: string;
    url: string;
    retry: boolean;
    type: EventType;
    constructor(packageDescription: string, url: string, retry: boolean);
}
export declare class IntegrityCheckSuccess {
    type: EventType;
    constructor();
}
export declare class RazorPluginPathSpecified implements BaseEvent {
    path: string;
    type: EventType;
    constructor(path: string);
}
export declare class RazorPluginPathDoesNotExist implements BaseEvent {
    path: string;
    type: EventType;
    constructor(path: string);
}
export declare class DebuggerPrerequisiteFailure extends EventWithMessage {
    type: EventType;
}
export declare class DebuggerPrerequisiteWarning extends EventWithMessage {
    type: EventType;
}
export declare class CommandDotNetRestoreProgress extends EventWithMessage {
    type: EventType;
}
export declare class CommandDotNetRestoreSucceeded extends EventWithMessage {
    type: EventType;
}
export declare class CommandDotNetRestoreFailed extends EventWithMessage {
    type: EventType;
}
export declare class DownloadSuccess extends EventWithMessage {
    type: EventType;
}
export declare class DownloadFailure extends EventWithMessage {
    type: EventType;
}
export declare class OmnisharpServerOnStdErr extends EventWithMessage {
    type: EventType;
}
export declare class OmnisharpServerMessage extends EventWithMessage {
    type: EventType;
}
export declare class OmnisharpServerVerboseMessage extends EventWithMessage {
    type: EventType;
}
export declare class DotNetTestMessage extends EventWithMessage {
    type: EventType;
}
export declare class DotNetTestRunFailure extends EventWithMessage {
    type: EventType;
}
export declare class DotNetTestDebugWarning extends EventWithMessage {
    type: EventType;
}
export declare class DotNetTestDebugStartFailure extends EventWithMessage {
    type: EventType;
}
export declare class RazorDevModeActive implements BaseEvent {
    type: EventType;
}
export declare class ProjectModified implements BaseEvent {
    type: EventType;
}
export declare class ActivationFailure implements BaseEvent {
    type: EventType;
}
export declare class ShowOmniSharpChannel implements BaseEvent {
    type: EventType;
}
export declare class DebuggerNotInstalledFailure implements BaseEvent {
    type: EventType;
}
export declare class CommandDotNetRestoreStart implements BaseEvent {
    type: EventType;
}
export declare class InstallationSuccess implements BaseEvent {
    type: EventType;
}
export declare class OmnisharpServerProcessRequestComplete implements BaseEvent {
    type: EventType;
}
export declare class ProjectJsonDeprecatedWarning implements BaseEvent {
    type: EventType;
}
export declare class OmnisharpOnBeforeServerStart implements BaseEvent {
    type: EventType;
}
export declare class OmnisharpOnBeforeServerInstall implements BaseEvent {
    type: EventType;
}
export declare class ActiveTextEditorChanged implements BaseEvent {
    type: EventType;
}
export declare class OmnisharpServerOnStop implements BaseEvent {
    type: EventType;
}
export declare class OmnisharpServerOnStart implements BaseEvent {
    type: EventType;
}
export declare class LatestBuildDownloadStart implements BaseEvent {
    type: EventType;
}
export declare class OmnisharpRestart implements BaseEvent {
    type: EventType;
}
export declare class DotNetTestDebugComplete implements BaseEvent {
    type: EventType;
}
export declare class DownloadValidation implements BaseEvent {
    type: EventType;
}
