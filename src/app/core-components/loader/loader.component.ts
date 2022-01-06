import { Component, Input, OnChanges, OnDestroy } from "@angular/core";
import { interval, Subscription } from "rxjs";
import { take } from "rxjs/operators";

@Component({
    selector: 'bs-loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnChanges, OnDestroy {
    public led = new Array<boolean>(10);
    public initialDelayPassed = false;
    private subscriptions: Subscription[] = [];

    @Input() public loading = false;

    public ngOnChanges(): void {
        if (this.loading === true) {
            this.subscriptions.push(interval(250).pipe(take(1)).subscribe(_ => {
                this.initialDelayPassed = true;
                this.subscriptions.push(interval(100).subscribe(i => {
                    this.resetLed();
                    this.led[i % this.led.length] = true;
                }));
            }));
        }
        else {
            this.initialDelayPassed = false;
            this.unsubscribeAll();
        }
    }

    public ngOnDestroy(): void {
        this.unsubscribeAll();
    }

    private resetLed(): void {
        for (let i = 0; i < this.led.length; i++) {
            this.led[i] = false;
        }
    }

    private unsubscribeAll(): void {
        this.subscriptions.forEach(x => x.unsubscribe());
    }
}
