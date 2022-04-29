import { BaseEvent } from "../omnisharp/loggingEvents";
import { BaseLoggerObserver } from "./BaseLoggerObserver";
export default class DotNetTestLoggerObserver extends BaseLoggerObserver {
    post: (event: BaseEvent) => void;
    private handleDotNetTestDebugWarning;
    private handleDotnetTestDebugStart;
    private handleDotnetTestRunStart;
    private handleDotnetTestsInClassDebugStart;
    private handleDotnetTestsInClassRunStart;
    private handleDotnetTestsRunInContextStart;
    private handleDotnetTestsDebugInContextStart;
    private handleDotNetTestDebugProcessStart;
    private handleReportDotnetTestResults;
    private logTestResult;
}
export declare function processOutcome(input: string): string;
