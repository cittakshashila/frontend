"use client";

import CartPass from "./CartPass";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import { API_URL, cn } from "@/libs/utils";
import { useCart } from "@/store";
import axios from "axios";
import {useAuthContext} from "@/contexts/AuthContext";
import { useRouter } from 'next/navigation'

export default function CartSheet() {
  const { cart, cartOpen, toggleCart } = useCart((state) => state);
  const {auth} = useAuthContext()
  const events_id = ["OD-567"]
  const router = useRouter()

  const confirmEvents = async () => {
    try{
       await axios.put(`${API_URL}/user/update-cart`, { events_id }, {
        headers : { authorization : `Bearer ${auth?.access_token}` }
      }).then(data=>{
        console.log(data)
      })
    }catch(err : any) {
      if(err.response.status === 550)
        router.push("/register")
    }
}

  return (
    <section
      className={cn(
        "absolute top-0 min-h-screen min-w-[500px] z-40 backdrop-blur py-36 px-5 flex flex-col  justify-between transition-all duration-700 ease-in-out overflow-auto",
        cartOpen ? "right-0" : "-right-[600px]",
      )}
    >
      {cart.codes.DAY1.length === 0 && cart.codes.DAY2.length === 0 &&
          cart.codes.DAY3.length === 0
        ? (
          <section className="text-cream flex flex-col items-center justify-center">
            <h1 className="text-7xl text-cream">Cart Is Empty</h1>
            <IconShoppingCart size={72} />
          </section>
        )
        : (
          <>
            <section className="space-y-2 max-h-[500px] overflow-auto">
              <CartPass day={"DAY1"} event={cart.DAY1} />
              <CartPass day={"DAY2"} event={cart.DAY2} />
              <CartPass day={"DAY3"} event={cart.DAY3} />
            </section>

            <button className="px-6 py-2 text-black text-2xl border w-fit self-center rounded-md bg-cream hover:bg-white" onClick={()=>confirmEvents()}>
              Confirm
            </button>
          </>
        )}
      <IconX
        onClick={() => toggleCart()}
        className="absolute left-8 top-8 cursor-pointer text-cream hover:text-white"
      />
    </section>
  );
}
