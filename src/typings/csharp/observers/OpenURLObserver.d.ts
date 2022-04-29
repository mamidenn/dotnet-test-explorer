import { vscode } from "../vscodeAdapter";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class OpenURLObserver {
    private vscode;
    constructor(vscode: vscode);
    post: (event: BaseEvent) => void;
}
