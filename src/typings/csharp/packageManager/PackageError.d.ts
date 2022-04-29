import { NestedError } from '../NestedError';
import { IPackage } from "./IPackage";
export declare class PackageError extends NestedError {
    message: string;
    pkg: IPackage;
    innerError: any;
    constructor(message: string, pkg?: IPackage, innerError?: any);
}
