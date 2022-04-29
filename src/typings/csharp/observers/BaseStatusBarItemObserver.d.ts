import { StatusBarItem } from '../vscodeAdapter';
import { BaseEvent } from '../omnisharp/loggingEvents';
export declare abstract class BaseStatusBarItemObserver {
    private statusBarItem;
    constructor(statusBarItem: StatusBarItem);
    SetAndShowStatusBar(text: string, command: string, color?: string, tooltip?: string): void;
    ResetAndHideStatusBar(): void;
    abstract post: (event: BaseEvent) => void;
}
