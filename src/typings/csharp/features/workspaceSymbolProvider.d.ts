import AbstractSupport from './abstractProvider';
import { OmniSharpServer } from '../omnisharp/server';
import OptionProvider from '../observers/OptionProvider';
import { CancellationToken, WorkspaceSymbolProvider, SymbolInformation } from 'vscode';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export default class OmnisharpWorkspaceSymbolProvider extends AbstractSupport implements WorkspaceSymbolProvider {
    private optionProvider;
    constructor(server: OmniSharpServer, optionProvider: OptionProvider, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideWorkspaceSymbols(search: string, token: CancellationToken): Promise<SymbolInformation[]>;
    private static _asSymbolInformation;
    private static _toKind;
}
