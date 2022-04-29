import { OmnisharpDownloader } from './OmnisharpDownloader';
import { PlatformInformation } from '../platform';
export interface LaunchInfo {
    LaunchPath?: string;
    MonoLaunchPath?: string;
    DotnetLaunchPath?: string;
}
export declare class OmnisharpManager {
    private downloader;
    private platformInfo;
    constructor(downloader: OmnisharpDownloader, platformInfo: PlatformInformation);
    GetOmniSharpLaunchInfo(defaultOmnisharpVersion: string, omnisharpPath: string, useFramework: boolean, serverUrl: string, latestVersionFileServerPath: string, installPath: string, extensionPath: string): Promise<LaunchInfo>;
    private InstallLatestAndReturnLaunchInfo;
    private InstallVersionAndReturnLaunchInfo;
    private GetLaunchPathForVersion;
    private GetLaunchInfo;
}
