import AbstractSupport from './abstractProvider';
import * as vscode from 'vscode';
export default class OmnisharpDocumentSymbolProvider extends AbstractSupport implements vscode.DocumentSymbolProvider {
    provideDocumentSymbols(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.DocumentSymbol[]>;
}
