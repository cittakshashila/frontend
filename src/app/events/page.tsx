"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "@/components/Card";
import { FOLDER_TYPE } from "@/libs/types";
import { NavBar } from "@/components";
import { IconLoader } from "@tabler/icons-react";
import { PARSE } from "@/libs/utils";

export default function Events() {
    type Type = "All" | "TECHNICAL" | "NON-TECHNICAL" | "WORKSHOP" | "PRO SHOW" | "ONLINE EVENT";
    type infoType = { name: string; type: Type };
    const [filter, setFilter] = useState<string>("All");
    const [queue, setQueue] = useState<Record<string, infoType> | null>(null);

    useEffect(() => {
        const fetchFolders = async () => {
            const res = await fetch("/api/events/folder");
            const data = (await res.json()) as { payload: { blob: { rawLines: Array<string> } } };
            console.log(data);
            setQueue(PARSE(data.payload.blob.rawLines) as Record<string, infoType>);
            console.log(queue);
        };
        if (!queue) {
            fetchFolders();
        }
    }, []);
    const filteredEvents = Object.entries(queue || {}).filter(([_, value]) => filter === "All" || value.type === filter);
    return (
        <div className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
            <div className=" bg-fixed bg-cover bg-center m-2">
                <NavBar />

                {!queue ? (
                    <div className="min-h-screen flex items-center justify-center">
                        <IconLoader size={72} className="animate-spin text-white" />
                    </div>
                ) : (
                    <div className="relative top-32 flex flex-row flex-wrap justify-center">
                        <div className="sticky w-full flex justify-center items-center xl:top-36 top-3 px-5  md:z-[999] z-40 ">
                            <ul className="text-cream px-10 text-md flex justify-center flex-wrap items-center space-x-4 rounded-xl backdrop-blur py-4 cursor-pointer">
                                <a
                                    className={filter === "All" ? "underline text-[#f0f0f0]" : ""}
                                    onClick={() => setFilter("All")}
                                >
                                    All
                                </a>
                                <a
                                    className={
                                        filter === "TECHNICAL" ? "underline text-[#f0f0f0]" : ""
                                    }
                                    onClick={() => setFilter("TECHNICAL")}
                                >
                                    Technical
                                </a>
                                <a
                                    className={
                                        filter === "NON-TECHNICAL" ? "underline text-[#f0f0f0]" : ""
                                    }
                                    onClick={() => setFilter("NON-TECHNICAL")}
                                >
                                    Non-Technical
                                </a>
                                <a
                                    className={
                                        filter === "WORKSHOP" ? "underline text-[#f0f0f0]" : ""
                                    }
                                    onClick={() => setFilter("WORKSHOP")}
                                >
                                    Workshops
                                </a>
                                <a
                                    className={
                                        filter === "PRO SHOW" ? "underline text-[#f0f0f0]" : ""
                                    }
                                    onClick={() => setFilter("PRO SHOW")}
                                >
                                    Pro Show
                                </a>
                                <a
                                    className={
                                        filter === "ONLINE EVENT" ? "underline text-[#f0f0f0]" : ""
                                    }
                                    onClick={() => setFilter("ONLINE EVENT")}
                                >
                                    Online Event
                                </a>
                            </ul>
                        </div>

                        {filteredEvents.map(([key, value], index: number) => (
                            <Card id={key} name={value.name} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
