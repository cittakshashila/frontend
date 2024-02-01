"use client"
import { useState } from 'react';
import ContentSwitcher from './ContentSwitch';
import Accordion from './accordion';
const ToggleButton = () =>{
    return (
        <>
            <h1 className="text-4xl font-semibold pb-4 ml-20 text-white relative">
                Location
                <span className="absolute bottom-0 left-0 bg-white h-1 w-11/12 rounded-full"></span>
            </h1>

            <div className="flex justify-center items-center h-screen">
                <div className="w-2/3 h-2/4 bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md relative">
                    
                <div className="absolute left-20 top-20 w-full">
                        <Accordion />
                    </div>


                    <div className="absolute right-14 top-20">
                        <h1 className="text-4xl font-bold mb-4">Chennai Institute Of Technology</h1>
                        <br />
                        <br />
                        <p className="hidden lg:block">SH-113, Sarathy Nagar,</p>
                        <p>Pudupedu Kundrathur,</p>
                        <p>Sriperumbudur Main Road,</p>
                        <p>Chennai, Tamil Nadu</p>
                        <p>PIN: 600069</p>
                       
                    </div>
                </div>
            </div>
        </>
    )
};


export default ToggleButton;
