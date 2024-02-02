"use client"
import { useState } from 'react';
import { CSSProperties } from 'react';
import './app.css'
import { motion } from "framer-motion";
import Accordion from './accordion';
const ToggleButton = () =>{
   const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
    return (
        <>
            

            {/* <div className="flex justify-center items-center h-screen"> */}
        <div className="defaultStyle" style={{}}>             
                 <div className="" style={{margin:'2%'}}>
                        <Accordion />
                </div> 
                    

            <motion.div
            className=""
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            style={{margin : '5%'}}
          >
            <h1 className="text-4xl font-bold mb-4">Chennai Institute Of Technology</h1>
            <br />
            <br />
            <p className="hidden lg:block">SH-113, Sarathy Nagar,</p>
            <p>Pudupedu Kundrathur,</p>
            <p>Sriperumbudur Main Road,</p>
            <p>Chennai, Tamil Nadu</p>
            <p>PIN: 600069</p>
          </motion.div>
        </div>
            
        </>
    );
};
//"absolute left-20 top-20 w-full
//absolute right-14 top-20

export default ToggleButton;
