import { vscode } from '../vscodeAdapter';
import { BaseEvent } from "../omnisharp/loggingEvents";
import { Scheduler } from 'rxjs';
export declare class WarningMessageObserver {
    private vscode;
    private disableMsBuildDiagnosticWarning;
    private warningMessageDebouncer;
    constructor(vscode: vscode, disableMsBuildDiagnosticWarning: () => boolean, scheduler?: Scheduler);
    post: (event: BaseEvent) => void;
    private handleOmnisharpServerMsBuildProjectDiagnostics;
}
