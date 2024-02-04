"use client";
import ToggleButton from "./ToggleButton";
import CardButton from "./CardSection";
import { useState } from "react";

const ContentSwitcher = () => {
  const [b1, setB1] = useState(true);
  const [b2, setB2] = useState(false);

  return (
    <>
    <section >
    <h1 className="text-4xl m-4 text-cream relative ml-12 md:ml-28 lg:ml-24" >
        Location
      </h1>
      </section>
      <section className="flex justify-center items-center p-6">
        <section className="md:w-[80%] w-[80%] h-1/5 bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md relative">
          <section className="m-10">
            {b1 && <ToggleButton />}
            {b2 && <CardButton />}
            <section className="flex justify-center m-4">
              <button className="left-10 w-4 h-4 top-10 rounded-full border border-gray-300 mr-4 transition duration-300 ease-in-out hover:bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:ring-gray-300" onClick={() => {setB1(true); setB2(false);}}>
              </button>
              <button className="w-4 h-4 rounded-full border border-gray-300 mr-4 transition duration-300 ease-in-out hover:bg-gray-100 focus:bg-white focus:outline-none focus:ring focus:ring-gray-300" onClick={() => {setB2(true); setB1(false);}}>
              </button>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default ContentSwitcher;
