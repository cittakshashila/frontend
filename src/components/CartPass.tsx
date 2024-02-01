"use client";

import { EventsInDay } from "@/contexts/CartContext";
import { cn } from "@/libs/utils";
import { IconInfoCircle } from "@tabler/icons-react";
import { useState } from "react";

interface prop {
  day: string;
  event: EventsInDay;
}

export default function CartPass({ day, event }: prop) {
  const [isOpen, setOpen] = useState<boolean>(false);

  if (event.GEN.length === 0 && event.WK.length === 0) return;

  return (
    <section className="text-cream border-y border-y-cream py-4 select-none">
      <div className="flex items-end justify-between">
        <h1 className="text-5xl">
          {event.WK.length === 0
            ? `${day} General Pass`
            : `${day} Workshop Pass`}
        </h1>
        <h1 className="text-3xl">
          {event.WK.length === 0 && "150"}
          {event.WK.length === 1 && "350"}
          {event.WK.length === 2 && "500"}
        </h1>
      </div>
      <h1 className="text-xs inline-flex space-x-4">
        <span>Date: 30/03/24</span> <span>Day: Thursday</span>
        <span onClick={() => setOpen(!isOpen)}>
          <IconInfoCircle size={20} />
        </span>
      </h1>

      <section className={cn("ml-2", !isOpen && "hidden")}>
        {event.GEN.length !== 0 && <p>General</p>}
        <ol className=" ml-8 text-sm">
          {event.GEN.map((event_name) => <li>{event_name}</li>)}
        </ol>

        {event.WK.length !== 0 && <p>Workshop</p>}
        <ol className=" ml-8 text-sm">
          {event.WK.map((event_name) => <li>{event_name}</li>)}
        </ol>
      </section>
    </section>
  );
}
