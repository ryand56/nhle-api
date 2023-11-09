const apiBaseUrl = "https://api.nhle.com/v1";
const apiWebBaseUrl = "https://api-web.nhle.com/v1";

export const _apiWebFetch = async (
    endpoint: string,
    options?: Parameters<typeof fetch>[1]
) => {
    try {
        const res = await fetch(`${apiWebBaseUrl}/${endpoint}`, options);
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