import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Cart, CartState, User } from "./libs/types";

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

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      cart: initData,
      addEvent: (event) => {
        set((state) => {
          const newCart = state.cart;

          if (newCart.codes[event.day].includes(event.id)) return {};

          newCart[event.day][event.category].push(event);
          newCart.codes[event.day].push(event.id);

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
            ...newCart[day][category].filter((obj) => obj.id !== code),
          ];
          newCart.codes[day] = [
            ...newCart.codes[day].filter((i) => i !== code),
          ];

          return { cart: newCart };
        });
      },

      cartOpen: false,
      toggleCart: () => {
        set((state) => ({ cartOpen: !state.cartOpen }));
      },
    }),
    { name: "cart" },
  ),
);

interface AuthState {
  auth: User | null;
  setAcessToken: (user: User) => void;
  removeToken: () => void;
}

const initUser: User = {
  name: "",
  access_token: "",
  picture: "",
  email: "",
};

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      auth: initUser,
      setAcessToken: (user) =>
        set(() => ({
          auth: user,
        })),
      removeToken: () => {
        set(() => ({ auth: null }));
      },
    }),
    { name: "user" },
  ),
);
