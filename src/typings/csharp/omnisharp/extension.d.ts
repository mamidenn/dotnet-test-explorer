import * as vscode from 'vscode';
import { Advisor } from '../features/diagnosticsProvider';
import { OmniSharpServer } from './server';
import TestManager from '../features/dotnetTest';
import { PlatformInformation } from '../platform';
import { EventStream } from '../EventStream';
import { NetworkSettingsProvider } from '../NetworkSettings';
import OptionProvider from '../observers/OptionProvider';
export interface ActivationResult {
    readonly server: OmniSharpServer;
    readonly advisor: Advisor;
    readonly testManager: TestManager;
}
export declare function activate(context: vscode.ExtensionContext, packageJSON: any, platformInfo: PlatformInformation, provider: NetworkSettingsProvider, eventStream: EventStream, optionProvider: OptionProvider, extensionPath: string): Promise<ActivationResult>;
