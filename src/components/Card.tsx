"use client";
import { EVENT } from "@/libs/types";
import React, { useState } from "react";
import { motion } from "framer-motion";

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
      className="group relative rounded-md bg-cover bg-center  text-center border-2 border-white m-5 md:mt-20 mt-10 sm:mx-10 sm:min-h-[380px] h-[550px] sm:min-w-[320px] w-[300px] flex flex-col justify-end  hover:grayscale  transition-all delay-100 ease-linear bg-[url('https://img.etimg.com/thumb/width-1200,height-1200,imgsize-84711,resizemode-75,msid-51251228/news/sports/pro-kabaddi-league-is-helping-international-competitors-catch-up.jpg')] "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="w-full flex flex-col justify-end my-4">
        <motion.h3
          className="text-white text-6xl  w-full "
          animate={{
            y: isMouseOver ? -350 : 0,
          }}
          transition={{ ease: "easeInOut", duration: isMouseOver ? 0.5 : 0.75 }}
        >
          Target
        </motion.h3>
        <motion.p
          className="text-gray-100 text-4xl  justify-center w-full absolute bottom-0"
          initial={{ opacity: 0 }}
          animate={{
            y: isMouseOver ? -250 : 0,
            opacity: isMouseOver ? 1 : 0,
          }}
          transition={{ ease: "easeInOut", duration: isMouseOver ? 0.75 : 0.5 }}
        >
          Hit It Right
        </motion.p>
      </motion.div>
      <div className="w-full flex justify-center items-center absolute bottom-4">
        <motion.button
          className="px-8 py-4 text-3xl rounded-lg text-white  delay-100  justify-center bg-white bg-opacity-50 z-10 hover:scale-105 hover:bg-opacity-60 transition-all ease-linear "
          initial={{ opacity: 0 }}
          animate={{ opacity: isMouseOver ? 1 : 0 }}
          transition={{ ease: "easeIn", duration: 0.75 }}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Card;
