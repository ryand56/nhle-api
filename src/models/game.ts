import { GameScheduleState, GameState, IDisplayName, IGame, IGameClock, IGameTeam, IPeriodDescriptor, ITVBroadcast } from "../types";
import { _apiWebFetch } from "../rest/fetch";

class Game implements IGame {
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

    constructor(game: IGame) {
        this.id = game.id;
        this.season = game.season;
        this.gameType = game.gameType;
        this.gameDate = game.gameDate;
        this.venue = game.venue;
        this.startTimeUTC = game.startTimeUTC;
        this.easternUTCOffset = game.easternUTCOffset;
        this.venueUTCOffset = game.venueUTCOffset;
        this.venueTimezone = game.venueTimezone;
        this.gameState = game.gameState;
        this.gameScheduleState = game.gameScheduleState;
        this.tvBroadcasts = game.tvBroadcasts;
        this.awayTeam = game.awayTeam;
        this.homeTeam = game.homeTeam;
        this.clock = game.clock;
        this.neutralSite = game.neutralSite;
        this.period = game.period;
        this.periodDescriptor = game.periodDescriptor;
        this.gameCenterLink = game.gameCenterLink;
    }

    getBoxscore() {

    }
}

export default Game;
