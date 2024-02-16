"use client"
import React from "react";
import {useState,useEffect} from "react";
import Card from "@/components/Card";
import { EventList } from "@/libs/types";

export default function Events() {
  //Below are the events data with type of EventList imported from the types in lib to add new event add the data here as an object
  const array: EventList[] = [
    {
      event_name: "Aero Modelling",
      event_tag: "Learn,invest and transform the sky!",
      event_details: "",
      event_type: "Tech",
      event_date: "29 Feb 2024",
      event_img: "/aero-model.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Block Chain",
      event_tag: "Secure and decentralised record keeping",
      event_details: "",
      event_type: "Tech",
      event_date: "29 Feb 2024",
      event_img: "/block-chain.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Call Of Duty",
      event_tag: "The ultimate gaming battleground",
      event_details: "",
      event_type: "Non-Tech",
      event_date: "29 Feb 2024",
      event_img: "/call-of-duty.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Choreo Night",
      event_tag: "Move to the rythm of music with Chore",
      event_details: "",
      event_type: "Sports",
      event_date: "29 Feb 2024",
      event_img: "/dance.svg",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Brawl Of Brains",
      event_tag: "Connect the dots and tickle your brains",
      event_details: "",
      event_type: "Sports",
      event_date: "29 Feb 2024",
      event_img: "/brawl-brains.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Drone Technology",
      event_tag: "Fly thorugh the sky!",
      event_details: "",
      event_type: "Non-Tech",
      event_date: "29 Feb 2024",
      event_img: "/drone-tech.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Aero Modelling",
      event_tag: "Learn,invest and transform the sky!",
      event_details: "",
      event_type: "Tech",
      event_date: "29 Feb 2024",
      event_img: "/aero-model.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Block Chain",
      event_tag: "Secure and decentralised record keeping",
      event_details: "",
      event_type: "Tech",
      event_date: "29 Feb 2024",
      event_img: "/block-chain.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Call Of Duty",
      event_tag: "The ultimate gaming battleground",
      event_details: "",
      event_type: "Non-Tech",
      event_date: "29 Feb 2024",
      event_img: "/call-of-duty.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Choreo Night",
      event_tag: "Move to the rythm of music with Chore",
      event_details: "",
      event_type: "Sports",
      event_date: "29 Feb 2024",
      event_img: "/active-popcorn.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Brawl Of Brains",
      event_tag: "Connect the dots and tickle your brains",
      event_details: "",
      event_type: "Sports",
      event_date: "29 Feb 2024",
      event_img: "/brawl-brains.webp",
      event_hover_img: "/aero-model.webp",
    },
    {
      event_name: "Drone Technology",
      event_tag: "Fly thorugh the sky!",
      event_details: "",
      event_type: "Non-Tech",
      event_date: "29 Feb 2024",
      event_img: "/drone-tech.webp",
      event_hover_img: "/aero-model.webp",
    },
  ];

//  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");
  const filteredEvents = array.filter(item => filter === "All" || item.event_type === filter);

 return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727] h-screen lg:snap-y lg:snap-mandatory overflow-x-hidden">
      <section className="bg-world-map bg-fixed bg-cover bg-center m-2">
        <nav className="text-white text-4xl mb-5 text-center z-50 fixed w-[99%] flex flex-row justify-between">
          <span>logo</span>
          <span>profile</span>
        </nav>
        <div className="relative top-32 flex flex-row flex-wrap justify-center">
          <div className="sticky w-full flex flex-row justify-center items-center top-10 z-50">
            <ul className="text-[#FFF] text-xl w-[300px] sm:w-[400px] flex flex-row justify-center items-center gap-4 show cursor-pointer">
              <a className={filter === "All" ? "underline" : ""} onClick={() => setFilter("All")}>All</a>
              <a className={filter === "Tech" ? "underline" : ""} onClick={() => setFilter("Tech")}>Tech</a>
              <a className={filter === "Non-Tech" ? "underline" : ""} onClick={() => setFilter("Non-Tech")}>Non-Tech</a>
              <a className={filter === "Sports" ? "underline" : ""} onClick={() => setFilter("Sports")}>Sports</a>
            </ul>
          </div>
          {filteredEvents.map((item, index) => (
                <Card events={item} key={index} />
            ))}
        </div>
      </section>
    </main>
  );
}