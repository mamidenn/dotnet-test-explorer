export declare function CreateTmpFile(): Promise<TmpAsset>;
export declare function CreateTmpDir(unsafeCleanup: boolean): Promise<TmpAsset>;
export interface TmpAsset {
    fd: number;
    name: string;
    dispose: () => void;
}
