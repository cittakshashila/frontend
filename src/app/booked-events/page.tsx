'use client'
import { NavBar } from "@/components";
import { API_URL } from '@/libs/utils'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from "@/store";
import Card from "@/components/Card";

const Booked = () => {
    const [cart, setCart] = useState<Record<"DAY1" | "DAY2" | "DAY3", Array<{
        event_id: string,
        fee: number,
        is_present: boolean,
        name: string,
        paid: boolean,
        pass_id: "DAY1" | "DAY2" | "DAY3",
        user_email: string
    }>> | null>(null)
    const { auth } = useAuth((state) => state);
    const[load, setLoad] = useState(false)

    useEffect(() => {
        const getCartDetails = async () => {
          if(auth?.access_token !== undefined) {
            setLoad(true)
            await axios.get(`${API_URL}/user/get-cart`,
              {
                headers: { Authorization: `Bearer ${auth?.access_token}` },
              },
            ).then((data)=>{
                setCart(data.data.body.data)
            }).catch((err)=>{
              console.log(err)
            }).finally(()=>{
              setLoad(false)
            })
          }
        }
        getCartDetails()
    }, [auth?.access_token])

    return (
      <>
        <NavBar />
        <main className="lg:pt-24 min-h-screen bg-cit-crowd bg-cover bg-fixed ">
        {load ?
            <div className="w-full h-full flex justify-center items-center">
                <div className="animate-spin rounded-full border-t-8 border-gray-300 border-solid h-16 w-16"></div>
            </div>
          : <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-0 relative ">
          {!cart?.DAY1?.length && !cart?.DAY2?.length && !cart?.DAY3?.length && auth?.access_token &&
            <div className="text-white text-5xl">
                No Events Booked
            </div>
          }
            { cart && cart["DAY1"] && <h1 className="h-[60px] text-white text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                29/02/2024
            </h1> }
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {cart && cart["DAY1"] && cart["DAY1"].map((value, index: number) => (
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
            { cart && cart["DAY2"] && <h1 className="h-[60px] text-white text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                01/03/2024
            </h1> }
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {cart && cart["DAY2"] && cart["DAY2"].map((value, index: number) => (
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
            { cart && cart["DAY3"] && <h1 className="h-[60px] text-white text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                02/03/2024
            </h1> }
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {cart && cart["DAY3"] && cart["DAY3"].map((value, index: number) => (
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
          }
        </main>
      </>
    );
}

export default Booked
