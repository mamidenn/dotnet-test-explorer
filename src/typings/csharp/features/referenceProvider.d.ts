import AbstractSupport from './abstractProvider';
import { ReferenceProvider, Location, TextDocument, CancellationToken, Position } from 'vscode';
export default class OmnisharpReferenceProvider extends AbstractSupport implements ReferenceProvider {
    provideReferences(document: TextDocument, position: Position, options: {
        includeDeclaration: boolean;
    }, token: CancellationToken): Promise<Location[]>;
}
