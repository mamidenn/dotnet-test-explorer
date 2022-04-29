import { Event, TextDocumentContentProvider, Uri } from 'vscode';
import { IDisposable } from '../Disposable';
import { SourceGeneratedFileInfo, SourceGeneratedFileResponse } from '../omnisharp/protocol';
import { OmniSharpServer } from '../omnisharp/server';
export default class SourceGeneratedDocumentProvider implements TextDocumentContentProvider, IDisposable {
    private server;
    readonly scheme = "omnisharp-source-generated";
    private _registration;
    private _documents;
    private _uriToDocumentInfo;
    private _documentClosedSubscription;
    private _visibleTextEditorsChangedSubscription;
    private _onDidChangeEmitter;
    onDidChange: Event<Uri>;
    constructor(server: OmniSharpServer);
    private onTextDocumentClosed;
    private onVisibleTextEditorsChanged;
    register(): void;
    dispose(): void;
    tryGetExistingSourceGeneratedFile(fileInfo: SourceGeneratedFileInfo): Uri | undefined;
    addSourceGeneratedFile(fileInfo: SourceGeneratedFileInfo, response: SourceGeneratedFileResponse): Uri;
    provideTextDocumentContent(uri: Uri): string;
    private getUriForName;
}
