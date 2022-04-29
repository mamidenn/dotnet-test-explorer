import { Options } from './options';
import { IHostExecutableResolver } from '../constants/IHostExecutableResolver';
import { HostExecutableInformation } from '../constants/HostExecutableInformation';
import { IGetMonoVersion } from '../constants/IGetMonoVersion';
export declare class OmniSharpMonoResolver implements IHostExecutableResolver {
    private getMonoVersion;
    private minimumMonoVersion;
    constructor(getMonoVersion: IGetMonoVersion);
    private configureEnvironmentAndGetInfo;
    getHostExecutableInfo(options: Options): Promise<HostExecutableInformation>;
}
