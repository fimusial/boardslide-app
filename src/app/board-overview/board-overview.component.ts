import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardsRestService } from 'src/app/shared/services/boards-rest.service';
import { CardListsRestService } from 'src/app/shared/services/card-lists-rest.service';
import { CardsRestService } from 'src/app/shared/services/cards-rest.service';
import { OverviewBoard, OverviewCardList } from './overview-board';

@Component({
    selector: 'bs-board-overview',
    templateUrl: './board-overview.component.html',
    styleUrls: ['./board-overview.component.css']
})
export class BoardOverviewComponent implements OnInit {
    public board: OverviewBoard;
    public loading: boolean;

    constructor(
        public boardsService: BoardsRestService,
        public cardListsService: CardListsRestService,
        public cardsService: CardsRestService,
        public route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.loading = true;
            this.boardsService.getById(params.id).subscribe(board => {
                this.board = OverviewBoard.fromBoardResponse(board);
                this.loading = false;
            });
        });
    }

    public onBoardNameEditingFinished(text: string): void {
        this.board.name = text;
        this.boardsService.update(this.board.id, { name: text }).subscribe();
    }

    public addCardList(): void {
        this.loading = true;
        this.cardListsService.create(this.board.id, { name: 'new column' }).subscribe(cardList => {
            this.loading = false;
            this.board.cardLists.push(OverviewCardList.fromCardListInfoResponse(cardList));
        });
    }

    public onCardListDeleted(cardListId: number): void {
        this.loading = true;
        this.cardListsService.delete(this.board.id, cardListId).subscribe(_ => {
            this.loading = false;
            const index = this.board.cardLists.findIndex(x => x.id === cardListId);
            this.board.cardLists.splice(index, 1);
        });
    }
}
