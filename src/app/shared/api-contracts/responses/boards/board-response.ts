import { CardListResponse } from "../card-lists/card-list-response";

export class BoardResponse {
    public id: number;
    public name: string;
    public cardLists: CardListResponse[];
}
