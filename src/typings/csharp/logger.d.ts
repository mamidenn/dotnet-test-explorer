export declare function SubscribeToAllLoggers(subscriber: (message: string) => void): void;
export declare class Logger {
    private _writer;
    private _prefix;
    private _indentLevel;
    private _indentSize;
    private _atLineStart;
    constructor(writer: (message: string) => void, prefix?: string);
    private _appendCore;
    increaseIndent(): void;
    decreaseIndent(): void;
    append(message?: string): void;
    appendLine(message?: string): void;
    private write;
}
