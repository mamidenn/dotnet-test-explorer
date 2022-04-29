import * as vscode from 'vscode';
import { LanguageMiddlewareFeature } from './LanguageMiddlewareFeature';
import { FileOperationResponse } from "./protocol";
export declare function buildEditForResponse(changes: FileOperationResponse[], languageMiddlewareFeature: LanguageMiddlewareFeature, token: vscode.CancellationToken): Promise<boolean>;
