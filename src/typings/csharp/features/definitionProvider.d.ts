import { CancellationToken, TypeDefinitionProvider, DefinitionProvider, Location, Position, TextDocument } from 'vscode';
import AbstractSupport from './abstractProvider';
import DefinitionMetadataOrSourceGeneratedDocumentProvider from './definitionMetadataDocumentProvider';
import { OmniSharpServer } from '../omnisharp/server';
import { LanguageMiddlewareFeature } from '../omnisharp/LanguageMiddlewareFeature';
import SourceGeneratedDocumentProvider from './sourceGeneratedDocumentProvider';
export default class CSharpDefinitionProvider extends AbstractSupport implements DefinitionProvider, TypeDefinitionProvider {
    private definitionMetadataDocumentProvider;
    private sourceGeneratedDocumentProvider;
    constructor(server: OmniSharpServer, definitionMetadataDocumentProvider: DefinitionMetadataOrSourceGeneratedDocumentProvider, sourceGeneratedDocumentProvider: SourceGeneratedDocumentProvider, languageMiddlewareFeature: LanguageMiddlewareFeature);
    provideDefinition(document: TextDocument, position: Position, token: CancellationToken): Promise<Location[]>;
    provideTypeDefinition(document: TextDocument, position: Position, token: CancellationToken): Promise<Location[]>;
    private GetLocationsFromResponse;
}
