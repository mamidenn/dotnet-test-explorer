import { BaseChannelObserver } from "./BaseChannelObserver";
import { vscode, OutputChannel } from '../vscodeAdapter';
import { BaseEvent } from '../omnisharp/loggingEvents';
export declare class OmnisharpChannelObserver extends BaseChannelObserver {
    private vscode;
    constructor(channel: OutputChannel, vscode: vscode);
    post: (event: BaseEvent) => void;
    private handleOmnisharpServerOnStdErr;
}
