import React from "react";
import Card from "@/components/Card";
import { EventList } from "@/libs/types";
import { isTeaser } from "@/libs/utils";

export default function Events() {
  const array: EventList[] = [
    {
      event_name: "Aero Modelling",
      event_tag: "Learn,invest and transform the sky!",
      event_details: "",
      event_type: "Workshops",
      event_date: "29 Feb 2024",
      event_img: "/aero-model.webp",
    },
    {
      event_name: "Block Chain",
      event_tag: "Secure and decentralised record keeping",
      event_details: "",
      event_type: "Workshops",
      event_date: "29 Feb 2024",
      event_img: "/block-chain.webp",
    },
    {
      event_name: "Call Of Duty",
      event_tag: "The ultimate gaming battleground",
      event_details: "",
      event_type: "Workshops",
      event_date: "29 Feb 2024",
      event_img: "/call-of-duty.webp",
    },
    {
      event_name: "Choreo Night",
      event_tag: "Move to the rythm of music with Chore",
      event_details: "",
      event_type: "Workshops",
      event_date: "29 Feb 2024",
      event_img: "/active-popcorn.webp",
    },
    {
      event_name: "Brawl Of Brains",
      event_tag: "Connect the dots and tickle your brains",
      event_details: "",
      event_type: "Workshops",
      event_date: "29 Feb 2024",
      event_img: "/brawl-brains.webp",
    },
    {
      event_name: "Drone Technology",
      event_tag: "Fly thorugh the sky!",
      event_details: "",
      event_type: "Workshops",
      event_date: "29 Feb 2024",
      event_img: "/drone-tech.webp",
    },
  ];

  if (isTeaser) return;

  return (
    <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200 backdrop-blur-xl ">
      <div className="flex flex-row flex-wrap justify-center ">
        {array.map((item, index) => (
          <Card key={index} events={item} />
        ))}
      </div>
    </main>
  );
}
