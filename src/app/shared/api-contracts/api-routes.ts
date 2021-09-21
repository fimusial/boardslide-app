import { Inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ApiRoutes {
    public readonly apiBase;
    public readonly boards: Boards;
    public readonly cardLists: CardLists;
    public readonly cards: Cards;

    constructor(@Inject('API_URL') apiUrl: string) {
        this.apiBase = apiUrl + '/api';
        this.boards = new Boards(this.apiBase);
        this.cardLists = new CardLists(this.boards.base + this.boards.resourceId);
        this.cards = new Cards(this.cardLists.base + this.cardLists.resourceId);
    }
}

export function populateUrl(url: string, placeholders: { [key: string]: number }): string {
    for (const [key, value] of Object.entries(placeholders)) {
        url = url.split(`{${key}}`).join(value.toString());
    }
    return url;
}

class Boards {
    public readonly base: string;
    public readonly resourceId: string;
    public readonly getAll: string;
    public readonly getById: string;
    public readonly create: string;
    public readonly update: string;
    public readonly delete: string;

    constructor(base: string) {
        this.base = base + '/boards';
        this.resourceId = '/{boardId}';
        this.getAll = this.base;
        this.getById = this.base + this.resourceId;
        this.create = this.base;
        this.update = this.base + this.resourceId;
        this.delete = this.base + this.resourceId;
    }
}

class CardLists {
    public readonly base: string;
    public readonly resourceId: string;
    public readonly getAll: string;
    public readonly getById: string;
    public readonly create: string;
    public readonly update: string;
    public readonly delete: string;

    constructor(base: string) {
        this.base = base + '/card-lists';
        this.resourceId = '/{cardListId}';
        this.getAll = this.base;
        this.getById = this.base + this.resourceId;
        this.create = this.base;
        this.update = this.base + this.resourceId;
        this.delete = this.base + this.resourceId;
    }
}

class Cards {
    public readonly base: string;
    public readonly resourceId: string;
    public readonly getAll: string;
    public readonly getById: string;
    public readonly create: string;
    public readonly update: string;
    public readonly delete: string;
    public readonly reorder: string;

    constructor(base: string) {
        this.base = base + '/cards';
        this.resourceId = '/{cardId}';
        this.getAll = this.base;
        this.getById = this.base + this.resourceId;
        this.create = this.base;
        this.update = this.base + this.resourceId;
        this.delete = this.base + this.resourceId;
        this.reorder = this.base + this.resourceId;
    }
}
