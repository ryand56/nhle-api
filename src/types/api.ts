import { IGame, IGameWeekDay } from "./game";
import { IOddsPartner } from "./betting";
import { IStandingsTeam } from "./team";
import Game from "../models/game";

export type APIFetchFunction = {
    (endpoint: string, options?: Parameters<typeof fetch>[1]): Promise<any>;
}

export type APIWebFetchFunction = APIFetchFunction & {
    (endpoint: APIWebEndpoint.SCORE_NOW, options?: Parameters<typeof fetch>[1]): Promise<IAPIScore>;
    (endpoint: APIWebEndpoint.SCHEDULE_NOW, options?: Parameters<typeof fetch>[1]): Promise<IAPISchedule>;
    (endpoint: APIWebEndpoint.STANDINGS_NOW, options?: Parameters<typeof fetch>[1]): Promise<any>;
    (endpoint: APIWebEndpoint, options?: Parameters<typeof fetch>[1]): Promise<any>;
}

export enum APIWebEndpoint {
    SCORE_NOW = "score/now",
    SCHEDULE_NOW = "schedule/now",
    STANDINGS_NOW = "standings/now"
}

export interface IAPIScore {
    /* Previous date */
    prevDate: string;

    /* Current date */
    currentDate: string;

    /* Next date */
    nextDate: string;

    gameWeek: IGameWeekDay[];
    oddsPartners: IOddsPartner[];
    games: Game[];
}

export interface IAPISchedule {
    /* Next week's start date */
    nextStartDate: string;

    /* Previous week's start date */
    previousStartDate: string;

    /* Game week for the date's week */
    gameWeek: IGameWeekDay[];
}

export interface IAPIStandings {
    wildCardIndicator: boolean;
    standings: IStandingsTeam[];
}