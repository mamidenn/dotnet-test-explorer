import { BaseChannelObserver } from "./BaseChannelObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class CsharpChannelObserver extends BaseChannelObserver {
    post: (event: BaseEvent) => void;
}
