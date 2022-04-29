import { AbsolutePath } from './packageManager/AbsolutePath';
export declare function setExtensionPath(path: string): void;
export declare function getExtensionPath(): string;
export declare function getUnixTempDirectory(): string;
export declare function isBoolean(obj: any): obj is boolean;
export declare function sum<T>(arr: T[], selector: (item: T) => number): number;
export declare function mapAsync<T1, T2>(array: T1[], selector: (value: T1, index: number, array: T1[]) => Promise<T2>): Promise<T2[]>;
export declare function filterAsync<T>(array: T[], predicate: (value: T, index: number, array: T[]) => Promise<boolean>): Promise<T[]>;
/** Retrieve the length of an array. Returns 0 if the array is `undefined`. */
export declare function safeLength<T>(arr: T[] | undefined): number;
export declare function buildPromiseChain<T, TResult>(array: T[], builder: (item: T) => Promise<TResult>): Promise<TResult>;
export declare function execChildProcess(command: string, workingDirectory?: string): Promise<string>;
export declare function getUnixChildProcessIds(pid: number): Promise<number[]>;
export declare function fileExists(filePath: string): Promise<boolean>;
export declare function deleteIfExists(filePath: string): Promise<void>;
export declare enum InstallFileType {
    Begin = 0,
    Lock = 1
}
export declare function getInstallFilePath(folderPath: AbsolutePath, type: InstallFileType): string;
export declare function installFileExists(folderPath: AbsolutePath, type: InstallFileType): Promise<boolean>;
export declare function touchInstallFile(folderPath: AbsolutePath, type: InstallFileType): Promise<void>;
export declare function deleteInstallFile(folderPath: AbsolutePath, type: InstallFileType): Promise<void>;
export declare function convertNativePathToPosix(pathString: string): string;
/**
 * This function checks to see if a subfolder is part of folder.
 *
 * Assumes subfolder and folder are absolute paths and have consistent casing.
 *
 * @param subfolder subfolder to check if it is part of the folder parameter
 * @param folder folder to check aganist
 */
export declare function isSubfolderOf(subfolder: string, folder: string): boolean;
/**
 * Find PowerShell executable from PATH (for Windows only).
 */
export declare function findPowerShell(): string | undefined;
