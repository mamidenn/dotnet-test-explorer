import { BaseChannelObserver } from "./BaseChannelObserver";
import { BaseEvent } from "../omnisharp/loggingEvents";
export default class DotnetTestChannelObserver extends BaseChannelObserver {
    post: (event: BaseEvent) => void;
}
