import * as vscode from 'vscode';
import { OmniSharpServer } from '../omnisharp/server';
import AbstractProvider from './abstractProvider';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export declare class FixAllProvider extends AbstractProvider implements vscode.CodeActionProvider {
    private server;
    static fixAllCodeActionKind: vscode.CodeActionKind;
    static metadata: vscode.CodeActionProviderMetadata;
    constructor(server: OmniSharpServer, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideCodeActions(document: vscode.TextDocument, _range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, _token: vscode.CancellationToken): Promise<vscode.CodeAction[]>;
    private fixAllMenu;
    private applyFixes;
}
