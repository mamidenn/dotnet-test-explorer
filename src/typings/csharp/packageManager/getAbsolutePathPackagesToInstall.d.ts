import { PlatformInformation } from "../platform";
import { AbsolutePathPackage } from "./AbsolutePathPackage";
import { Package } from "./Package";
export declare function getAbsolutePathPackagesToInstall(packages: Package[], platformInfo: PlatformInformation, extensionPath: string): Promise<AbsolutePathPackage[]>;
