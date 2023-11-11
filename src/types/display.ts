export interface IDisplayName {
    default: string;
}

export type DisplayNameFrench = IDisplayName & {
    fr?: string;
}

/** Not sure if this is Spanish? */
export type DisplayNameSpanish = IDisplayName & {
    es?: string;
}