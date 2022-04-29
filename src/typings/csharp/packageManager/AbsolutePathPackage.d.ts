import { Package } from "./Package";
import { IPackage } from "./IPackage";
import { AbsolutePath } from "./AbsolutePath";
export declare class AbsolutePathPackage implements IPackage {
    id: string;
    description: string;
    url: string;
    platforms: string[];
    architectures: string[];
    binaries: AbsolutePath[];
    installPath?: AbsolutePath;
    installTestPath?: AbsolutePath;
    fallbackUrl?: string;
    platformId?: string;
    integrity?: string;
    isFramework?: boolean;
    constructor(id: string, description: string, url: string, platforms: string[], architectures: string[], binaries: AbsolutePath[], installPath?: AbsolutePath, installTestPath?: AbsolutePath, fallbackUrl?: string, platformId?: string, integrity?: string, isFramework?: boolean);
    static getAbsolutePathPackage(pkg: Package, extensionPath: string): AbsolutePathPackage;
}
