"use client"
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";


const Images = [
  {
    id: 1,
    src :'https://raw.githubusercontent.com/jesvijonathan/Takshashila/master/static/sponsors/Group%20298%20(1).webp',
    alt: "Image 1",
  },
  {
    id: 2,
    src:"https://raw.githubusercontent.com/jesvijonathan/Takshashila/master/static/sponsors/Group%20299%20(1)%201.webp",
    alt: "Image 2",
  },
  {
    id: 3,
    src:"https://raw.githubusercontent.com/jesvijonathan/Takshashila/master/static/sponsors/Group%20299sss.webp",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://raw.githubusercontent.com/jesvijonathan/Takshashila/master/static/sponsors/Group%2029add9.webp",
    alt: "Image 4",
  },
  {
    id: 5,
    src:"https://raw.githubusercontent.com/jesvijonathan/Takshashila/master/static/sponsors/Group%2029adfff9.webp",
    alt:"Image 5",
  },

  // Add other image objects
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
      <h1 className="text-4xl font-semibold pb-4 ml-20 text-white relative">
        Sponsors
        <span className="absolute bottom-0 left-0 bg-white bg-opacity-20 h-1 w-11/12 rounded-full border-white"></span>

      </h1>

      <br />
      <div
        className="content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex",
          justifyContent: "center",
          overflowX: "hidden",
          width: "100%",
        }}
      >

        <div style={{ width: "70%", maxWidth: "70vw" }}> {/* Set width to half of the viewport */}
          <Marquee speed={700} pauseOnHover style={{ display: "flex", justifyContent: "center" }}>          
            {Images.map((image) => (
              <motion.div
                key={image.id}
                className="images"
                variants={imageVariants}
                initial="hidden"
                animate="show"
                style={{ margin: "0 10px" }} // for Adjusting margin between images
              >
                
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "400px", // Set width of the image
                    height: "250px", // Set height of the image
                    borderRadius: "15px",
                    opacity: isHovered ? 0.5 : 1,
                    transition: "opacity 0.3s ease",
                  }}
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
