import * as protocol from '../omnisharp/protocol';
export declare function extractSummaryText(xmlDocComment: string): string;
export declare function GetDocumentationString(structDoc: protocol.DocumentationComment): string;
export declare function displayDocumentationObject(obj: protocol.DocumentationItem): string;
