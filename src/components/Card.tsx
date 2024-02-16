"use client"
import { EventList } from "@/libs/types";
import React, { useState } from "react";

interface Props {
  events: EventList;
}

const Card = ({ events }: Props) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(${events.event_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    filter: "contrast(0.85) brightness(0.9) grayscale(0.2) blur(0px)",
    minHeight: "300px",
    position: "relative",
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className="relative text-center card border-2 border-gray-700 m-5 p-5 sm:min-h-[380px] h-[450px]  rounded sm:min-w-[350px] w-[300px]"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 h-[90%]  w-[100%]">
        {isHovered && (
          <div className="mt-5">
            <p>{events.event_type}|{events.event_date}</p>
          </div>
        )}
        {isHovered && (
          <div className="text-2xl mt-12">
            {events.event_tag}
          </div>
        )}
        {isHovered && (
          <button className="mt-5 sm:mt-20 p-3  text-[#FFF] rounded-lg bg-gray-200 bg-opacity-30">
            Learn More
          </button>
        )}
        <div className="text">
          {events.event_name}
        </div>
      </div>
    </div>
  );
};

export default Card;
