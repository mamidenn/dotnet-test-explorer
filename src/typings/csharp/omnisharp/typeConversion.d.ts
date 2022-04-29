import * as protocol from './protocol';
import * as vscode from 'vscode';
export declare function toLocation(location: protocol.ResourceLocation | protocol.QuickFix): vscode.Location;
export declare function toLocationFromUri(uri: vscode.Uri, location: protocol.ResourceLocation | protocol.QuickFix): vscode.Location;
export declare function toVscodeLocation(omnisharpLocation: protocol.V2.Location): vscode.Location;
export declare function toRange(rangeLike: {
    Line: number;
    Column: number;
    EndLine: number;
    EndColumn: number;
}): vscode.Range;
export declare function toRange2(rangeLike: {
    StartLine: number;
    StartColumn: number;
    EndLine: number;
    EndColumn: number;
}): vscode.Range;
export declare function toRange3(range: protocol.V2.Range): vscode.Range;
export declare function toVSCodeRange(StartLine: number, StartColumn: number, EndLine: number, EndColumn: number): vscode.Range;
export declare function fromVSCodeRange(range: vscode.Range): protocol.V2.Range;
export declare function fromVSCodePosition(position: vscode.Position): protocol.V2.Point;
export declare function toVSCodePosition(point: protocol.V2.Point): vscode.Position;
export declare function createRequest<T extends protocol.Request>(document: vscode.TextDocument, where: vscode.Position | vscode.Range, includeBuffer?: boolean): T;
