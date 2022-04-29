import { CompletionItem, DocumentSelector, MarkedString } from 'vscode';
import { IJSONContribution, ISuggestionsCollector } from './jsonContributions';
import { XHRRequest } from 'request-light';
import { Location } from 'jsonc-parser';
export declare class ProjectJSONContribution implements IJSONContribution {
    private requestService;
    private nugetIndexPromise;
    constructor(requestService: XHRRequest);
    getDocumentSelector(): DocumentSelector;
    private getNugetIndex;
    private getNugetService;
    private makeJSONRequest;
    collectPropertySuggestions(resource: string, location: Location, currentWord: string, addValue: boolean, isLast: boolean, result: ISuggestionsCollector): Thenable<void>;
    collectValueSuggestions(resource: string, location: Location, result: ISuggestionsCollector): Thenable<void>;
    collectDefaultSuggestions(resource: string, result: ISuggestionsCollector): Thenable<null>;
    resolveSuggestion(item: CompletionItem): Thenable<CompletionItem>;
    private getInfo;
    getInfoContribution(resource: string, location: Location): Thenable<MarkedString[]>;
}
