export enum TVBroadcastMarket {
    NATIONAL = "N",
    HOME = "H",
    AWAY = "A"
}

export interface ITVBroadcast {
    id: number;

    /** The market that the broadcast originates in. (National, home, away) */
    market: TVBroadcastMarket;

    countryCode: string;

    /** The network that the broadcast resides on. (E.g. SNW, BSW, TNT, MAX, ESPN+, HULU) */
    network: string;
}