"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <>
      <section className="hidden lg:flex flex-col space-y-2">
        <section className="bg-red-500 min-h-52 rounded-3xl min-w-64 z-10">
        </section>
        <section className="bg-red-500 min-h-52 rounded-3xl min-w-64 z-10">
        </section>
        <section className="bg-red-500 min-h-52 rounded-3xl min-w-64 z-10">
        </section>
      </section>

      <section className="lg:hidden  min-h-56 min-w-72 z-10">
        <Swiper
          slidesPerView={"auto"}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
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
            pauseOnMouseEnter: true
          }}
          modules={[EffectCreative, Autoplay]}
        >
          <SwiperSlide className="min-h-56 rounded-3xl bg-red-500 w-full">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="min-h-56 w-full bg-blue-300 rounded-3xl">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="min-h-56 w-full bg-green-200 rounded-3xl">
            Slide 1
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
