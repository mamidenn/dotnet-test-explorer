import { vscode } from "../vscodeAdapter";
import { EventStream } from "../EventStream";
import { Options } from "../omnisharp/options";
import { IHostExecutableResolver } from "../constants/IHostExecutableResolver";
import { IGetDotnetInfo } from "../constants/IGetDotnetInfo";
export default function reportIssue(vscode: vscode, eventStream: EventStream, getDotnetInfo: IGetDotnetInfo, isValidPlatformForMono: boolean, options: Options, monoResolver: IHostExecutableResolver): Promise<void>;
