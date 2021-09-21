import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiRoutes, populateUrl } from "../api-contracts/api-routes";
import { CardForCreationDto } from "../api-contracts/dtos/cards/card-for-creation-dto";
import { CardForUpdateDto } from "../api-contracts/dtos/cards/card-for-update-dto";
import { ReorderCardDto } from "../api-contracts/dtos/cards/reorder-card-dto";
import { CardResponse } from "../api-contracts/responses/cards/card-response";

@Injectable({ providedIn: 'root' })
export class CardsRestService {
    constructor(private http: HttpClient, private routes: ApiRoutes) {
    }

    public getAll(boardId: number, cardListId: number): Observable<CardResponse[]> {
        return this.http.get<CardResponse[]>(populateUrl(this.routes.cards.getAll, { boardId, cardListId }));
    }

    public getById(boardId: number, cardListId: number, cardId: number): Observable<CardResponse> {
        return this.http.get<CardResponse>(populateUrl(this.routes.cards.getById, { boardId, cardListId, cardId }));
    }

    public create(boardId: number, cardListId: number, dto: CardForCreationDto): Observable<CardResponse> {
        return this.http.post<CardResponse>(populateUrl(this.routes.cards.create, { boardId, cardListId }), dto);
    }

    public update(boardId: number, cardListId: number, cardId: number, dto: CardForUpdateDto): Observable<CardResponse> {
        return this.http.put<CardResponse>(populateUrl(this.routes.cards.update, { boardId, cardListId, cardId }), dto);
    }

    public delete(boardId: number, cardListId: number, cardId: number): Observable<object> {
        return this.http.delete(populateUrl(this.routes.cards.delete, { boardId, cardListId, cardId }));
    }

    public reorder(boardId: number, cardListId: number, cardId: number, dto: ReorderCardDto): Observable<object> {
        return this.http.patch(populateUrl(this.routes.cards.reorder, { boardId, cardListId, cardId }), dto);
    }
}