import { Component, OnInit } from '@angular/core';
import { BoardsRestService } from 'src/app/shared/services/boards-rest.service';
import { CardListsRestService } from 'src/app/shared/services/card-lists-rest.service';
import { CardsRestService } from 'src/app/shared/services/cards-rest.service';
import { OverviewBoard } from './overview-board';

@Component({
    selector: 'bs-board-overview',
    templateUrl: './board-overview.component.html',
    styleUrls: ['./board-overview.component.css']
})
export class BoardOverviewComponent implements OnInit {
    public boardId: number;
    public board: OverviewBoard;
    public loading: boolean;

    constructor(
        public boardsService: BoardsRestService,
        public cardListsService: CardListsRestService,
        public cardsService: CardsRestService,
    ) {}

    ngOnInit(): void {
        this.boardId = 73; // todo: routing
        this.loading = true;
        this.boardsService.getById(this.boardId).subscribe(board => {
            this.board = OverviewBoard.fromBoardResponse(board);
            this.loading = false;
        });
    }
}
