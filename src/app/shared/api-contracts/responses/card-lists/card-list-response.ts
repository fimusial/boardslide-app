import { CardResponse } from "../cards/card-response";

export class CardListResponse {
    public id: number;
    public name: string;
    public boardId: number;
    public cards: CardResponse[];
}
