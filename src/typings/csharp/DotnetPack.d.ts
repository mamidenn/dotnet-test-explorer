export interface DotnetPackExtensionExports {
    getDotnetPath(version?: string): Promise<string | undefined>;
}
export declare function getDotnetPackApi(): Promise<DotnetPackExtensionExports>;
