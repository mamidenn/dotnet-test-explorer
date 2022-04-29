import * as vscode from 'vscode';
import { PlatformInformation } from './../platform';
import { EventStream } from '../EventStream';
import CSharpExtensionExports from '../CSharpExtensionExports';
export declare function activate(thisExtension: vscode.Extension<CSharpExtensionExports>, context: vscode.ExtensionContext, platformInformation: PlatformInformation, eventStream: EventStream): Promise<void>;
export declare class DebugAdapterExecutableFactory implements vscode.DebugAdapterDescriptorFactory {
    private readonly platformInfo;
    private readonly eventStream;
    private readonly packageJSON;
    private readonly extensionPath;
    constructor(platformInfo: PlatformInformation, eventStream: EventStream, packageJSON: any, extensionPath: string);
    createDebugAdapterDescriptor(_session: vscode.DebugSession, executable: vscode.DebugAdapterExecutable | undefined): Promise<vscode.DebugAdapterDescriptor>;
}
