import { vscode } from "../../vscodeAdapter";
import MessageItemWithCommand from "./MessageItemWithCommand";
export default function showWarningMessage(vscode: vscode, message: string, ...items: MessageItemWithCommand[]): Promise<void>;
