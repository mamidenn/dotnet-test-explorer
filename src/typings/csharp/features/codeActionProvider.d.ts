import * as vscode from 'vscode';
import { OmniSharpServer } from '../omnisharp/server';
import AbstractProvider from './abstractProvider';
import OptionProvider from '../observers/OptionProvider';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
export default class CodeActionProvider extends AbstractProvider implements vscode.CodeActionProvider<vscode.CodeAction> {
    private optionProvider;
    private _commandId;
    constructor(server: OmniSharpServer, optionProvider: OptionProvider, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideCodeActions(document: vscode.TextDocument, range: vscode.Range | vscode.Selection, context: vscode.CodeActionContext, token: vscode.CancellationToken): Promise<vscode.CodeAction[]>;
    private _runCodeAction;
}
