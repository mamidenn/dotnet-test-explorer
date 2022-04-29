import * as vscode from '../vscodeAdapter';
import { BaseEvent } from '../omnisharp/loggingEvents';
export declare abstract class BaseChannelObserver {
    private channel;
    constructor(channel: vscode.OutputChannel);
    abstract post: (event: BaseEvent) => void;
    showChannel(preserveFocus?: boolean): void;
    clearChannel(): void;
}
