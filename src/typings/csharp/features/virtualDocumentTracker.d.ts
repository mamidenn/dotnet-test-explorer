import { TextDocument } from 'vscode';
import { OmniSharpServer } from '../omnisharp/server';
import { IDisposable } from '../Disposable';
import { EventStream } from '../EventStream';
export declare function isVirtualCSharpDocument(document: TextDocument): boolean;
export default function trackVirtualDocuments(server: OmniSharpServer, eventStream: EventStream): IDisposable;
