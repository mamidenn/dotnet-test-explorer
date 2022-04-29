/// <reference types="node" />
export interface IGetMonoVersion {
    (environment: NodeJS.ProcessEnv): Promise<string>;
}
