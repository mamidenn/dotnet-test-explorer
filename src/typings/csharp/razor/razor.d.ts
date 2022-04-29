import * as vscode from 'vscode';
import { EventStream } from '../EventStream';
export declare function activateRazorExtension(context: vscode.ExtensionContext, extensionPath: string, eventStream: EventStream): Promise<void>;
