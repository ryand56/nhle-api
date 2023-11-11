import { APIWebEndpoint, IAPIScore, IGame } from "./types";
import Game from "./models/game";
import { _apiWebFetch } from "./rest/fetch";

/**
 * Fetch the scores for today or any specified date
 * @param date The date to fetch the scores on. If undefined, today's score will be fetched instead.
 * @returns {Promise<IAPIScore>} A promise that resolves to the fetched scores.
 * @throws Error if the NHLe API scores fetch fails.
 */
export const getScores = async (date?: Date): Promise<IAPIScore> => {
    try {
        const apiEndpoint = !date ? APIWebEndpoint.SCORE_NOW : `score/${date.toLocaleDateString("en-CA")}`;
        const data: IAPIScore = await _apiWebFetch(apiEndpoint);
        return data;
    } catch (err) {
        throw new Error("NHLe API Scores fetch failed");
    }
}

/** @deprecated Recommended to use {@link Game.getBoxscore} in the {@link Game} class instead. */
export const getBoxscore = (gameId: number) => {

}