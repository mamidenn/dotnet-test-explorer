import { Advisor } from "./features/diagnosticsProvider";
import { EventStream } from "./EventStream";
import TestManager from "./features/dotnetTest";
export default interface CSharpExtensionExports {
    initializationFinished: () => Promise<void>;
    getAdvisor: () => Promise<Advisor>;
    getTestManager: () => Promise<TestManager>;
    eventStream: EventStream;
}
