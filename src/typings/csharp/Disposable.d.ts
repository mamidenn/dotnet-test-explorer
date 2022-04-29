import { Subscription } from "rxjs";
export default class Disposable implements IDisposable {
    private onDispose;
    constructor(onDispose: {
        (): void;
    } | Subscription);
    dispose: () => void;
}
export interface IDisposable {
    dispose: () => void;
}
