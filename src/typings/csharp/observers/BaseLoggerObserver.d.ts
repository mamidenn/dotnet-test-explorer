import * as vscode from '../vscodeAdapter';
import { Logger } from "../logger";
import { BaseEvent } from '../omnisharp/loggingEvents';
export declare abstract class BaseLoggerObserver {
    logger: Logger;
    constructor(channel: vscode.OutputChannel | Logger);
    abstract post: (event: BaseEvent) => void;
}
