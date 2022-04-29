import { vscode } from "../../vscodeAdapter";
export default function showErrorMessage(vscode: vscode, message: string, ...items: string[]): Promise<void>;
