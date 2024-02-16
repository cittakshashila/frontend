"use client";
import React from "react";
import { useState } from "react";
import Card from "@/components/Card";
import { EventList } from "@/libs/data";

export default function Events() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("All");
  const filteredEvents = EventList.filter(
    (item) => filter === "All" || item.details.type === filter,
  );

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
                Tech
              </a>
              <a
                className={filter === "Non-Tech" ? "underline" : ""}
                onClick={() => setFilter("Non-Tech")}
              >
                Non-Tech
              </a>
              <a
                className={filter === "Sports" ? "underline" : ""}
                onClick={() => setFilter("Sports")}
              >
                Sports
              </a>
            </ul>
          </div>

          {filteredEvents.map((item, index: number) => (
            <Card events={item} key={index} />
          ))}
        </div>
      </section>
    </main>
  );
}
