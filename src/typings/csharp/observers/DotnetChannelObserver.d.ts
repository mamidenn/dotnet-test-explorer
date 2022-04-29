import { BaseChannelObserver } from "./BaseChannelObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export declare class DotNetChannelObserver extends BaseChannelObserver {
    post: (event: BaseEvent) => void;
}
