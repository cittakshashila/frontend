import { EventDescriptor } from "@/libs/types";
import React from "react";
import Image from "next/image";
import Instagram from '@/assets/instagram_white_48dp.svg'
import Download from '@/assets/downloading_white_48dp.svg'
import ShareLink from '@/assets/share_white_48dp.svg'
import { EventButton } from '@/components'

interface props {
  details: EventDescriptor;
}

const EventDescriptionBox  = ({ details }: props) => {

  const eventDesc: React.CSSProperties = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "contrast(0.85) brightness(0.9) grayscale(0.2) blur(0px)"
  };

  return (
    <section>

      {/* PC/Laptop View */}
      
      <section className="left-14 w-11/12 hidden lg:flex flex-wrap relative flex-row mt-36 bg-lightcharcoal mb-36 items-stretch text-white">

        {/*Left side section*/}
        <section className="flex flex-col flex-wrap w-4/12 bg-black items-stretch justify-around bg-opacity-40">

          <img src={details.event_img} className="w-11/12 mx-auto h-fit"></img>
          <section className="flex flex-row w-11/12 justify-evenly mx-auto">
            <a href="#" className="hover:animate-pulse"><Image alt="Instagram Post" src={Instagram}></Image></a>
            <a href="#" className="hover:animate-pulse"><Image alt="Share Link" src={ShareLink}></Image></a>
            <a href="#" className="hover:animate-pulse"><Image alt="Download" src={Download}></Image></a>
          </section>
          <EventButton classnames="text-2xl w-11/12 mx-auto">Register | {details.event_fees}</EventButton>

        </section>

        {/*Right side section*/}

        <section className="relative flex flex-col flex-wrap w-8/12 justify-stretch">
          <h1 className="text-6xl underline decoration-halfwhite text-center underline-offset-16 pb-4 mt-10">{details.event_name}</h1>
          <h1 className="text-md text-center pb-4">{details.event_tag}</h1>
          <h1 className="relative underline decoration-halfwhite underline-offset-16 font-bold text-3xl left-3 pb-4">Description</h1>
          <h1 className="relative w-11/12 font-light text-xl left-5 pb-4">{details.event_details}</h1>
          <h1 className="relative underline decoration-halfwhite underline-offset-16 font-bold text-3xl left-3 pb-4">Prize</h1>
          <h1 className="relative text-lg left-5 pb-4">Participate and win exciting prizes !</h1>
          <h1 className="relative underline decoration-halfwhite underline-offset-16 font-bold text-3xl left-3 pb-4">Details</h1>
          <h1 className="relative text-lg left-5">Type: {details.event_type}</h1>
          <h1 className="relative text-lg left-5">Date: {details.event_date}</h1>
          <h1 className="relative text-lg left-5 pb-4">Time: {details.event_time}</h1>
          <h1 className="relative underline decoration-halfwhite underline-offset-16 font-bold text-3xl left-3 pb-4">Contact</h1>
          <a href={`mailto:${details.contact_email}`} className="relative text-lg left-5 w-56"><h1>Co-ordinator: {details.contact_name}</h1></a>
          <a href={`mailto:${details.contact_email}`} className="relative text-lg left-5 w-96"><h1>Email: {details.contact_email}</h1></a>
          <a href={`tel:${details.contact_number}`} className="relative text-lg left-5 w-36 pb-10"><h1>Phone: {details.contact_number}</h1></a>
        </section>


      </section>
        
        {/* Mobile View*/}
      <section className="rounded-2xl sm:flex lg:hidden relative flex shrink flex-nowrap flex-col mt-28 mb-20 pt-8 bg-lightcharcoal text-white top-4 overflow-clip">
        <h1 className="text-4xl pb-5 underline decoration-halfwhite text-center underline-offset-16">{details.event_name}</h1>
        <h1 className="text-xs text-center">{details.event_tag}</h1>
        <img src={details.event_img} className="w-80 mx-auto mt-8 pb-12"></img>
        <h1 className="relative top-3/4 underline pb-8 decoration-halfwhite underline-offset-16 font-bold text-2xl left-3">Description</h1>
        <h1 className="relative top-3/4 w-11/12 font-light pb-12 text-sm left-5">{details.event_details}</h1>
        <h1 className="relative top-3/4 underline pb-8 decoration-halfwhite underline-offset-16 font-bold text-2xl left-3">Prize</h1>
        <h1 className="relative pb-12 text-sm left-5">Participate and win exciting prizes !</h1>
        <h1 className="relative top-3/4 underline pb-8 decoration-halfwhite underline-offset-16 font-bold text-2xl left-3">Details</h1>
        <h1 className="relative text-sm left-5">Type: {details.event_type}</h1>
        <h1 className="relative text-sm left-5">Date: {details.event_date}</h1>
        <h1 className="relative text-sm left-5 pb-12">Time: {details.event_time}</h1>
        <h1 className="relative top-3/4 underline pb-8 decoration-halfwhite underline-offset-16 font-bold text-2xl left-3">Contact</h1>
        <a href={`mailto:${details.contact_email}`} className="relative text-sm left-5 w-52"><h1>Co-ordinator: {details.contact_name}</h1></a>
        <a href={`mailto:${details.contact_email}`} className="relative text-sm left-5 w-80"><h1>Email: {details.contact_email}</h1></a>
        <a href={`tel:${details.contact_number}`} className="relative text-sm left-5 pb-12 w-32"><h1>Phone: {details.contact_number}</h1></a>
        <section className="flex flex-wrap flex-row gap-4 w-9/12 justify-center mx-auto pb-12">
          <EventButton classnames="text-sm">Instagram Post</EventButton>
          <EventButton classnames="text-sm">Share Link</EventButton>
          <EventButton classnames="text-sm">Download</EventButton>
        </section>
        <EventButton classnames="mx-auto w-fit text-2xl mb-8">Register | {details.event_fees}</EventButton>
      </section>

    </section>
  );
};

export default EventDescriptionBox;
