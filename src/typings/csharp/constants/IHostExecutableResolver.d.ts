import { Options } from "../omnisharp/options";
import { HostExecutableInformation } from "./HostExecutableInformation";
export interface IHostExecutableResolver {
    getHostExecutableInfo(options: Options): Promise<HostExecutableInformation>;
}
