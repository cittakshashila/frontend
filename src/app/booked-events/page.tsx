"use client"

import {useProfileButton} from "@/hooks/useProfileButton";
import {API_URL} from "@/libs/utils";
import axios from "axios";
import {useEffect} from "react";

const BookedEvents = () => {

  const { auth, login } = useProfileButton()

  useEffect(()=>{
    const getCart = async () => {
      console.log("Hello")
    }
    if(!auth)
      getCart()
  },[auth])

  return(<>
  { auth &&
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
        <div className="w-[100vw] h-[100vh] flex justify-center items-center" onClick={()=>login()}>
            <span className="text-3xl text-white">Click Login and Continue</span>
        </div>
    </main>
  }
  </>)
}
export default BookedEvents;
