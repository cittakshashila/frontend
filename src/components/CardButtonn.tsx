"use client"
import { motion } from "framer-motion";
import { CSSProperties } from "react";
import './app.css'
const CardButton = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  
  return (
    <>
      
          <div className="defaultStyle">
          <motion.div
            className=""
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            
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
          <motion.div
            className=""
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            
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
//absolute left-20 top-20 w-full
//absolute left-14 top-20
//absolute right-14 top-20"
export default CardButton;
