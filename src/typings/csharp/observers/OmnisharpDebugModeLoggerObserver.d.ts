import { BaseLoggerObserver } from "./BaseLoggerObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class OmnisharpDebugModeLoggerObserver extends BaseLoggerObserver {
    post: (event: BaseEvent) => void;
    private handleOmnisharpRequestMessage;
    private handleOmnisharpServerEnqueueRequest;
    private handleOmnisharpServerDequeueRequest;
    private handleOmnisharpServerRequestCancelled;
    private handleOmnisharpProcessRequestStart;
    private handleOmnisharpServerVerboseMessage;
    private handleOmnisharpEventPacketReceived;
    private _isFilterableOutput;
    private getLogLevelPrefix;
}
