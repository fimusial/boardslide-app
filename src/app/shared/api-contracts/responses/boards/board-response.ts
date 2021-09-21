import { CardListResponse } from "../card-lists/card-list-info-response";

export class BoardResponse {
    public id: number;
    public name: string;
    public cardLists: CardListResponse[];
}
