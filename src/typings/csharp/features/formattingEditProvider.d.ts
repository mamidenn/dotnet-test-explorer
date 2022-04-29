import AbstractSupport from './abstractProvider';
import { DocumentRangeFormattingEditProvider, FormattingOptions, CancellationToken, TextEdit, TextDocument, Range, Position } from 'vscode';
export default class FormattingSupport extends AbstractSupport implements DocumentRangeFormattingEditProvider {
    provideDocumentRangeFormattingEdits(document: TextDocument, range: Range, options: FormattingOptions, token: CancellationToken): Promise<TextEdit[]>;
    provideOnTypeFormattingEdits(document: TextDocument, position: Position, ch: string, options: FormattingOptions, token: CancellationToken): Promise<TextEdit[]>;
    private static _asEditOptionation;
}
