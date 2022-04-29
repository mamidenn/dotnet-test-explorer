import { Options } from "../omnisharp/options";
import { Observable } from "rxjs";
export default class OptionProvider {
    private options;
    private subscription;
    constructor(optionObservable: Observable<Options>);
    GetLatestOptions(): Options;
    dispose: () => void;
}
