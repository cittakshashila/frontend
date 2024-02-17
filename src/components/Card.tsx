"use client";
import { EVENT } from "@/libs/types";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MEDIA_URL } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  events: EVENT;
}

const Card = ({ events }: Props) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };
  return (
    <motion.div
      className={`group relative text-center shadow m-5 md:mt-20 mt-10 sm:mx-10 sm:min-h-[380px] h-[500px] sm:min-w-[320px] w-[300px] flex flex-col justify-end  hover:grayscale  transition-all delay-100 ease-linear`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ width: "100%", height: "500px", position: "relative" }}>
        <div className="absolute  z-30 w-full h-[500px] bg-[linear-gradient(0deg,rgba(0,0,0,0.95)_6.82%,rgba(0,0,0,0.00)_81.44%)]" />
        <Image
          className="absolute w-full  h-[500px] object-cover z-0"
          width={300}
          height={500}
          src={MEDIA_URL(events.id, 1)}
          alt={events.id}
        />
      </div>
      <motion.div className="w-full flex flex-col justify-end my-4 z-30">
        <motion.h3
          className="text-white text-3xl font-oranienbaum w-full "
          animate={{
            y: isMouseOver ? -350 : -50,
          }}
          transition={{ ease: "easeInOut", duration: isMouseOver ? 0.5 : 0.75 }}
        >
          {events.title}
        </motion.h3>
        <motion.p
          className="text-gray-100 text-4xl justify-center w-full absolute bottom-0"
          initial={{ opacity: 0 }}
          animate={{
            y: isMouseOver ? -250 : 0,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={{ ease: "easeInOut", duration: isMouseOver ? 0.75 : 0.5 }}
        ></motion.p>
      </motion.div>
      <div className="w-full flex justify-center items-center absolute bottom-10 z-30">
        <Link href={`/${events.id}`}>
          <motion.div
            className="px-8 py-2 text-2xl text-white delay-100 justify-center bg-white bg-opacity-50 z-10 hover:scale-105 hover:bg-opacity-60 transition-all ease-linear "
            initial={{ opacity: 0 }}
            animate={{ opacity: isMouseOver ? 1 : 0 }}
            transition={{ ease: "easeIn", duration: 0.5 }}
          >
            Learn More
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
