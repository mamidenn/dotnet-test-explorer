import { Package } from "../packageManager/Package";
export declare const modernNetVersion = "6.0";
export declare function GetPackagesFromVersion(version: string, useFramework: boolean, runTimeDependencies: Package[], serverUrl: string, installPath: string): Package[];
export declare function SetBinaryAndGetPackage(inputPackage: Package, useFramework: boolean, serverUrl: string, version: string, installPath: string): Package;
