import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardListsRestService } from 'src/app/shared/services/card-lists-rest.service';
import { OverviewCardList } from '../overview-board';

@Component({
    selector: 'bs-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent {
    @Input() public boardId: number;
    @Input() public cardList: OverviewCardList;
    @Output() public cardListDeleted = new EventEmitter<number>();

    constructor(
        public cardListsService: CardListsRestService
    )
    {}

    public onCardListNameEditingFinished(text: string): void {
        this.cardList.name = text;
        this.cardListsService.update(this.boardId, this.cardList.id, { name: text }).subscribe();
    }

    public deleteCardList(): void {
        this.cardListDeleted.emit(this.cardList.id);
    }
}
