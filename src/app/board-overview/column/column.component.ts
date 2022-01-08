import { Component, Input } from '@angular/core';
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

  constructor(
    public cardListService: CardListsRestService
  )
  {}

  public onCardListNameEditingFinished(cardList: OverviewCardList, text: string): void {
    cardList.name = text;
    this.cardListService.update(this.boardId, cardList.id, { name: cardList.name }).subscribe();
  }
}
