import * as vscodeAdapter from './vscodeAdapter';
import * as vscode from 'vscode';
export declare class StatusBarItemAdapter implements vscodeAdapter.StatusBarItem {
    private statusBarItem;
    get alignment(): vscodeAdapter.StatusBarAlignment;
    get priority(): number;
    get text(): string;
    set text(value: string);
    get tooltip(): string;
    set tooltip(value: string);
    get color(): string;
    set color(value: string);
    get command(): string | vscode.Command;
    set command(value: string | vscode.Command);
    get name(): string;
    set name(value: string);
    show(): void;
    hide(): void;
    dispose(): void;
    constructor(statusBarItem: vscode.StatusBarItem);
}
