/// <reference types="node" />
export interface HostExecutableInformation {
    version: string;
    path: string;
    env: NodeJS.ProcessEnv;
}
