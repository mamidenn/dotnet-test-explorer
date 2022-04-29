import { BaseLoggerObserver } from "./BaseLoggerObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class RazorLoggerObserver extends BaseLoggerObserver {
    post: (event: BaseEvent) => void;
    private handleRazorPluginPathSpecifiedMessage;
    private handleRazorPluginPathDoesNotExistMessage;
    private handleRazorDevMode;
}
