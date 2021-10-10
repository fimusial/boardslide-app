import { Component, Input } from "@angular/core";

@Component({
    selector: 'bs-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent {
    @Input() public primary = true;
}
