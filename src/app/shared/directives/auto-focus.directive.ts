import { AfterViewInit, Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[bsAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {

    constructor(private elementRef: ElementRef){}

    public ngAfterViewInit(): void {
        this.elementRef.nativeElement.focus();
    }
}
