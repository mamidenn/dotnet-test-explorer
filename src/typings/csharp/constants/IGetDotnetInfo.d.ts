import { DotnetInfo } from "../utils/getDotnetInfo";
export interface IGetDotnetInfo {
    (): Promise<DotnetInfo>;
}
