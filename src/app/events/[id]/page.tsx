"use client"

import { NavBar } from "@/components";
import AddToCartButton from "@/components/AddToCartButton";
import { EVENT } from "@/libs/types";
import { MEDIA_URL, PARSE } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Event = ({ params: { id } }: { params: { id: string } }) => {
    const [data, setData] = useState<EVENT | null>(null)
    const [curr, setCurr] = useState<string>("description")
    useEffect(() => {
        const GET = async () => {
            const res = await fetch(`/api/events/${id}`)
            const data = await res.json()
            setData(PARSE(data.payload.blob.rawLines) as EVENT)
        }
        GET()
    }, [])
    if (!data) return <>Loading...!</>
    console.log(data)
    return (<>
        <NavBar />
        <div className="fade-overlay font-medium">
            <div className="text-white ml-10">
                <div className=" mt-40 sm:text-xl text-lg">
                    <Link href="/" className="font-oranienbaum">Home</Link> &gt;
                    <Link href="/events" className="font-oranienbaum"> Events</Link> &gt;
                    <Link href="" className="font-oranienbaum"> {data.id}</Link>
                </div>
                <div className="font-oranienbaum sm:text-5xl text-3xl my-10"> {data.title} </div>
                <div className="sm:text-xl text-lg">
                    <div className="font-oranienbaum"> {data.details.date} </div>
                    <div className="font-oranienbaum"> Chennai Institute of Technology </div>
                    <div className="font-oranienbaum"> Technical </div>
                </div>
                <div className="my-10">
                    <button className={`font-oranienbaum sm:text-3xl text-xl transition-all ${curr === "description" && 'border-b-4'}`}
                        onClick={() => setCurr("description")}>Description</button>
                     { ( data.rules && data.rules.length > 0 ) &&
                     <button className={`font-oranienbaum sm:text-3xl text-xl mx-5 transition-all ${curr === "rules" && 'border-b-4'}`}
                        onClick={() => setCurr("rules")}>Rules</button> }
                    <button className={`font-oranienbaum sm:text-3xl text-xl transition-all ${curr === "details" && 'border-b-4'}
                    ${((!(data.rules)) || (!(data.rules.length > 0))) && "mx-5" }`}
                        onClick={() => setCurr("details")}>Details</button>
                    {curr === "description" ? <div className="font-oranienbaum sm:text-xl text-lg my-10">{data.description}</div> :
                        curr === "rules" ? data.rules.map((item: String, index: number) => {
                            return <div key={index} className="font-oranienbaum sm:text-xl text-lg my-3">{index + 1}. {item}</div>
                        }) : Object.entries(data.details).map((value, index) => {
                            return <div className="font-oranienbaum sm:text-xl text-lg my-10" key={index}>{value[0].toUpperCase()} : {value[1]}</div>
                        })
                    }
                </div>
                { data.details.type === "ONLINE EVENT" ?
                    <Link href={data.glink || ""} className="font-oranienbaum sm:text-3xl text-xl bg-[#565656] px-8 py-3 rounded-lg mb-10">Register</Link> :
                    <AddToCartButton event={data}/>
                }
        </div>
        </div>
        <Image src={MEDIA_URL(data.id, 1)} alt="Event Photo" fill className="object-cover min-w-full min-h-full" />
    </>)
}
export default Event;
