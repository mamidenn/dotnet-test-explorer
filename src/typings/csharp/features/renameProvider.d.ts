import AbstractSupport from './abstractProvider';
import { RenameProvider, WorkspaceEdit, TextDocument, CancellationToken, Position } from 'vscode';
export default class OmnisharpRenameProvider extends AbstractSupport implements RenameProvider {
    provideRenameEdits(document: TextDocument, position: Position, newName: string, token: CancellationToken): Promise<WorkspaceEdit>;
}
