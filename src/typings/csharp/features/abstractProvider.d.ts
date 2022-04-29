import { OmniSharpServer } from '../omnisharp/server';
import CompositeDisposable from '../CompositeDisposable';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export default abstract class AbstractProvider {
    protected _server: OmniSharpServer;
    protected _languageMiddlewareFeature: LanguageMiddlewareFeature;
    private _disposables;
    constructor(server: OmniSharpServer, languageMiddlewareFeature: LanguageMiddlewareFeature);
    protected addDisposables(disposables: CompositeDisposable): void;
    dispose: () => void;
}
