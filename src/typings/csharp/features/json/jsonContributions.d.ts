import { Location } from 'jsonc-parser';
import { CompletionItem, CompletionItemProvider, CompletionList, TextDocument, Position, Hover, HoverProvider, CancellationToken, MarkedString, DocumentSelector } from 'vscode';
import CompositeDisposable from '../../CompositeDisposable';
export interface ISuggestionsCollector {
    add(suggestion: CompletionItem): void;
    error(message: string): void;
    log(message: string): void;
    setAsIncomplete(): void;
}
export interface IJSONContribution {
    getDocumentSelector(): DocumentSelector;
    getInfoContribution(fileName: string, location: Location): Thenable<MarkedString[]>;
    collectPropertySuggestions(fileName: string, location: Location, currentWord: string, addValue: boolean, isLast: boolean, result: ISuggestionsCollector): Thenable<void>;
    collectValueSuggestions(fileName: string, location: Location, result: ISuggestionsCollector): Thenable<void>;
    collectDefaultSuggestions(fileName: string, result: ISuggestionsCollector): Thenable<void>;
    resolveSuggestion?(item: CompletionItem): Thenable<CompletionItem>;
}
export declare function addJSONProviders(): CompositeDisposable;
export declare class JSONHoverProvider implements HoverProvider {
    private jsonContribution;
    constructor(jsonContribution: IJSONContribution);
    provideHover(document: TextDocument, position: Position, token: CancellationToken): Thenable<Hover>;
}
export declare class JSONCompletionItemProvider implements CompletionItemProvider {
    private jsonContribution;
    constructor(jsonContribution: IJSONContribution);
    resolveCompletionItem(item: CompletionItem, token: CancellationToken): Thenable<CompletionItem>;
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken): Thenable<CompletionList>;
    private getCurrentWord;
}
