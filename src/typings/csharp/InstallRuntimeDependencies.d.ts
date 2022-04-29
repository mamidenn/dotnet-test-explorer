import { PlatformInformation } from './platform';
import { EventStream } from './EventStream';
import IInstallDependencies from './packageManager/IInstallDependencies';
export declare function installRuntimeDependencies(packageJSON: any, extensionPath: string, installDependencies: IInstallDependencies, eventStream: EventStream, platformInfo: PlatformInformation, useFramework: boolean): Promise<boolean>;
