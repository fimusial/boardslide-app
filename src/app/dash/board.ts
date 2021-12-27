import { BoardInfoResponse } from "src/app/shared/api-contracts/responses/boards/board-info-response";

export class Board {
    public id: number;
    public name: string;

    public static fromBoardInfoResponse(infoResponse: BoardInfoResponse): Board {
        const board = new Board();
        board.id = infoResponse.id;
        board.name = infoResponse.name;
        return board;
    }
}
