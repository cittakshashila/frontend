"use client";

import { EVENT } from "@/libs/types";
import { useCart } from "@/store";

interface prop {
  event: EVENT;
}

export default function AddToCartButton({ event }: prop) {
  const { addEvent } = useCart();

  const handleClick = () => {
    const newEvent = event
    newEvent.day = "DAY1"
    newEvent.category = "GEN"
    addEvent(event);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="font-oranienbaum sm:text-3xl text-xl bg-[#565656] px-8 py-3 rounded-lg"
      >
        Add To Cart
      </button>
    </>
  );
}
