import { Subscription } from "rxjs";
import { BaseEvent } from "./omnisharp/loggingEvents";
export declare class EventStream {
    private sink;
    constructor();
    post(event: BaseEvent): void;
    subscribe(eventHandler: (event: BaseEvent) => void): Subscription;
}
