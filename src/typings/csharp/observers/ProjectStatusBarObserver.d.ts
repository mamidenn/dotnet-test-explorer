import { BaseEvent } from "../omnisharp/loggingEvents";
import { BaseStatusBarItemObserver } from './BaseStatusBarItemObserver';
export declare class ProjectStatusBarObserver extends BaseStatusBarItemObserver {
    post: (event: BaseEvent) => void;
    private handleWorkspaceInformationUpdated;
}
