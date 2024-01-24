"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { useState } from "react";

const ImageContainer = (
  { fg, bg, name }: { fg: string; bg: string; name: string },
) => {
  const [N, sN] = useState<boolean>(false);
  const leftPos = name === "Thaikudam Bridge" ? "20%" : "30%";
  return (
    <div className="relative">
      {N && (
        <div
          style={{ left: `${leftPos}` }}
          className={`hidden md:block pointer-events-none z-[100] font-quicksand absolute w-fit px-2 top-[80%] text-white bg-black bg-opacity-45`}
        >
          {name}
        </div>
      )}
      <div
        onMouseEnter={() => sN(true)}
        onMouseLeave={() => sN(false)}
        className="image-container scale-x-125 box-1 h-52 rounded-3xl min-w-72 relative z-10 "
      >
        <img
          className="w-28 h-44 absolute bottom-0 inset-x-20"
          src={`${fg}.png`}
          alt="First Image"
        />
        <img
          className=" h-full w-full absolute top-0 left-0 z-[-1]"
          src={`${bg}.png`}
          alt="Second Image"
        />
      </div>
    </div>
  );
};

const Carousel = () => {
  return (
    <>
      <section className="hidden lg:flex flex-col space-y-4">
        <ImageContainer
          name="Thaikudam Bridge"
          fg="/tbridge"
          bg="/tbridge-bg"
        />
        <ImageContainer name="Actor Soori" fg="/soori" bg="/soori-bg" />
        <ImageContainer
          name="Mirchi Siva"
          fg="/mirchisiva"
          bg="/mirichisiva-bg"
        />
      </section>

      <section className="lg:hidden min-h-52 min-w-72 z-10 m-5 text-center">
        <Swiper
          slidesPerView={"auto"}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[EffectCreative, Autoplay]}
        >
          <SwiperSlide className="min-h-62 w-full rounded-3xl">
            <ImageContainer
              name="thaikudam Bridge"
              fg="/tbridge"
              bg="/tbridge-bg"
            />
          </SwiperSlide>
          <SwiperSlide className="min-h-62 w-full rounded-3xl">
            <ImageContainer name="Actor Soori" fg="/soori" bg="/soori-bg" />
          </SwiperSlide>
          <SwiperSlide className="min-h-62 w-full rounded-3xl ">
            <ImageContainer
              name="Mirchi Siva"
              fg="/mirchisiva"
              bg="/mirichisiva-bg"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
