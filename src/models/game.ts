import { IDisplayName, IGame, ITVBroadcast } from "../types";
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
    tvBroadcasts: ITVBroadcast[];

    constructor(
        id: number,
        season: number,
        gameType: number,
        gameDate: string,
        venue: IDisplayName,
        startTimeUTC: string,
        easternUTCOffset: string,
        venueUTCOffset: string,
        tvBroadcasts: ITVBroadcast[]
    ) {
        this.id = id;
        this.season = season;
        this.gameType = gameType;
        this.gameDate = gameDate;
        this.venue = venue;
        this.startTimeUTC = startTimeUTC;
        this.easternUTCOffset = easternUTCOffset;
        this.venueUTCOffset = venueUTCOffset;
        this.tvBroadcasts = tvBroadcasts;
    }

    getBoxscore() {

    }
}

export default Game;
