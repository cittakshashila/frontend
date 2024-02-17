"use client"

import {NavBar} from "@/components";
import AddToCartButton from "@/components/AddToCartButton";
import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

const Event = ({ params: {id} }: { params : { id: string } }) => {

    const img_link = "https://cdn.discordapp.com/attachments/1058000101919948901/1208284657645260800/img56.jpg?ex=65e2b9c7&is=65d044c7&hm=eb8562d76d4d36607c9af3e08fd21dc00d4cbf125b387c642a218a202f4611d2&"
    interface dataType{
        [key: string]: string;
    }
    const data : dataType = {
        description: "Lorem",
        details: "Ipsium",
        rules: "Doler Amet"
    }
    const[curr, setCurr] = useState<string>("description")

    return(<>
        <NavBar/>
        <div className="fade-overlay font-medium">
            <div className="text-white ml-10">
                <div className=" mt-40 sm:text-xl text-lg">
                    <Link href="/" className="font-oranienbaum">Home</Link> &gt;
                    <Link href="/events" className="font-oranienbaum"> Events</Link> &gt;
                    <Link href="" className="font-oranienbaum"> Odipudi</Link>
                </div>
                <div className="font-oranienbaum sm:text-5xl text-3xl my-10"> Odipudi </div>
                <div className="sm:text-xl text-lg">
                    <div className="font-oranienbaum"> 29 Feb 2024 </div>
                    <div className="font-oranienbaum"> Chennai Institute of Technology </div>
                    <div className="font-oranienbaum"> Technical </div>
                </div>
                <div className="my-10">
                    <button className={`font-oranienbaum sm:text-3xl text-xl transition-all ${curr === "description" && 'border-b-4'}`}
                    onClick={()=>setCurr("description")}>Description</button>
                    <button className={`font-oranienbaum sm:text-3xl text-xl mx-5 transition-all ${curr === "rules" && 'border-b-4'}`} 
                    onClick={()=>setCurr("rules")}>Rules</button>
                    <button className={`font-oranienbaum sm:text-3xl text-xl transition-all ${curr === "details" && 'border-b-4'}`}
                    onClick={()=>setCurr("details")}>Details</button>
                    <div className="font-oranienbaum sm:text-xl text-lg lg:w-[50%] my-5">{data[curr]}</div>
                </div>
                <AddToCartButton/>
            </div>
        </div>
        <Image src={img_link} alt="Event Photo" fill className="object-cover min-w-full min-h-full"/>
    </>)
}
export default Event;
