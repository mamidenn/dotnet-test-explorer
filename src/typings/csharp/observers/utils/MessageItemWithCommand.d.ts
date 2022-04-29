import { MessageItem } from "../../vscodeAdapter";
export default interface MessageItemWithCommand extends MessageItem {
    command: string;
}
