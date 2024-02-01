"use client"
import { motion } from "framer-motion";

const CardButton = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <h1 className="text-4xl font-semibold pb-4 ml-20 text-white relative">
        Location
        <span className="absolute bottom-0 left-0 bg-white h-1 w-11/12 rounded-full"></span>
      </h1>
      <div className="flex justify-center items-center h-screen">
      <div className="w-2/3 h-2/4 bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md">
          <div className="absolute left-20 top-20 w-full"></div>
          <motion.div
            className="absolute left-14 top-20"
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
            className="absolute right-14 top-20"
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
      </div>
    </>
  );
};

export default CardButton;
