import { PlatformInformation } from "../platform";
import { AbsolutePathPackage } from "./AbsolutePathPackage";
export declare function getNotInstalledPackagesForPlatform(packages: AbsolutePathPackage[], platformInfo: PlatformInformation): Promise<AbsolutePathPackage[]>;
export declare function filterPlatformPackages(packages: AbsolutePathPackage[], platformInfo: PlatformInformation): AbsolutePathPackage[];
