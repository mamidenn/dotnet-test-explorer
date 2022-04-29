import * as ObservableEvent from "../omnisharp/loggingEvents";
import { vscode } from '../vscodeAdapter';
export declare class InformationMessageObserver {
    private vscode;
    constructor(vscode: vscode);
    post: (event: ObservableEvent.BaseEvent) => void;
    private handleOmnisharpServerUnresolvedDependencies;
}
