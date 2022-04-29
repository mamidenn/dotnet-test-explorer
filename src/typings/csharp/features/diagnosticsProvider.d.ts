import { OmniSharpServer } from '../omnisharp/server';
import { IDisposable } from '../Disposable';
import OptionProvider from '../observers/OptionProvider';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export declare class Advisor {
    private optionProvider;
    private _disposable;
    private _server;
    private _packageRestoreCounter;
    private _projectSourceFileCounts;
    constructor(server: OmniSharpServer, optionProvider: OptionProvider);
    dispose(): void;
    shouldValidateFiles(): boolean;
    shouldValidateAll(): boolean;
    private _updateProjectFileCount;
    private _addOrUpdateProjectFileCount;
    private _removeProjectFileCount;
    private _onProjectAdded;
    private _onProjectRemoved;
    private _onProjectChange;
    private _onBeforePackageRestore;
    private _onPackageRestore;
    private _isRestoringPackages;
    private _isServerStarted;
    private _isOverFileLimit;
}
export default function reportDiagnostics(server: OmniSharpServer, advisor: Advisor, languageMiddlewareFeature: LanguageMiddlewareFeature): IDisposable;
