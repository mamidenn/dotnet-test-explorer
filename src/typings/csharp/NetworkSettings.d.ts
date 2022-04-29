import { vscode } from "./vscodeAdapter";
export default class NetworkSettings {
    readonly proxy: string;
    readonly strictSSL: boolean;
    constructor(proxy: string, strictSSL: boolean);
}
export interface NetworkSettingsProvider {
    (): NetworkSettings;
}
export declare function vscodeNetworkSettingsProvider(vscode: vscode): NetworkSettingsProvider;
