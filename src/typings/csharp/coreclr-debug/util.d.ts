import { PlatformInformation } from './../platform';
import { DotnetInfo } from '../utils/getDotnetInfo';
export declare class DotNetCliError extends Error {
    ErrorMessage: string;
    ErrorString: string;
}
export declare class CoreClrDebugUtil {
    private _extensionDir;
    private _debugAdapterDir;
    private _installCompleteFilePath;
    constructor(extensionDir: string);
    extensionDir(): string;
    debugAdapterDir(): string;
    installCompleteFilePath(): string;
    static writeEmptyFile(path: string): Promise<void>;
    defaultDotNetCliErrorMessage(): string;
    checkDotNetCli(): Promise<DotnetInfo>;
    static isMacOSSupported(): boolean;
    static existsSync(path: string): boolean;
    static getPlatformExeExtension(): string;
}
export declare function getTargetArchitecture(platformInfo: PlatformInformation, launchJsonTargetArchitecture: string, dotnetInfo: DotnetInfo): string;
