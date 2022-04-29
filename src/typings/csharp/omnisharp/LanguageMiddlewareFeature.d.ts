import * as vscode from 'vscode';
import { IDisposable } from '../Disposable';
export interface LanguageMiddleware extends RemapApi {
    language: string;
}
interface RemapApi {
    remapWorkspaceEdit?(workspaceEdit: vscode.WorkspaceEdit, token: vscode.CancellationToken): vscode.ProviderResult<vscode.WorkspaceEdit>;
    remapLocations?(locations: vscode.Location[], token: vscode.CancellationToken): vscode.ProviderResult<vscode.Location[]>;
}
declare type GetRemapType<T extends (parameter: any, token: vscode.CancellationToken) => any> = T extends (parameter: infer R, token: vscode.CancellationToken) => vscode.ProviderResult<infer R> ? R : any;
declare type RemapParameterType<M extends keyof RemapApi> = GetRemapType<NonNullable<RemapApi[M]>>;
export declare class LanguageMiddlewareFeature implements IDisposable {
    private readonly _middlewares;
    private _registration;
    constructor();
    dispose(): void;
    register(): void;
    getLanguageMiddlewares(): LanguageMiddleware[];
    remap<M extends keyof RemapApi, P extends RemapParameterType<M>>(remapType: M, original: P, token: vscode.CancellationToken): Promise<P>;
}
export {};
