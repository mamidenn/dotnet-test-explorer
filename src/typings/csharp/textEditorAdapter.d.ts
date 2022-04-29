import * as vscodeAdapter from './vscodeAdapter';
import * as vscode from 'vscode';
export declare class TextEditorAdapter implements vscodeAdapter.TextEditor {
    private textEditor;
    get document(): any;
    constructor(textEditor: vscode.TextEditor);
}
