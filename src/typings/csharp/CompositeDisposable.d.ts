import Disposable, { IDisposable } from "./Disposable";
export default class CompositeDisposable extends Disposable {
    private disposables;
    constructor(...disposables: IDisposable[]);
    add(disposable: IDisposable): void;
}
