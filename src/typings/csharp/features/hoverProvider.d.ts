import AbstractSupport from './abstractProvider';
import { HoverProvider, Hover, TextDocument, CancellationToken, Position } from 'vscode';
export default class OmniSharpHoverProvider extends AbstractSupport implements HoverProvider {
    provideHover(document: TextDocument, position: Position, token: CancellationToken): Promise<Hover>;
}
