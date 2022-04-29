import { vscode } from "../../vscodeAdapter";
import MessageItemWithCommand from "./MessageItemWithCommand";
export default function showInformationMessage(vscode: vscode, message: string, ...items: MessageItemWithCommand[]): Promise<void>;
