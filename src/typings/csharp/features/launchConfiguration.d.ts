import { DebugConfiguration } from "vscode";
export default interface LaunchConfiguration extends DebugConfiguration {
    debuggerEventsPipeName?: string;
    program?: string;
    args?: string;
    cwd?: string;
}
