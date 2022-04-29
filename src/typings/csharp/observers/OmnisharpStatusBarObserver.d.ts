import { BaseEvent } from "../omnisharp/loggingEvents";
import { BaseStatusBarItemObserver } from './BaseStatusBarItemObserver';
export declare enum StatusBarColors {
    Red = "rgb(218,0,0)",
    Green = "rgb(0,218,0)",
    Yellow = "rgb(218,218,0)"
}
export declare class OmnisharpStatusBarObserver extends BaseStatusBarItemObserver {
    post: (event: BaseEvent) => void;
}
