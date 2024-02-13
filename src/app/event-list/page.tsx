"use client"
import { NavBar } from "@/components";
import AddToCartButton from "@/components/AddToCartButton";
import {useProfileButton} from "@/hooks/useProfileButton";
import { EventList } from "@/libs/data";

export default function Events() {

  const { auth, login } = useProfileButton()
  if(!auth){
    login()
    return (
        <main className="flex min-h-screen flex-col bg-gray-800 ">
            <div className="w-[100vw] h-[100vh] flex justify-center items-center">
                <span className="text-3xl text-white">Click Login and Continue</span>
            </div>
        </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-gray-800 ">
      <NavBar />
      <section className="  pt-32 text-center ">
        {EventList.map((event) => (
          <AddToCartButton
            key={event.code}
            event={event}
          />
        ))}
      </section>
    </main>
  );
}
