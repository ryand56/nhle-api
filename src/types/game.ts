import { IDisplayName } from "./display";
import { ITVBroadcast } from "./broadcast";

export interface IGame {
    id: number;
    season: number;
    gameType: number;
    gameDate: string;
    venue: IDisplayName;
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    tvBroadcasts: ITVBroadcast[];
}

export interface IGameWeekDay {
    date: string;
    dayAbbrev: string;
    numberOfGames: number;
}