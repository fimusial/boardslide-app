import { BoardResponse } from "../shared/api-contracts/responses/boards/board-response";
import { CardListInfoResponse } from "../shared/api-contracts/responses/card-lists/card-list-info-response";
import { CardListResponse } from "../shared/api-contracts/responses/card-lists/card-list-response";
import { CardResponse } from "../shared/api-contracts/responses/cards/card-response";

export class OverviewBoard {
    public id: number;
    public name: string;
    public cardLists: OverviewCardList[];

    public static fromBoardResponse(boardResponse: BoardResponse): OverviewBoard {
        const board = new OverviewBoard();
        board.id = boardResponse.id;
        board.name = boardResponse.name;
        board.cardLists = boardResponse.cardLists.map(cardList => OverviewCardList.fromCardListResponse(cardList));
        return board;
    }
}

export class OverviewCardList {
    public id: number;
    public name: string;
    public boardId: number;
    public cards: OverviewCard[];

    public static fromCardListResponse(cardListResponse: CardListResponse): OverviewCardList {
        const cardList = new OverviewCardList();
        cardList.id = cardListResponse.id;
        cardList.name = cardListResponse.name;
        cardList.boardId = cardListResponse.boardId;
        cardList.cards = cardListResponse.cards.map(card => OverviewCard.fromCardResponse(card)).sort((x, y) => x.sortOrder - y.sortOrder);
        return cardList;
    }

    public static fromCardListInfoResponse(cardListInfoResponse: CardListInfoResponse): OverviewCardList {
        const cardList = new OverviewCardList();
        cardList.id = cardListInfoResponse.id;
        cardList.name = cardListInfoResponse.name;
        cardList.boardId = cardListInfoResponse.boardId;
        cardList.cards = [];
        return cardList;
    }
}

export class OverviewCard {
    public id: number;
    public name: string;
    public description: string;
    public dueDate?: Date;
    public sortOrder: number;
    public cardListId: number;

    public static fromCardResponse(cardResponse: CardResponse): OverviewCard {
        const card = new OverviewCard();
        card.name = cardResponse.name;
        card.description = cardResponse.description;
        card.dueDate = cardResponse.dueDate;
        card.sortOrder = cardResponse.sortOrder;
        card.cardListId = cardResponse.cardListId;
        return card;
    }
}
