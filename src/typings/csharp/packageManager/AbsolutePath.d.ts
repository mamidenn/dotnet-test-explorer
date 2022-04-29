export declare class AbsolutePath {
    value: string;
    constructor(value: string);
    static getAbsolutePath(...pathSegments: string[]): AbsolutePath;
}
