import * as vscode from 'vscode';
import AbstractProvider from './abstractProvider';
import { OmniSharpServer } from '../omnisharp/server';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export default class CSharpInlayHintProvider extends AbstractProvider implements vscode.InlayHintsProvider {
    private readonly _onDidChangeInlayHints;
    readonly onDidChangeInlayHints: vscode.Event<void>;
    private readonly _hintsMap;
    constructor(server: OmniSharpServer, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideInlayHints(document: vscode.TextDocument, range: vscode.Range, token: vscode.CancellationToken): Promise<vscode.InlayHint[]>;
    resolveInlayHint?(hint: vscode.InlayHint, token: vscode.CancellationToken): Promise<vscode.InlayHint>;
    private toVscodeHint;
}
