/// <reference types="node" />
import { EventStream } from "../EventStream";
import { NetworkSettingsProvider } from '../NetworkSettings';
export declare function DownloadFile(description: string, eventStream: EventStream, networkSettingsProvider: NetworkSettingsProvider, url: string, fallbackUrl?: string): Promise<Buffer>;
