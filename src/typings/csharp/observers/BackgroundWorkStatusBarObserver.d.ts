import { BaseStatusBarItemObserver } from './BaseStatusBarItemObserver';
import { BaseEvent } from '../omnisharp/loggingEvents';
export declare class BackgroundWorkStatusBarObserver extends BaseStatusBarItemObserver {
    post: (event: BaseEvent) => void;
}
