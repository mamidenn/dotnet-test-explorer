import { PlatformInformation } from "../platform";
import { BaseEvent } from "../omnisharp/loggingEvents";
export interface ITelemetryReporter {
    sendTelemetryEvent(eventName: string, properties?: {
        [key: string]: string;
    }, measures?: {
        [key: string]: number;
    }): void;
    sendTelemetryErrorEvent(eventName: string, properties?: {
        [key: string]: string;
    }, measures?: {
        [key: string]: number;
    }, errorProps?: string[]): void;
}
export declare class TelemetryObserver {
    private reporter;
    private platformInfo;
    private solutionId;
    private dotnetInfo;
    constructor(platformInfo: PlatformInformation, reporterCreator: () => ITelemetryReporter);
    post: (event: BaseEvent) => void;
    private handleTelemetryEventMeasures;
    private handleOmnisharpInitialisation;
    private handleInstallationSuccess;
    private handleInstallationFailure;
    private handleTestExecutionCountReport;
    private handleProjectConfigurationReceived;
    private getTelemetryProps;
    private createSolutionId;
}
