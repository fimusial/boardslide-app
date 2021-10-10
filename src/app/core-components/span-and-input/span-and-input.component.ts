import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'bs-span-and-input',
    templateUrl: './span-and-input.component.html',
    styleUrls: ['./span-and-input.component.css']
})
export class SpanAndInputComponent {
    public editing = false;
    private editingText = '';

    @Input() public maxLength = 255;
    @Input() public allowEmpty = false;
    @Input() public text = '';
    @Output() public editingFinished = new EventEmitter<string>();

    public startEditing(): void {
        this.editing = true;
        this.editingText = '';
    }

    public stopEditing(): void {
        this.editing = false;
        const resultText = this.editingText.trim();
        if (this.allowEmpty || resultText.length > 0) {
            this.editingFinished.emit(resultText);
        }
    }

    public onInput(event: Event): void {
        const target = event.target as HTMLSpanElement;
        if (target.textContent.length > this.maxLength) {
            target.textContent = this.editingText;
            const selection = document.getSelection();
            selection.selectAllChildren(target);
            selection.collapseToEnd();
        }
        this.editingText = target.textContent;
    }
}
