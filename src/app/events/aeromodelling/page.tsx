'use client';
import React, { useEffect, useState } from "react";
import { isTeaser } from "@/libs/utils";
import EventDescriptionBox from "@/components/EventDescriptionBox";
import { EventDescriptor } from "@/libs/types";

export default function AeroModelling() {
  const [width, setWidth] = useState(0);

  if (isTeaser) return;

  const array: EventDescriptor[] = [{
    event_name: "Aero Modelling",
    event_date: "30 March 2023",
    event_details: "Aeromodelling is an exciting and dynamic field that offers a unique opportunity for students to develop a diverse range of skills across multiple disciplines. Through interactive sessions, this workshop provides a comprehensive understanding of the principles of aerodynamics, electrical engineering, and control systems. Students will learn how to design and build a fully functioning radio-controlled aircraft, gaining valuable experience in problem-solving and critical thinking. It's an exciting and rewarding experience that can inspire the next generation of engineers, designers, and innovators.",
    event_fees: "₹200",
    event_tag: "Learn,invest and transform the sky!",
    event_time: "8:00 AM",
    event_type: "Workshops",
    event_img: "/aero-model.webp",
    contact_email: "siddhartharajm.ece2021@citchennai.net",
    contact_name: "Siddhartharaj M",
    contact_number: "8072673703"
  }];

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => {setWidth(window.innerWidth);});
  }, []);

  if(width >= 600){
    return (
      <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200 backdrop-blur-xl ">
        <EventDescriptionBox details={array[0]}/>
      </main>
    );}else{
      return(
        <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200 backdrop-blur-xl ">
      </main>
      );
  }

}
