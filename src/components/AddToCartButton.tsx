"use client";

import { EVENT } from "@/libs/types";
import { useCart } from "@/store";

interface prop {
  event: EVENT;
}

export default function AddToCartButton({ event }: prop) {
  const { addEvent } = useCart();

  const handleClick = () => {
    addEvent(event);
  };

  return (
    <>
      <h1 className="text-cream">
        {`${event.title} - ${event.day} - ${event.category}`}
      </h1>
      <button
        onClick={handleClick}
        className="bg-cream text-black p-4 rounded-md"
      >
        Add To Cart
      </button>
    </>
  );
}
