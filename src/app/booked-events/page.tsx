'use client'
import { NavBar } from "@/components";
import { API_URL } from '@/libs/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from "@/store";
import Card from "@/components/Card";

const Booked = () => {
    const [cart, setCart] = useState({})
    const { auth } = useAuth((state) => state);

    useEffect(() => {
        const getCartDetails = async () => {
            const { data } = await axios.get(API_URL + '/user/get-cart', 
                {
                  headers: { authorization: `Bearer ${auth?.access_token}` },
                },
            )
            if (data.statusCode) setCart(data.body.data)
            else {/* toast */}
            console.log(data.body.data)
        }
        getCartDetails()
    }, [])

    return (
      <>
        <NavBar />
        <main className="lg:pt-24 min-h-screen bg-cit-crowd bg-cover bg-fixed ">

          <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-0 relative ">
            { cart["DAY1"] && <h1 className="h-[60px] text-white text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                29/02/2024
            </h1> }
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {cart["DAY1"] && cart["DAY1"].map((value, index: number) => (
                  <Card
                    id={value.event_id}
                    name={value.name}
                    category={""}
                    date={'29/02/2024'}
                    key={index}
                  />
                ))}
          </section>
          <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-0 relative ">
            { cart["DAY2"] && <h1 className="h-[60px] text-white text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                01/03/2024
            </h1> }
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {cart["DAY2"] && cart["DAY2"].map((value, index: number) => (
                  <Card
                    id={value.event_id}
                    name={value.name}
                    category={""}
                    date={'01/03/2024'}
                    key={index}
                  />
                ))}
          </section>
          </section>
          <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-0 relative ">
            { cart["DAY3"] && <h1 className="h-[60px] text-white text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                02/03/2024
            </h1> }
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {cart["DAY3"] && cart["DAY3"].map((value, index: number) => (
                  <Card
                    id={value.event_id}
                    name={value.name}
                    category={""}
                    date={'02/03/2024'}
                    key={index}
                  />
                ))}
          </section>
          </section>
          </section>
        </main>
      </>
    );
}

export default Booked
