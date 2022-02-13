import { Component, OnInit } from "@angular/core";
import { BoardsRestService } from "../shared/services/boards-rest.service";
import { Board } from "./board";

@Component({
    selector: 'bs-dash',
    templateUrl: './dash.component.html'
})
export class DashComponent implements OnInit {
    public loading = false;
    public boards: Board[] = [];

    constructor(public boardsService: BoardsRestService) {}

    public ngOnInit(): void {
        this.loadBoards();
    }

    public loadBoards(): void {
        this.loading = true;
        this.boardsService.getAll().subscribe(boards => {
            this.loading = false;
            this.boards = boards.map(x => Board.fromBoardInfoResponse(x));
        });
    }

    public deleteBoard(boardId: number): void {
        this.loading = true;
        this.boardsService.delete(boardId).subscribe(_ => {
            this.loading = false;
            const index = this.boards.findIndex(x => x.id === boardId);
            this.boards.splice(index, 1);
        });
    }

    public createBoard(): void {
        this.loading = true;
        this.boardsService.create({ name: 'new board' }).subscribe(board => {
            this.loading = false;
            this.boards.push(Board.fromBoardInfoResponse(board));
        });
    }

    public onBoardNameEditingFinished(board: Board, text: string): void {
        board.name = text;
        this.boardsService.update(board.id, { name: board.name }).subscribe();
    }
}
