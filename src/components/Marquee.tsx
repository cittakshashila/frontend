"use client"
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import {  motion } from "framer-motion";
import Image from "next/image";


const Images = [
    {
      id: 1,
      src :'/coca-cola.webp',
      alt: "Image 1",
      width: 400, 
      height: 250,
    },
  {
    id: 2,
    src:"/rapido.webp",
    alt: "Image 2",
    width: 400, 
    height: 250,
  },
  {
    id: 3,
    src:"/hornbill.webp",
    alt: "Image 3",
    width: 400, 
    height: 250,
  },
  {
    id: 4,
    src: "/little-talks.webp",
    alt: "Image 4",
    width: 400, 
    height: 250,
  },
  {
    id: 5,
    src:"/rela-hospital.webp",
    alt:"Image 5",
    width: 400, 
    height: 250,
  },
  {
    id: 6,
    src:"/ace-sports.webp",
    alt:"Image 6",
    width: 400, 
    height: 250,
  },

  {
    id: 7,
    src:"/ags-cinema.webp",
    alt:"Image 7",
    width: 400, 
    height: 250,
  },

  {
    id: 8,
    src:"/anderson-automotive.webp",
    alt:"Image 8",
    width: 400, 
    height: 250,
  },


  {
    id: 9,
    src:"/cadbury.webp",
    alt:"Image 9",
    width: 400, 
    height: 250,
  },

  {
    id: 10,
    src:"/gokul-autotech.webp",
    alt:"Image 10",
    width: 400, 
    height: 250,
  },



];


const ChooseCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <h1 className="text-4xl text-cream relative ml-12 md:ml-28 lg:ml-24" >
        Sponsors
      </h1>
      <div
        className="content flex justify-center overflow-x-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >

        <div className="w-9/12 max-w-70vw p-6"> 
          <Marquee speed={500} pauseOnHover className="flex justify-center items-center">          
            {Images.map((image) => (
              <motion.div
                key={image.id}
                className="border-2  border-white border-opacity-20 shadow-lg text-white rounded-md relative my-0 mx-2"
                variants={imageVariants}
                initial="hidden"
                animate="show"
                
              >
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width} 
                  height={image.height}
                  className={`w-64 h-40 rounded-lg ${isHovered ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300 ease-in-out bg-white`}
                />
              </motion.div>
            ))}
          </Marquee>

        </div>
      </div>
    </>
  );
};


export default ChooseCarousel;
 