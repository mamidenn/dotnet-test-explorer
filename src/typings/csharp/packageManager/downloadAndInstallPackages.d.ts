import { EventStream } from '../EventStream';
import { NetworkSettingsProvider } from "../NetworkSettings";
import { AbsolutePathPackage } from "./AbsolutePathPackage";
import { DownloadValidator } from './isValidDownload';
export declare function downloadAndInstallPackages(packages: AbsolutePathPackage[], provider: NetworkSettingsProvider, eventStream: EventStream, downloadValidator: DownloadValidator, useFramework: boolean): Promise<boolean>;
