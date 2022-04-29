import { vscode } from "../vscodeAdapter";
import { Options } from "../omnisharp/options";
import { Observable } from "rxjs";
import Disposable from "../Disposable";
export declare function ShowOmniSharpConfigChangePrompt(optionObservable: Observable<Options>, vscode: vscode): Disposable;
