"use client"
import ToggleButton from "./ToggleButton";
import CardButton from "./CardButtonn";
import { useState } from "react";
import { CSSProperties } from "react";
const ContentSwitcher = () => {
  const [showCardButton, setShowCardButton] = useState(true);

  const toggleContent = () => {
    setShowCardButton(!showCardButton);
    console.log("it works")
  };
  const style : CSSProperties = {
    display : "flex",
    flexDirection : "column",
    alignItems : "center"
  }
  return (
    <>
    <h1 className="text-4xl font-semibold pb-4 ml-20 text-white relative">
                Location
                <span className="absolute bottom-0 left-0 bg-white bg-opacity-20 h-1 w-11/12 rounded-full border-white"></span>
    </h1>
    <br/>
    <br />
    <br />
    <div style={style}>
  
 <div className="w-2/3 h-1/5 bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md relative">

    <div className="F" >
            

          {showCardButton ? <ToggleButton /> : <CardButton />}
      <div className="flex justify-center">
      <button className=" left-10 w-8 h-8 rounded-full border border-gray-300 mr-4 transition duration-300 ease-in-out hover:bg-gray-100" onClick={toggleContent}>
        
      </button>
      <button className="w-8 h-8 rounded-full border border-gray-300 mr-4 transition duration-300 ease-in-out hover:bg-gray-100" onClick={toggleContent}>
      </button>
      </div>
    </div>

  </div>
  </div>
  <br/>
    </>
  );
};

export default ContentSwitcher;