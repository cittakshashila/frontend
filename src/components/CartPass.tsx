"use client";

import { EventsInDay } from "@/libs/types";
import { cn } from "@/libs/utils";
import { useCart } from "@/store";
import { IconInfoCircle, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

interface prop {
  day: "DAY1" | "DAY2" | "DAY3";
  event: EventsInDay;
}

export default function CartPass({ day, event }: prop) {
  const { removePass, removeEvent } = useCart((state) => state);
  const [isInfoOpen, setInfoOpen] = useState<boolean>(true);

  const handleDeletePass = () => {
    removePass(day);
  };

  if (event.GEN.length === 0 && event.WK.length === 0) return null;

  return (
    <section className="text-cream border-y border-y-cream py-4 select-none">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl lg:text-5xl">
          {event.WK.length === 0
            ? `${day} General Pass`
            : `${day} Workshop Pass`}
        </h1>

        <h1 className="text-lg lg:text-3xl">
          {event.WK.length === 0 && "150"}
          {event.WK.length === 1 && "350"}
          {event.WK.length === 2 && "500"}
        </h1>
      </div>

      <h1 className="text-xs lg:text-xs inline-flex space-x-4">
        <span>Date: 30/03/24</span> <span>Day: Thursday</span>
        <section className="flex gap-2">
          <span
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setInfoOpen(!isInfoOpen)}
          >
            <IconInfoCircle size={16} />
          </span>
          <span
            onClick={handleDeletePass}
            className="cursor-pointer hover:text-red-400"
          >
            <IconTrash size={16} />
          </span>
        </section>
      </h1>

      <section className={cn("ml-2", isInfoOpen && "hidden")}>
        {event.GEN.length !== 0 && <p className="text-lg">General</p>}
        <ol className="flex flex-col gap-y-1 ml-8 text-[12px] md:text-sm">
          {event.GEN.map((event_name) => (
            <li
              className="inline-flex gap-x-1 items-center"
              key={event_name.code}
            >
              {event_name.title}
              <span
                onClick={() => {
                  removeEvent(event_name.code, event_name.day, "GEN");
                }}
                className="cursor-pointer hover:text-red-400"
              >
                <IconTrash size={16} />
              </span>
            </li>
          ))}
        </ol>

        {event.WK.length !== 0 && <p className="text-lg">Workshop</p>}
        <ol className="flex flex-col gap-y-1 ml-8 text-[12px] md:text-sm">
          {event.WK.map((event_name) => (
            <li
              className="inline-flex gap-x-1 items-center"
              key={event_name.code}
            >
              {event_name.title}
              <span
                onClick={() => {
                  removeEvent(event_name.code, event_name.day, "WK");
                }}
                className="cursor-pointer hover:text-red-400"
              >
                <IconTrash size={16} />
              </span>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
