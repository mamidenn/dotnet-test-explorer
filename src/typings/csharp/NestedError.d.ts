export declare class NestedError extends Error {
    message: string;
    err: Error;
    constructor(message: string, err?: Error);
}
