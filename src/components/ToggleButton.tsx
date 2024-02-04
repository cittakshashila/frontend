"use client"
import { motion } from "framer-motion";
import Accordion from './MapCard';

const ToggleButton = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <>
      <section className="flex justify-center flex-wrap md:flex-nowrap flex-row items-center">
        <section className="overflow-x-hidden m-2 min-w-[170px] ">
          <Accordion />
        </section> 

        <motion.section
          className="m-5 flex justify-center flex-col right-4"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <section className="md:p-4" >
          <h1 className="w-full text-[12px] font-bold  mt-2 mb-4 show sm:text-lg  md:text:2xl lg:text-2xl ">Chennai Institute of Technology
          </h1>
          <div className="hidden md:block ">
          <div className="flex flex-col justify-center p-8">
              <p className ="">SH-113, Sarathy Nagar,</p>
              <p className ="">Pudupedu Kundrathur,</p>
              <p className ="">Sriperumbudur Main Road,</p>
              <p className ="">Chennai, Tamil Nadu</p>
              <p className ="">PIN: 600069</p>
          </div>
          </div>
          </section>
        </motion.section>
      </section>
    </>
  );
};

export default ToggleButton;
