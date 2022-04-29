import { TextDocumentContentProvider, Uri } from 'vscode';
import { MetadataResponse } from '../omnisharp/protocol';
import { IDisposable } from '../Disposable';
export default class DefinitionMetadataDocumentProvider implements TextDocumentContentProvider, IDisposable {
    readonly scheme = "omnisharp-metadata";
    private _registration;
    private _documents;
    private _documentClosedSubscription;
    constructor();
    private onTextDocumentClosed;
    dispose(): void;
    addMetadataResponse(metadataResponse: MetadataResponse): Uri;
    getExistingMetadataResponseUri(sourceName: string): Uri;
    hasMetadataDocument(sourceName: string): boolean;
    register(): void;
    provideTextDocumentContent(uri: Uri): string;
    private createUri;
}
