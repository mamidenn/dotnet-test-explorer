/// <reference types="node" />
import { ChildProcess } from 'child_process';
import { PlatformInformation } from '../platform';
import * as vscode from 'vscode';
import { Options } from './options';
import { LaunchInfo } from './OmnisharpManager';
import { IHostExecutableResolver } from '../constants/IHostExecutableResolver';
export declare enum LaunchTargetKind {
    Solution = 0,
    Project = 1,
    ProjectJson = 2,
    Folder = 3,
    Csx = 4,
    Cake = 5,
    LiveShare = 6
}
/**
 * Represents the project or solution that OmniSharp is to be launched with.
 * */
export interface LaunchTarget {
    label: string;
    description: string;
    directory: string;
    target: string;
    workspaceKind: LaunchTargetKind;
}
export declare const vslsTarget: LaunchTarget;
/** Live share scheme */
export declare const vsls = "vsls";
export declare const disabledSchemes: Set<string>;
/**
 * Returns a list of potential targets on which OmniSharp can be launched.
 * This includes `project.json` files, `*.sln` and `*.slnf` files (if any `*.csproj` files are found), and the root folder
 * (if it doesn't contain a `project.json` file, but `project.json` files exist). In addition, the root folder
 * is included if there are any `*.csproj` files present, but a `*.sln` or `*.slnf` file is not found.
 */
export declare function findLaunchTargets(options: Options): Promise<LaunchTarget[]>;
export declare function resourcesToLaunchTargets(resources: vscode.Uri[]): LaunchTarget[];
export declare function resourcesAndFolderMapToLaunchTargets(resources: vscode.Uri[], workspaceFolders: vscode.WorkspaceFolder[], workspaceFolderToUriMap: Map<number, vscode.Uri[]>): LaunchTarget[];
export interface LaunchResult {
    process: ChildProcess;
    command: string;
    hostIsMono: boolean;
    hostVersion?: string;
    hostPath?: string;
}
export declare function launchOmniSharp(cwd: string, args: string[], launchInfo: LaunchInfo, platformInfo: PlatformInformation, options: Options, monoResolver: IHostExecutableResolver, dotnetResolver: IHostExecutableResolver): Promise<LaunchResult>;
