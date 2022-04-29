import { EventStream } from '../EventStream';
export interface Request {
    command: string;
    data?: any;
    onSuccess(value: any): void;
    onError(err: any): void;
    startTime?: number;
    endTime?: number;
    id?: number;
}
export declare class RequestQueueCollection {
    private _isProcessing;
    private _priorityQueue;
    private _normalQueue;
    private _deferredQueue;
    constructor(eventStream: EventStream, concurrency: number, makeRequest: (request: Request) => number);
    private getQueue;
    isEmpty(): boolean;
    enqueue(request: Request): void;
    dequeue(command: string, seq: number): Request;
    cancelRequest(request: Request): void;
    drain(): boolean;
}
