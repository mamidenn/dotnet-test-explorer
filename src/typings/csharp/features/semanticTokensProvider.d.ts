import * as vscode from 'vscode';
import * as protocol from '../omnisharp/protocol';
import AbstractProvider from './abstractProvider';
import { OmniSharpServer } from '../omnisharp/server';
import OptionProvider from '../observers/OptionProvider';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export default class SemanticTokensProvider extends AbstractProvider implements vscode.DocumentSemanticTokensProvider, vscode.DocumentRangeSemanticTokensProvider {
    private optionProvider;
    constructor(server: OmniSharpServer, optionProvider: OptionProvider, languageMiddlewareFeature: LanguageMiddlewareFeature);
    getLegend(): vscode.SemanticTokensLegend;
    provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens | null>;
    provideDocumentRangeSemanticTokens(document: vscode.TextDocument, range: vscode.Range, token: vscode.CancellationToken): Promise<vscode.SemanticTokens | null>;
    _provideSemanticTokens(document: vscode.TextDocument, range: protocol.V2.Range, token: vscode.CancellationToken): Promise<vscode.SemanticTokens | null>;
}
