import { BaseLoggerObserver } from "./BaseLoggerObserver";
import * as Event from "../omnisharp/loggingEvents";
export declare class CsharpLoggerObserver extends BaseLoggerObserver {
    private dots;
    post: (event: Event.BaseEvent) => void;
    private handleDownloadValidation;
    private handleIntegrityCheckSuccess;
    private handleIntegrityCheckFailure;
    private handleDownloadSizeObtained;
    private handleDownloadFallback;
    private handleEventWithMessage;
    private handlePackageInstallation;
    private handlePlatformInfo;
    private handleInstallationFailure;
    private handleDownloadProgress;
    private handleDownloadStart;
    private handleInstallationStart;
    private handleDocumentSynchronizationFailure;
}
