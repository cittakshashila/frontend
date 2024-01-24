import { EventDescriptor } from "@/libs/types";
import React from "react";

interface props {
  details: EventDescriptor;
}

const EventDescriptionBox  = ({ details }: props) => {

  const eventDesc: React.CSSProperties = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "contrast(0.85) brightness(0.9) grayscale(0.2) blur(0px)",
    minHeight: "30vw",
  };

  return (
    <div className="relative flex flex-row justify-between mt-[7vw] gap-[3vw] mr-[7vw] bg-[#333333]/[0.22] items-center h-fit text-[#fff] top-[9vh] left-[3.5vw]">
      <div className="relative flex flex-col flex-nowrap w-[26vw] h-[100%] bg-[#00000066] justify-center items-center pt-[2vw] pb-[2vw] m-[0px]">
        <img src={details.event_img} className="h-[20vw] w-[78%] overflow-clip" />
        <div className="justify-center w-[78%] mt-[2vw] flex flex-col">
          <div className="flex flex-row gap-[1vw] mb-[1vw] items-center justify-center mt-0.7vw flex-wrap gap-y-[0.6vw]">
            <a href="#" className=" font-Jura flex items-center justify-center pt-[0.5vw] pr-[1vw] pl-[1vw] pb-[0.5vw] bg-[#1a1a1a6c] text-center text-[0.7vw] rounded-[4px] no-underline text-inherit">
              Instagram Post
            </a>
            <a href="#" className="font-Jura flex items-center justify-center pt-[0.5vw] pr-[1vw] pl-[1vw] pb-[0.5vw] bg-[#1a1a1a6c] text-center text-[0.7vw] rounded-[4px] no-underline text-inherit">
              Share Link
            </a>
            <a href="#" className="font-Jura flex items-center justify-center pt-[0.5vw] pr-[1vw] pl-[1vw] pb-[0.5vw] bg-[#1a1a1a6c] text-center text-[0.7vw] rounded-[4px] no-underline text-inherit">
              Download
            </a>
          </div>
        </div>
        <div className="flex mt-[2vw]">
          <a href="#" className="flex flex-row justify-center items-center w-[100%] text-[1.2vw] font-Jura text-black rounded-[4px] pt-[1vw] pb-[1vw] w-[19vw] gap-[0.4vw] bg-white">
            Register | {details.event_fees}
          </a>
        </div>
      </div>

      {/*Right side div*/}
      <div className="flex flex-col w-[70%] h-[100%] gap-[2.2vw] justify-center">
        <div className="block">
          <div className="flex text-[3vw] pb-[0.2vw] mb-[0.4vw] mt-[2vw] font-Jura font-bold w-fit gap-[2vw] border-b-[2px] border-white/50">
            {details.event_name}
          </div>
          <div className="text-[0.8vw] font-Jura">
            {details.event_tag}
          </div>
        </div>

        <div className="block">
          <div className="flex text-[1.1vw] pb-[0.5vw] mb-[1vw] mt-[1vw] border-b-[2px] border-white/50 font-Jura w-fit gap-[2vw] font-bold">
            Description
          </div>
          <div className="text-[0.8vw] w-[96%] font-Jura font-bold">
            {details.event_details}
          </div>
        </div>

        <div className="block">
          <div className="flex flex-row w-[95%] h-[6vw] items-center justify-evenly content-around">
            <div className="flex flex-col justify-center h-[100%] w-[100%]">
              <div className="flex text-[1.1vw] pb-[0.5vw] mb-[1vw] mt-[1vw] font-Jura font-bold w-fit border-b-[2px] border-white/50 gap-[2vw]">
                Prize
              </div>
              <div className="flex flex-col flex-nowrap items-start gap-[0.2vw] justify-center text-[0.8vw] font-Jura" >
                <div>Participate and win exciting prizes !</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
              </div>
            </div>

            <div className="flex flex-col justify-center h-[100%] w-[100%] ">
              <div className="flex text-[1.1vw] pb-[0.5vw] mb-[1vw] mt-[1vw] w-fit gap-[2vw] border-b-[2px] border-white/50 font-Jura font-bold">
                Details
              </div>
              <div className="flex flex-col flex-nowrap items-start gap-[0.2vw] justify-center text-[0.8vw] font-Jura">
                <div>Type: {details.event_type}</div>
                <div>Date: {details.event_date}</div>
                <div>Time: {details.event_time}</div>
              </div>
            </div>

            <div className="flex flex-col justify-center h-[100%] w-[100%]">
              <div className="text-[1.1vw] pb-[0.5vw] mb-[1vw] mt-[1vw] font-Jura font-bold w-fit gap-[2vw] border-b-[2px] border-white/50">
                Contact
              </div>
              <div className="flex flex-col flex-nowrap items-start gap-[0.2vw] justify-center text-[0.8vw] font-Jura">
                <div className="no-underline text-inherit font-Jura">
                  <a href={`mailto:${details.contact_email}`}>Co-ordinator : {details.contact_name}</a>
                </div>

                <div className="no-underline text-inherit font-Jura">
                  <a href={`mailto:${details.contact_email}`}>Email : {details.contact_email}</a>
                </div>

                <div className="no-underline text-inherit font-Jura">
                  <a href={`tel:${details.contact_number}`}>Phone : {details.contact_number}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDescriptionBox;
