import AbstractSupport from './abstractProvider';
import { TextDocument, Position, CancellationToken, ImplementationProvider, Definition } from 'vscode';
export default class CSharpImplementationProvider extends AbstractSupport implements ImplementationProvider {
    provideImplementation(document: TextDocument, position: Position, token: CancellationToken): Promise<Definition>;
}
