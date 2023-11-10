import { APIWebEndpoint, APIScore, IGame } from "./types";
import Game from "./models/game";
import { _apiWebFetch } from "./rest/fetch";

/**
 * Fetch the scores for today or any specified date
 * @param date The date to fetch the scores on. If undefined, today's score will be fetched instead.
 * @returns {Promise<APIScore>} A promise that resolves to the fetched scores.
 * @throws Error if the NHLe API scores fetch fails.
 */
export const getScores = async (date?: Date): Promise<APIScore> => {
    try {
        const apiEndpoint = !date ? APIWebEndpoint.SCORE_NOW : `score/${new Date().toLocaleDateString("en-CA")}`;
        console.log(apiEndpoint);

        const data: APIScore = await _apiWebFetch(apiEndpoint);
        return data;
    } catch (err) {
        throw new Error("NHLe API Scores fetch failed");
    }
}

/** @deprecated Recommended to use the getBoxscore in the {@link Game} class instead. */
export const getBoxscore = (gameId: number) => {

}