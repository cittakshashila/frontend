"use client";

import { EVENT } from "@/libs/types";
import { useCart } from "@/store";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface prop {
  event: EVENT;
}

export default function AddToCartButton({ event }: prop) {
  const { addEvent } = useCart();

  const handleClick = () => {
    toast.success("Added to wish list ", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    addEvent(event);
  };

  return (
    <>
      {event.id !== "CHNIG" ? (
        event.id === "KLIVE" || event.day === "DAY1" || !event.day ? (
          <h1 className="font-oranienbaum sm text-3xl py-3 ">
            Registrations are closed
          </h1>
        ) : (
          <button
            onClick={handleClick}
            className="font-oranienbaum sm:text-3xl text-xl bg-[#565656] px-8 py-3 rounded-lg"
          >
            Add To Wishlist
          </button>
        )
      ) : (
        <h1 className="font-oranienbaum sm text-3xl   py-3 ">
          Contact the person above
        </h1>
      )}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
