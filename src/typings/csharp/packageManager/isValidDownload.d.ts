/// <reference types="node" />
import { EventStream } from "../EventStream";
export interface DownloadValidator {
    (buffer: Buffer, integrity: string, eventStream: EventStream): boolean;
}
export declare function isValidDownload(buffer: Buffer, integrity: string, eventStream: EventStream): boolean;
export declare function getBufferIntegrityHash(buffer: Buffer): string;
