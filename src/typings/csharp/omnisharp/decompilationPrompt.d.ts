import * as vscode from "vscode";
import OptionProvider from "../observers/OptionProvider";
export declare function resetDecompilationAuthorization(context: vscode.ExtensionContext): Promise<void>;
export declare function getDecompilationAuthorization(context: vscode.ExtensionContext, optionProvider: OptionProvider): Promise<boolean>;
