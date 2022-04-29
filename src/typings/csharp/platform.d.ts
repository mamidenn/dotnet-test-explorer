/**
 * There is no standard way on Linux to find the distribution name and version.
 * Recently, systemd has pushed to standardize the os-release file. This has
 * seen adoption in "recent" versions of all major distributions.
 * https://www.freedesktop.org/software/systemd/man/os-release.html
 */
export declare class LinuxDistribution {
    name: string;
    version: string;
    idLike?: string[];
    constructor(name: string, version: string, idLike?: string[]);
    static GetCurrent(): Promise<LinuxDistribution>;
    toString(): string;
    /**
     * Returns a string representation of LinuxDistribution that only returns the
     * distro name if it appears on an allowed list of known distros. Otherwise,
     * it returns 'other'.
     */
    toTelemetryString(): string;
    private static FromFilePath;
    static FromReleaseInfo(releaseInfo: string, eol?: string): LinuxDistribution;
}
export declare class PlatformInformation {
    platform: string;
    architecture: string;
    distribution: LinuxDistribution;
    constructor(platform: string, architecture: string, distribution?: LinuxDistribution);
    isWindows(): boolean;
    isMacOS(): boolean;
    isLinux(): boolean;
    toString(): string;
    static GetCurrent(): Promise<PlatformInformation>;
    private static GetWindowsArchitecture;
    private static GetUnixArchitecture;
    isValidPlatformForMono(): boolean;
}
