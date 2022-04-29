import { FoldingRangeProvider, TextDocument, FoldingContext, CancellationToken, FoldingRange, FoldingRangeKind } from "vscode";
import AbstractSupport from './abstractProvider';
export declare class StructureProvider extends AbstractSupport implements FoldingRangeProvider {
    provideFoldingRanges(document: TextDocument, context: FoldingContext, token: CancellationToken): Promise<FoldingRange[]>;
    GetType(type: string): FoldingRangeKind;
}
