import { AbsolutePathPackage } from "./AbsolutePathPackage";
export default interface IInstallDependencies {
    (packages: AbsolutePathPackage[]): Promise<boolean>;
}
