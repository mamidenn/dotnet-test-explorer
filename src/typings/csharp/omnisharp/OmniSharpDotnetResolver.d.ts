import { HostExecutableInformation } from "../constants/HostExecutableInformation";
import { IHostExecutableResolver } from "../constants/IHostExecutableResolver";
import { PlatformInformation } from "../platform";
import { Options } from "./options";
export declare class OmniSharpDotnetResolver implements IHostExecutableResolver {
    private platformInfo;
    constructor(platformInfo: PlatformInformation);
    getHostExecutableInfo(options: Options): Promise<HostExecutableInformation>;
}
