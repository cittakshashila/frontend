"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
  return (
    <>
      <section className="hidden lg:flex flex-col space-y-4">

      <section className="image-container box-1 h-52 rounded-3xl min-w-72  relative z-10 ">
        <img className="w-28 h-44 absolute bottom-0 inset-x-20" src="/mirchisiva.png" alt="First Image"  />
        <img className=" h-full w-full  object-cover absolute top-0 left-0 z-[-1]" src="/mirichisiva-bg.png" alt="Second Image"  />
     </section>

     <section className="image-container box-2 h-52 rounded-3xl min-w-72 relative z-10 ">
        <img className="w-32 h-44 absolute bottom-0 left-14" src="/soori.png" alt="First Image" />
        <img className=" h-full w-full  object-cover  absolute top-0 left-0 z-[-1]" src="/soori-bg.png" alt="Second Image"  />
     </section>
     
       
     <section className="image-container box-3 h-52 rounded-3xl min-w-72 relative z-10 mt-5">
        <img className="w-32 h-44 absolute bottom-0 left-14 " src="/tbridge.png" alt="First Image" />
        <img className=" h-full w-full object-cover absolute top-0 left-0 z-[-1]" src="/tbridge-bg.png" alt="Second Image"    />
     </section>

      </section>

      <section className="lg:hidden  min-h-52 min-w-72 z-10 m-5 text-center">
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
          <SwiperSlide className="h-62 w-full rounded-3xl ">
              <img className="w-64" src="/mirchisiva-slider.png" alt="Second Image"  />
          </SwiperSlide>
          <SwiperSlide className="h-62 w-full rounded-3xl">
              <img className="w-64" src="/soori-slider.png" alt="Second Image"  />
          </SwiperSlide>
          <SwiperSlide className="h-62 w-full rounded-3xl">
              <img className="h-[100%] w-64" src="/tbridge-slider.png" alt="Second Image"  />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Carousel;
