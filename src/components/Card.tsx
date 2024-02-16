"use client";
import { EVENT } from "@/libs/types";
import React, { useState } from "react";

interface Props {
  events: EVENT;
}

const Card = ({ events }: Props) => {
  const cardStyle: React.CSSProperties = {
    backgroundImage: `url(https://img.etimg.com/thumb/width-1200,height-1200,imgsize-84711,resizemode-75,msid-51251228/news/sports/pro-kabaddi-league-is-helping-international-competitors-catch-up.jpg)`,
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
            <p>
              {events.details.type}|{events.details.date}
            </p>
          </div>
        )}
        {isHovered && <div className="text-2xl mt-12">{events.tagline}</div>}
        {isHovered && (
          <button className="mt-5 sm:mt-20 p-3  text-[#FFF] rounded-lg bg-gray-200 bg-opacity-30">
            Learn More
          </button>
        )}
        <div className="text">{events.title}</div>
      </div>
    </div>
  );
};

export default Card;
