import { DisplayNameFrench, DisplayNameSpanish, IDisplayName } from "./display";
import { ITVBroadcast } from "./broadcast";

export enum GameState {
    SCHEDULED = "FUT",
    PREGAME = "PRE",
    LIVE = "LIVE",
    FINAL = "OFF"
}

/** Unknown, only value I've seen is "OK" */
export enum GameScheduleState {
    OK = "OK"
}

export interface IGame {
    id: number;
    season: number;
    gameType: number;
    gameDate: string;
    venue: IDisplayName;
    startTimeUTC: string;
    easternUTCOffset: string;
    venueUTCOffset: string;
    venueTimezone: string;
    gameState: GameState;
    gameScheduleState: GameScheduleState;
    tvBroadcasts: ITVBroadcast[];
    awayTeam: IGameTeam;
    homeTeam: IGameTeam;
    clock?: IGameClock;
    neutralSite?: boolean;
    period?: number;
    periodDescriptor: IPeriodDescriptor;
    gameCenterLink: string;
    goals?: IGameGoal[];
}

export interface IGameWeekDay {
    date: string;
    dayAbbrev: string;
    numberOfGames: number;
    games?: IGame[];
}

export interface IGameTeam {
    id: number;
    placeName?: DisplayNameFrench;
    name?: DisplayNameSpanish;
    abbrev: string;
    logo: string;
    darkLogo?: string;
    awaySplitSquad?: boolean;
    homeSplitSquad?: boolean;
    radioLink?: string;
    score: number;
    sog?: number;
}

export interface IGameClock {
    timeRemaining: string;
    secondsRemaining: number;
    running: boolean;
    inIntermission: boolean;
}

export interface IPeriodDescriptor {
    number: number;
    periodType: string;
}

export enum GameStrength {
    POWERPLAY = "PP",
    EVEN = "EV"
}

export interface IGameGoal {
    period: number;
    periodDescriptor: IPeriodDescriptor;
    timeInPeriod: string;
    playerId: number;
    name: IDisplayName;
    mugshot: string;
    teamAbbrev: string;
    goalsToDate: number;
    awayScore: number;
    homeScore: number;
    strength: GameStrength;
    
    /** ID for highlight clip */
    highlightClip?: number;

    /** ID for highlight clip (French) */
    highlightClipFr?: number;
}