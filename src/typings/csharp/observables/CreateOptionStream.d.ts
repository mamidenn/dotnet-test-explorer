import { Options } from "../omnisharp/options";
import { vscode } from "../vscodeAdapter";
import { Observable } from "rxjs";
export default function createOptionStream(vscode: vscode): Observable<Options>;
