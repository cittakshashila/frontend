"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";

import {
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  IMG7,
  IMG8,
  IMG9,
  IMG10,
  IMG11,
  IMG12,
  IMG13,
  IMG14,
  IMG15,
  IMG16,
  IMG17,
  IMG18,
} from "@/assets/hero";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  const textCarousel = [
    "Around the world",
    "Во всем мире",
    "পৃথিৱীৰ চাৰিওফালে",
    "Ամբողջ աշխարհում",
    "حول العالم",
    "በዓለም ዙሪያ",
  ];

  return (
    <>
      <section className="h-screen flex space-x-0  md:space-x-[10px] absolute w-[250px] md:w-[350px] xl:w-[500px] left-0 right-0 mx-auto z-0">
        <motion.section
          className="h-full w-full"
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            loop={true}
            allowTouchMove={false}
            slidesPerView={"auto"}
            direction="vertical"
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
            className="h-full w-full"
          >
            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG1}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG2}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG3}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG4}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG5}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG6}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </motion.section>
        <motion.section
          className="h-full w-full"
          initial={{ y: 1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            slidesPerView={"auto"}
            allowTouchMove={false}
            direction="vertical"
            className="h-full w-full"
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000, reverseDirection: true }}
            modules={[Autoplay]}
          >
            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG7}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG8}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG8}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG9}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG10}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG11}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG12}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>
            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG13}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </motion.section>
        <motion.section
          className="h-full w-full"
          initial={{ y: -1000 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
        >
          <Swiper
            allowTouchMove={false}
            loop={true}
            slidesPerView={"auto"}
            direction="vertical"
            className="h-full w-full"
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            modules={[Autoplay]}
          >
            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG14}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG15}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG16}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG17}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>

            <SwiperSlide className="relative bg-grey">
              <Image
                className="h-screen -z-20 bg-[#272727]"
                alt="bg"
                src={IMG18}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </motion.section>
      </section>

      <section className="pointer-events-none absolute left-0 right-0 mx-auto z-10 w-fit bottom-28">
        <Swiper
          loop={true}
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={"auto"}
          direction="vertical"
          autoplay={{ delay: 3000 }}
          effect="fade"
          allowTouchMove={false}
          modules={[Autoplay, EffectFade]}
          className="text-white text-center text-3xl h-10"
        >
          {textCarousel.map((text) => (
            <SwiperSlide key={text}>
              <h1>{text}</h1>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
