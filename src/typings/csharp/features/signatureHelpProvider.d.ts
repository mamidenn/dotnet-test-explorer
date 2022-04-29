import AbstractSupport from './abstractProvider';
import { SignatureHelpProvider, SignatureHelp, CancellationToken, TextDocument, Position } from 'vscode';
export default class OmniSharpSignatureHelpProvider extends AbstractSupport implements SignatureHelpProvider {
    provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken): Promise<SignatureHelp>;
    private GetParameterDocumentation;
}
