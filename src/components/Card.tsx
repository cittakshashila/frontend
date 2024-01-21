import { EventList } from "@/libs/types";
import React from "react";

interface props {
  events: EventList;
}

const Card = ({ events }: props) => {
  const card: React.CSSProperties = {
    backgroundImage: `url("${events.event_img}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    filter: "contrast(0.85) brightness(0.9) grayscale(0.2) blur(0px)",
    minHeight: "300px",
  };

  return (
    <div
      className="text-center border-2 border-gray-700  m-5 p-5 h-[350px] rounded w-[300px] md:h-[28vw] md:w-[27vw] hover:border-4"
      style={card}
    >
      <div className="relative top-[20%] p-5 h-[90%] w-[100%]  ">
        <div className="lg:text-[2vw] text-2xl mb-2 font-bold-[500] ">
          {events.event_name}
        </div>
        <div className="text-sm border-t-2  mt-1 color-white">
          {events.event_tag}
        </div>
      </div>
      <div className="flex justify-between flex-row items-center align-content-center">
        <div className="text-sm">{events.event_type}</div>
        <div className="text-sm">{events.event_date}</div>
      </div>
    </div>
  );
};

export default Card;
