"use client";

import { useCartContext } from "@/contexts/CartContext";
import CartPass from "./CartPass";
import { IconX } from "@tabler/icons-react";
import { cn } from "@/libs/utils";

export default function CartSheet() {
  const { isCartOpen, setCartOpen, cart } = useCartContext();

  return (
    <section
      className={cn(
        "absolute top-0 min-h-screen min-w-[500px] z-40 backdrop-blur py-36 px-5 flex flex-col justify-between transition-all duration-700 ease-in-out overflow-auto",
        isCartOpen ? "right-0" : "-right-[600px]",
      )}
    >
      <section className="space-y-2 max-h-[500px] overflow-auto">
        <CartPass day={"Day 1"} event={cart.DAY1} />
        <CartPass day={"Day 2"} event={cart.DAY2} />
        <CartPass day={"Day 3"} event={cart.DAY3} />
      </section>

      <button className="px-6 py-2 text-black text-2xl border w-fit self-center rounded-md bg-cream hover:bg-white">
        Confirm
      </button>

      <IconX
        onClick={() => setCartOpen(false)}
        className="absolute left-8 top-8 cursor-pointer text-cream hover:text-white"
      />
    </section>
  );
}
