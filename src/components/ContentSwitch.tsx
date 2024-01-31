"use client"
import ToggleButton from "./ToggleButton";
import CardButton from "./cardButton";
import { useState } from "react";

const ContentSwitcher = () => {
  const [showCardButton, setShowCardButton] = useState(true);

  const toggleContent = () => {
    setShowCardButton(!showCardButton);
  };

  return (
    <>
      <button className="w-12 h-12 rounded-full border border-gray-300 mr-4 transition duration-300 ease-in-out hover:bg-gray-100" onClick={toggleContent}>
        
      </button>
      <button className="w-12 h-12 rounded-full border border-gray-300 mr-4 transition duration-300 ease-in-out hover:bg-gray-100" onClick={toggleContent}>
              </button>
      {showCardButton ? <CardButton /> : <ToggleButton />}
    </>
  );
};

export default ContentSwitcher;
