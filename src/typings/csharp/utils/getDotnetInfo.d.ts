export declare const DOTNET_MISSING_MESSAGE = "A valid dotnet installation could not be found.";
export declare function getDotnetInfo(): Promise<DotnetInfo>;
export declare class DotnetInfo {
    FullInfo: string;
    Version: string;
    OsVersion: string;
    RuntimeId: string;
}
