"use client";

import CartPass from "./CartPass";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import { API_URL, cn } from "@/libs/utils";
import { useAuth, useCart } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartSheet() {
  const { cart, cartOpen, toggleCart } = useCart((state) => state);
  const { auth } = useAuth((state) => state);
  const router = useRouter();
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const confirmEvents = async () => {
    try {
      setDisabled(true);
      let events_id = [
        ...cart.codes.DAY1,
        ...cart.codes.DAY2,
        ...cart.codes.DAY3,
      ];

      const res = await axios.put(
        `${API_URL}/user/update-cart`,
        { events_id },
        {
          headers: { authorization: `Bearer ${auth?.access_token}` },
        },
      );
      if (res.status === 200) {
        toast.success("Your Wishlist has been update");
      }
    } catch (err: any) {
      console.log(err);
      router.push("/register");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      <section
        className={cn(
          `bg-opacity-60 absolute top-0 min-h-screen min-w-60 lg:min-w-[500px] z-40 
        border-l- rounded-l-xl
        backdrop-blur pt-36 py-24 px-5 flex flex-col  justify-between transition-all duration-700 ease-in-out overflow-auto`,
          cartOpen ? "right-0" : "-right-[600px]",
        )}
      >
        {cart.codes.DAY1.length === 0 &&
        cart.codes.DAY2.length === 0 &&
        cart.codes.DAY3.length === 0 ? (
          <section className="text-cream flex flex-col items-center justify-center">
            <h1 className="text-xl lg:text-7xl text-cream">
              Wish List Is Empty
            </h1>
            <IconShoppingCart size={72} />
          </section>
        ) : (
          <>
            <section className="space-y-2 h-0 flex-grow overflow-auto">
              <CartPass day={"DAY1"} event={cart.DAY1} />
              <CartPass day={"DAY2"} event={cart.DAY2} />
              <CartPass day={"DAY3"} event={cart.DAY3} />
            </section>
            <h1 className="text-cream w-48 xl:w-56 mx-auto text-center xl:text-2xl text-md">
              We are currently limiting registrations! Further registrations
              will be done offline
            </h1>

            <button
              className={cn(
                "px-6 py-2 text-black text-2xl mt-8 border w-fit self-center rounded-md bg-cream hover:bg-white",
                isDisabled && "bg-gray-400",
              )}
              disabled={isDisabled}
              onClick={() => confirmEvents()}
            >
              {isDisabled ? "Loading" : "Confirm"}
            </button>
          </>
        )}
        <IconX
          onClick={() => toggleCart()}
          className="absolute left-8 top-8 cursor-pointer text-cream hover:text-white"
        />
      </section>
    </>
  );
}
