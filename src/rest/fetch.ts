import { APIWebFetchFunction, APIWebEndpoint } from "../types";

const apiBaseUrl = "https://api.nhle.com/v1";
const apiWebBaseUrl = "https://api-web.nhle.com/v1";

/** @internal */
export const _apiWebFetch: APIWebFetchFunction = async (
    endpoint: APIWebEndpoint | string,
    options?: Parameters<typeof fetch>[1]
) => {
    try {
        const url = `${apiWebBaseUrl}/${endpoint}`;
        console.log(url);
        const res = await fetch(url, options);
        if (!res.ok) {
            throw new Error(`Error from NHLe Web API: ${res.status} - ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        throw new Error('NHLe Web API fetch failed');
    }
}