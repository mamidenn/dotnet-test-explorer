export declare class DelayTracker {
    private _name;
    private _immediateDelays;
    private _nearImmediateDelays;
    private _shortDelays;
    private _mediumDelays;
    private _idleDelays;
    private _nonFocusDelays;
    private _bigDelays;
    constructor(name: string);
    reportDelay(elapsedTime: number): void;
    name(): string;
    clearMeasures(): void;
    hasMeasures(): boolean;
    getMeasures(): {
        [key: string]: number;
    };
}
