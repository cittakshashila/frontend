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
        description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`,
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
