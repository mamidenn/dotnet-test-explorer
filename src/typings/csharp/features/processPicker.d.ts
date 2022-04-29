import * as vscode from 'vscode';
import { PlatformInformation } from '../platform';
export interface AttachItem extends vscode.QuickPickItem {
    id: string;
    flags: number;
}
export interface AttachItemsProvider {
    getAttachItems(): Promise<AttachItem[]>;
}
export declare class AttachPicker {
    private attachItemsProvider;
    constructor(attachItemsProvider: AttachItemsProvider);
    ShowAttachEntries(): Promise<AttachItem>;
}
interface IPipeTransportOptions {
    pipeProgram: string;
    pipeArgs: string | string[];
    pipeCwd: string;
    quoteArgs: boolean;
}
export declare class RemoteAttachPicker {
    static get commColumnTitle(): string;
    static get linuxPsCommand(): string;
    static get osxPsCommand(): string;
    static get debuggerCommand(): string;
    static get scriptShellCmd(): string;
    private static _channel;
    static ValidateAndFixPipeProgram(program: string): Promise<string>;
    static getPipeTransportOptions(pipeTransport: any, osPlatform: string): IPipeTransportOptions;
    private static getPlatformSpecificPipeTransportOptions;
    private static createPipeCmd;
    static createPipeCmdFromString(pipeProgram: string, pipeArgs: string, quoteArgs: boolean): string;
    static createPipeCmdFromArray(pipeProgram: string, pipeArgs: string[], quoteArgs: boolean): string;
    static quoteArg(arg: string, quoteArg?: boolean): string;
    static createArgumentList(args: string[]): string;
    static ShowAttachEntries(args: any, platformInfo: PlatformInformation): Promise<AttachItem>;
    static getRemoteOSAndProcesses(pipeCmd: string, pipeCwd: string, platformInfo: PlatformInformation): Promise<AttachItem[]>;
}
export declare class Process {
    name: string;
    pid: string;
    commandLine: string;
    flags: number;
    constructor(name: string, pid: string, commandLine: string, flags: number);
    toAttachItem(): AttachItem;
}
export declare class DotNetAttachItemsProviderFactory {
    static Get(): AttachItemsProvider;
}
declare abstract class DotNetAttachItemsProvider implements AttachItemsProvider {
    protected abstract getInternalProcessEntries(): Promise<Process[]>;
    getAttachItems(): Promise<AttachItem[]>;
}
export declare class PsAttachItemsProvider extends DotNetAttachItemsProvider {
    protected getInternalProcessEntries(): Promise<Process[]>;
}
export declare class PsOutputParser {
    static get secondColumnCharacters(): number;
    static parseProcessFromPs(processes: string): Process[];
    static parseProcessFromPsArray(lines: string[]): Process[];
    private static parseLineFromPs;
}
export declare class CimAttachItemsProvider extends DotNetAttachItemsProvider {
    private pwsh;
    constructor(pwsh: string);
    protected getInternalProcessEntries(): Promise<Process[]>;
}
export declare class CimProcessParser {
    private static get extendedLengthPathPrefix();
    private static get ntObjectManagerPathPrefix();
    static ParseProcessFromCim(processes: string): Process[];
}
export declare class WmicAttachItemsProvider extends DotNetAttachItemsProvider {
    protected getInternalProcessEntries(): Promise<Process[]>;
}
export declare class WmicOutputParser {
    private static get wmicNameTitle();
    private static get wmicCommandLineTitle();
    private static get wmicPidTitle();
    static parseProcessFromWmic(processes: string): Process[];
    private static parseLineFromWmic;
}
export {};
