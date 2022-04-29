import * as vscode from 'vscode';
import AbstractProvider from './abstractProvider';
import { OmniSharpServer } from '../omnisharp/server';
import TestManager from './dotnetTest';
import OptionProvider from '../observers/OptionProvider';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export default class OmniSharpCodeLensProvider extends AbstractProvider implements vscode.CodeLensProvider {
    private optionProvider;
    constructor(server: OmniSharpServer, testManager: TestManager, optionProvider: OptionProvider, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.CodeLens[]>;
    resolveCodeLens(codeLens: vscode.CodeLens, token: vscode.CancellationToken): Promise<vscode.CodeLens>;
    private resolveReferencesCodeLens;
    private resolveTestCodeLens;
}
