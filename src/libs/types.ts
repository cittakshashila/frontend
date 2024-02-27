type CONTACT = {
    incharge: string;
    email: string;
    phno: string;
};

type DETAIL = {
    type:
    | "WORKSHOP"
    | "PRO SHOW"
    | "NON-TECHNICAL"
    | "TECHNICAL"
    | "ONLINE EVENT";
    date: string;
    time: [number, number];
};

export type EVENT = {
    id: string;
    title: string;
    tagline: string;
    description: string;
    rules: Array<string>;
    details: DETAIL;
    prizes: Array<string>;
    contacts: Array<CONTACT>;
    links: Array<string>;
    glink?: string;
    fee: number;
    day: "DAY1" | "DAY2" | "DAY3";
    category: "WK" | "GEN" | "PRO";
};

// INTERFACES FOR CART
export interface EventsInDay {
    WK: EVENT[];
    GEN: EVENT[];
    PRO: EVENT[];
}

export interface Cart {
    DAY1: EventsInDay;
    DAY2: EventsInDay;
    DAY3: EventsInDay;
    codes: {
        DAY1: string[];
        DAY2: string[];
        DAY3: string[];
    };
}

export type API_TYPE = {
    success: boolean;
    message: string;
    data?: any;
}

export interface CartState {
    cart: Cart;
    cartOpen: boolean;
    toggleCart: () => void;
    addEvent: (prop: EVENT) => void;
    removePass: (day: "DAY1" | "DAY2" | "DAY3") => void;
    removeEvent: (
        code: string,
        day: "DAY1" | "DAY2" | "DAY3",
        category: "WK" | "GEN" | "PRO",
    ) => void;
}

// INTERFACE FOR USER
export interface User {
    name: string;
    email: string;
    picture: string;
    access_token: string;
    verified: boolean;
}

export const REPO_OWNER = "RahulNavneeth";
export const REPO_NAME = "EVENTS-DATA-24-TEST";

export type INFO_URL =
    `https://github.com/${string}/${string}/blob/master/${string}/info.json`;
export type MEDIA_URL =
    `https://raw.githubusercontent.com/${string}/${string}/master/events/${string}/assets/${string}.png`;

export type FOLDER_TYPE = {
    name: string;
    path: string;
    contentType: string;
};
