import { createContext, Dispatch, SetStateAction, useContext } from "react";

export interface EventsInDay {
  WK: string[];
  GEN: string[];
}

export interface Cart {
  DAY1: EventsInDay;
  DAY2: EventsInDay;
  DAY3: EventsInDay;
}

export interface CartState {
  cart: Cart;
  setCart: Dispatch<SetStateAction<Cart>>;
  isCartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<CartState | undefined>(
  undefined,
);

export function useCartContext() {
  const state = useContext(CartContext);

  if (state === undefined) {
    throw new Error("useAuthContext got a undefined value");
  }

  return {
    cart: state.cart,
    setCart: state.setCart,
    isCartOpen: state.isCartOpen,
    setCartOpen: state.setCartOpen,
  };
}
