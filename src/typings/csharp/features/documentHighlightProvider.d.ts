import AbstractSupport from './abstractProvider';
import { DocumentHighlightProvider, DocumentHighlight, CancellationToken, TextDocument, Position } from 'vscode';
export default class OmnisharpDocumentHighlightProvider extends AbstractSupport implements DocumentHighlightProvider {
    provideDocumentHighlights(resource: TextDocument, position: Position, token: CancellationToken): Promise<DocumentHighlight[]>;
    private static _asDocumentHighlight;
}
