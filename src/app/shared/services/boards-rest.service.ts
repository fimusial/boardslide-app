import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiRoutes, populateUrl } from "../api-contracts/api-routes";
import { BoardForCreationDto } from "../api-contracts/dtos/boards/board-for-creation-dto";
import { BoardForUpdateDto } from "../api-contracts/dtos/boards/board-for-update-dto";
import { BoardInfoResponse } from "../api-contracts/responses/boards/board-info-response";
import { BoardResponse } from "../api-contracts/responses/boards/board-response";

@Injectable({ providedIn: 'root' })
export class BoardsRestService {
    constructor(private http: HttpClient, private routes: ApiRoutes) {
    }

    public getAll(): Observable<BoardInfoResponse[]> {
        return this.http.get<BoardInfoResponse[]>(this.routes.boards.getAll);
    }

    public getById(boardId: number): Observable<BoardResponse> {
        return this.http.get<BoardResponse>(populateUrl(this.routes.boards.getById, { boardId }));
    }

    public create(dto: BoardForCreationDto): Observable<BoardInfoResponse> {
        return this.http.post<BoardInfoResponse>(this.routes.boards.create, dto);
    }

    public update(boardId: number, dto: BoardForUpdateDto): Observable<BoardInfoResponse> {
        return this.http.put<BoardInfoResponse>(populateUrl(this.routes.boards.update, { boardId }), dto);
    }

    public delete(boardId: number): Observable<object> {
        return this.http.delete(populateUrl(this.routes.boards.delete, { boardId }));
    }
}
