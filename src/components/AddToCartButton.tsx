"use client";

import { useCartContext } from "@/contexts/CartContext";

interface prop {
  name: string;
  day: "DAY1" | "DAY2" | "DAY3";
  category: "WK" | "GEN";
}

export default function AddToCartButton({ name, day, category }: prop) {
  const { setCartOpen, cart, setCart } = useCartContext();

  const handleClick = () => {
    setCartOpen(false);
    const modifiedCart = cart;
    if (!modifiedCart[day][category].includes(name)) {
      modifiedCart[day][category].push(name);
    }
    setCart(modifiedCart);
  };

  return (
    <>
      <h1 className="text-cream">{`${name} - ${day} - ${category}`}</h1>
      <button
        onClick={handleClick}
        className="bg-cream text-black p-4 rounded-md"
      >
        Add To Cart
      </button>
    </>
  );
}
