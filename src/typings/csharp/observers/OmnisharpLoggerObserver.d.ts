import { BaseLoggerObserver } from "./BaseLoggerObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class OmnisharpLoggerObserver extends BaseLoggerObserver {
    post: (event: BaseEvent) => void;
    private handleOmnisharpServerOnServerError;
    private handleOmnisharpInitialisation;
    private handleOmnisharpLaunch;
    private handleOmnisharpServerMsBuildProjectDiagnostics;
    private handleOmnisharpServerOnError;
    private handleOmnisharpEventPacketReceived;
    private _isFilterableOutput;
    private getLogLevelPrefix;
}
