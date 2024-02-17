"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "@/components/Card";
import { useInView } from "react-intersection-observer"
import { EVENT, FOLDER_TYPE } from "@/libs/types";
import { PARSE } from "@/libs/utils";

export default function Events() {
    const [filter, setFilter] = useState<string>("All");
    const [queue, setQueue] = useState<Array<FOLDER_TYPE>>([]);
    const [EventList, setEventList] = useState<Array<EVENT>>([]);

    const LIMIT = 10;

    useEffect(() => {
        const fetchFolders = async () => {
            const res = await fetch("/api/events/folder");
            const data = await res.json() as { payload: { tree: { items: Array<FOLDER_TYPE> } } };
            setQueue(data.payload.tree.items.filter((item) => item.contentType === "directory"));
        };
        if (queue.length === 0) {
            fetchFolders();
        }
    }, []);

    const fetchEvent = async (name: string) => {
        const res = await fetch(`/api/events/${name}`);
        const data = await res.json();
        return data.payload.blob.rawLines;
    };
    const processEvents = async () => {
        const tempEventList = [...EventList];
        let updatedQueue = [...queue];
        for (let i = 0; i < Math.min(LIMIT, queue.length); i++) {
            const item = updatedQueue.shift();
            if (item) {
                const data = await fetchEvent(item.name);
                if (!tempEventList.find((e) => e.title === PARSE(data).title)) {
                    tempEventList.push(PARSE(data) as EVENT);
                }
            }
        }
        setEventList([...tempEventList]);
        setQueue([...updatedQueue]);
    };
    useEffect(() => {
        setTimeout(() => {
            if (queue.length > 0) processEvents();
        }, 100);
    }, [queue]);

    console.log(EventList);
    const filteredEvents = EventList.filter(
        (item) => filter === "All" || item.details.type === filter,
    );

    return (
        <div className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
            <div className="bg-world-map bg-fixed bg-cover bg-center m-2">
                <nav className="text-white text-4xl mb-5 text-center z-50 fixed w-[99%] flex flex-row justify-between">
                    <span>logo</span>
                    <span>profile</span>
                </nav>
                <div className="relative top-32 flex flex-row flex-wrap justify-center">
                    <div className="sticky w-full flex flex-row justify-center items-center top-10 z-50">
                        <ul className="text-[#FFF] text-xl w-[300px] sm:w-[400px] flex flex-row justify-center items-center gap-4 show cursor-pointer">
                            <a
                                className={filter === "All" ? "underline" : ""}
                                onClick={() => setFilter("All")}
                            >
                                All
                            </a>
                            <a
                                className={filter === "Tech" ? "underline" : ""}
                                onClick={() => setFilter("Tech")}
                            >
                                Technical
                            </a>
                            <a
                                className={filter === "Non-Tech" ? "underline" : ""}
                                onClick={() => setFilter("Non-Tech")}
                            >
                                Non-Technical
                            </a>
                            <a
                                className={filter === "Tech" ? "underline" : ""}
                                onClick={() => setFilter("Tech")}
                            >
                                Workshops
                            </a>
                            <a
                                className={filter === "Sports" ? "underline" : ""}
                                onClick={() => setFilter("Sports")}
                            >
                                Online events
                            </a>
                        </ul>
                    </div>

                    {filteredEvents.map((item, index: number) => (
                        <Card events={item} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}
