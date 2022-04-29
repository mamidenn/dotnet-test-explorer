/// <reference types="node" />
import { EventStream } from "../EventStream";
import { AbsolutePath } from './AbsolutePath';
export declare function InstallZip(buffer: Buffer, description: string, destinationInstallPath: AbsolutePath, binaries: AbsolutePath[], eventStream: EventStream): Promise<void>;
