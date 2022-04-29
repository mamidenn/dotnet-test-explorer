import { IPackage } from "./IPackage";
export interface Package extends IPackage {
    installPath?: string;
    binaries?: string[];
    installTestPath?: string;
}
