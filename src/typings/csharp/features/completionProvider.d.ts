import { CompletionItemProvider, TextDocument, Position, CompletionContext, CompletionList, CompletionItem } from "vscode";
import AbstractProvider from "./abstractProvider";
import * as protocol from "../omnisharp/protocol";
import { CancellationToken } from "vscode-languageserver-protocol";
import { LanguageMiddlewareFeature } from "../omnisharp/LanguageMiddlewareFeature";
import { OmniSharpServer } from "../omnisharp/server";
export declare const CompletionAfterInsertCommand = "csharp.completion.afterInsert";
export default class OmnisharpCompletionProvider extends AbstractProvider implements CompletionItemProvider {
    #private;
    constructor(server: OmniSharpServer, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): Promise<CompletionList>;
    resolveCompletionItem(item: CompletionItem, token: CancellationToken): Promise<CompletionItem>;
    afterInsert(item: protocol.OmnisharpCompletionItem): Promise<void>;
    private _convertToVscodeCompletionItem;
}
