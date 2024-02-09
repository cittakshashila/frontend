import { create } from "zustand";
import { EVENT } from "./libs/types";

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

interface CartState {
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

const initData: Cart = {
  DAY1: {
    WK: [],
    GEN: [],
  },
  DAY2: {
    WK: [],
    GEN: [],
  },
  DAY3: {
    WK: [],
    GEN: [],
  },
  codes: {
    DAY1: [],
    DAY2: [],
    DAY3: [],
  },
};

export const useCart = create<CartState>((set) => ({
  cart: initData,
  addEvent: (event) => {
    set((state) => {
      const newCart = state.cart;

      if (newCart.codes[event.day].includes(event.code)) return {};

      newCart[event.day][event.category].push(event);
      newCart.codes[event.day].push(event.code);

      return { cart: newCart };
    });
  },

  removePass: (day) => {
    set((state) => {
      const newCart = state.cart;

      newCart[day] = { WK: [], GEN: [] };
      newCart.codes[day] = [];

      return { cart: newCart };
    });
  },

  removeEvent: (code, day, category) => {
    set((state) => {
      const newCart = state.cart;

      newCart[day][category] = [
        ...newCart[day][category].filter((obj) => obj.code !== code),
      ];
      newCart.codes[day] = [...newCart.codes[day].filter((i) => i !== code)];

      return { cart: newCart };
    });
  },

  cartOpen: false,
  toggleCart: () => {
    set((state) => ({ cartOpen: !state.cartOpen }));
  },
}));
