import { BaseLoggerObserver } from "./BaseLoggerObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class DotnetLoggerObserver extends BaseLoggerObserver {
    post: (event: BaseEvent) => void;
}
