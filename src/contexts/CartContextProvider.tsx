"use client";

import { ReactNode, useState } from "react";
import { Cart, CartContext } from "./CartContext";

interface props {
  children: ReactNode;
}

export default function CartContextProvider({ children }: props) {
  const [cart, setCart] = useState<Cart>({
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
  });
  const [isCartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isCartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
