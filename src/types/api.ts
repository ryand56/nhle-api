import { IGameWeekDay } from "./game";

export type APIFetchFunction = {
    (endpoint: string, options?: Parameters<typeof fetch>[1]): Promise<any>;
}

export type APIWebFetchFunction = APIFetchFunction & {
    (endpoint: APIWebEndpoint.SCORE_NOW, options?: Parameters<typeof fetch>[1]): Promise<APIScore>;
    (endpoint: APIWebEndpoint.SCHEDULE_NOW, options?: Parameters<typeof fetch>[1]): Promise<APISchedule>;
    (endpoint: APIWebEndpoint, options?: Parameters<typeof fetch>[1]): Promise<any>;
}

export enum APIWebEndpoint {
    SCORE_NOW = "score/now",
    SCHEDULE_NOW = "schedule/now"
}

export interface APIScore {
    /* Previous date */
    prevDate: string;

    /* Current date */
    currentDate: string;

    /* Next date */
    nextDate: string;

    gameWeek: IGameWeekDay[];
}

export interface APISchedule {
    /* Next week's start date */
    nextStartDate: string;

    /* Previous week's start date */
    previousStartDate: string;

    /* Game week for the date's week */
}