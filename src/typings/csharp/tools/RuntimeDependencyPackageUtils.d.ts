import { PlatformInformation } from '../platform';
import { AbsolutePathPackage } from '../packageManager/AbsolutePathPackage';
import { Package } from '../packageManager/Package';
export declare function getRuntimeDependencyPackageWithId(packageId: string, packageJSON: any, platformInfo: PlatformInformation, extensionPath: string): AbsolutePathPackage;
export declare function getRuntimeDependenciesPackages(packageJSON: any): Package[];
