import { PlatformInformation } from '../platform';
import { EventStream } from '../EventStream';
import { NetworkSettingsProvider } from '../NetworkSettings';
export declare class OmnisharpDownloader {
    private networkSettingsProvider;
    private eventStream;
    private packageJSON;
    private platformInfo;
    private extensionPath;
    constructor(networkSettingsProvider: NetworkSettingsProvider, eventStream: EventStream, packageJSON: any, platformInfo: PlatformInformation, extensionPath: string);
    DownloadAndInstallOmnisharp(version: string, useFramework: boolean, serverUrl: string, installPath: string): Promise<boolean>;
    GetLatestVersion(serverUrl: string, latestVersionFileServerPath: string): Promise<string>;
}
