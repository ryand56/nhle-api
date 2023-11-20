export interface IDisplayName {
    default: string;
}

export type DisplayName = IDisplayName & {
    /** French */
    fr?: string;

    /** Spanish */
    es?: string;

    cs?: string;
    fi?: string;
    sk?: string;
    sv?: string;
}
