import { APIWebEndpoint, IAPIStandings } from "./types";
import { _apiWebFetch } from "./rest/fetch";

/**
 * Fetch the standings for today or any specified date
 * @param date The date to fetch the standings on. If undefined, today's standings will be fetched instead.
 * @returns {Promise<IAPIStandings>} A promise that resolves to the fetched standings.
 * @throws Error if the NHLe API standings fetch fails.
 */
export const getStandings = async (date?: Date): Promise<IAPIStandings> => {
    try {
        const apiEndpoint = !date ? APIWebEndpoint.STANDINGS_NOW : `standings/${date.toLocaleDateString("en-CA")}`;
        const data: IAPIStandings = await _apiWebFetch(apiEndpoint);
        return data;
    } catch (err) {
        throw new Error("NHLe API Standings fetch failed");
    }
};