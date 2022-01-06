import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiRoutes, populateUrl } from "../api-contracts/api-routes";
import { CardListForCreationDto } from "../api-contracts/dtos/card-lists/card-list-for-creation-dto";
import { CardListForUpdateDto } from "../api-contracts/dtos/card-lists/card-list-for-update-dto";
import { CardListInfoResponse } from "../api-contracts/responses/card-lists/card-list-info-response";
import { CardListResponse } from "../api-contracts/responses/card-lists/card-list-response";

@Injectable({ providedIn: 'root' })
export class CardListsRestService {
    constructor(private http: HttpClient, private routes: ApiRoutes) {
    }

    public getAll(boardId: number): Observable<CardListInfoResponse[]> {
        return this.http.get<CardListInfoResponse[]>(populateUrl(this.routes.cardLists.getAll, { boardId }));
    }

    public getById(boardId: number, cardListId: number): Observable<CardListResponse> {
        return this.http.get<CardListResponse>(populateUrl(this.routes.cardLists.getById, { boardId, cardListId }));
    }

    public create(boardId: number, dto: CardListForCreationDto): Observable<CardListInfoResponse> {
        return this.http.post<CardListInfoResponse>(populateUrl(this.routes.cardLists.create, { boardId }), dto);
    }

    public update(boardId: number, cardListId: number, dto: CardListForUpdateDto): Observable<CardListInfoResponse> {
        return this.http.put<CardListInfoResponse>(populateUrl(this.routes.cardLists.update, { boardId, cardListId }), dto);
    }

    public delete(boardId: number, cardListId: number): Observable<object> {
        return this.http.delete(populateUrl(this.routes.cardLists.delete, { boardId, cardListId }));
    }
}
