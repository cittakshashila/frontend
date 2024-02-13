type CONTACT = {
  incharge: string;
  email: string;
  phno: string;
};

type DETAIL = {
  type: "NON-TECHNICAL" | "TECHNICAL";
  date: string;
  time: [number, number];
};

export type EVENT = {
  title: string;
  tagline: string;
  description: string;
  rules: Array<string>;
  details: DETAIL;
  prizes: Array<string>;
  contacts: Array<CONTACT>;
  links: Array<string>;
  fee: number;
  day: "DAY1" | "DAY2" | "DAY3";
  category: "WK" | "GEN";
  code: string;
};

// INTERFACES FOR CART
export interface EventsInDay {
  WK: EVENT[];
  GEN: EVENT[];
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

export interface CartState {
  cart: Cart;
  cartOpen: boolean;
  toggleCart: () => void;
  addEvent: (prop: EVENT) => void;
  removePass: (day: "DAY1" | "DAY2" | "DAY3") => void;
  removeEvent: (
    code: string,
    day: "DAY1" | "DAY2" | "DAY3",
    category: "WK" | "GEN",
  ) => void;
}

// INTERFACE FOR USER
export interface User {
  name: string;
  email: string;
  picture: string;
  access_token: string;
}


