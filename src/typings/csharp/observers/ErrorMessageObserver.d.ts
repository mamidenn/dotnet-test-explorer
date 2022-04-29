import { BaseEvent, IntegrityCheckFailure } from "../omnisharp/loggingEvents";
import { vscode } from "../vscodeAdapter";
export declare class ErrorMessageObserver {
    private vscode;
    constructor(vscode: vscode);
    post: (event: BaseEvent) => void;
    handleIntegrityCheckFailure(event: IntegrityCheckFailure): void;
    private handleZipError;
    private handleDotnetTestRunFailure;
    private handleDotNetTestDebugStartFailure;
}
