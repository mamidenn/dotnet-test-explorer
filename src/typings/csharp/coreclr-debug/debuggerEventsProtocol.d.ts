/// <reference types="node" />
export declare namespace DebuggerEventsProtocol {
    module EventType {
        const Starting = "starting";
        const ProcessLaunched = "processLaunched";
        const DebuggingStopped = "debuggingStopped";
    }
    interface DebuggerEvent {
        eventType: string;
    }
    interface ProcessLaunchedEvent extends DebuggerEvent {
        targetProcessId: number;
    }
    function decodePacket(packet: Buffer): DebuggerEvent;
}
