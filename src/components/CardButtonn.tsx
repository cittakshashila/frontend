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
      
          <div className="flex justify-evenly gap-10">
          <motion.div
            className=""
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-4 " >Phone :</h1>
          
            <br />
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100 sm:rounded-lg md:bg-transparent md:rounded-none transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black w-full sm:w-30 md:w-auto sm:block">. M Gayathrie (Event Queries)</p>
            
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100  sm:rounded-lg md:bg-transparent md:rounded-none  transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black ">. Shyam (Sponsorship Queries),</p>
            
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100  sm:rounded-lg md:bg-transparent md:rounded-none  transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black">. V Akshya Preetha (Pro Shows Queries)</p>
            
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100  sm:rounded-lg md:bg-transparent md:rounded-none  transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black">: BitSpace</p>

          </motion.div>
          <motion.div
            className=" right-10 top-10 hidden sm:block"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            
          >
            
            <h1 className="text-2xl md:font-bold mb-4">Useful Links</h1>
            
            <br />
            <p className="text-sm md:text-xl p-4 hidden">Opening Soon</p>
            <p className="text-sm md:text-xl p-4">Events</p>
            <p className="text-sm md:text-xl p-4">Credits</p>
            <p className="text-sm md:text-xl p-4">Pro Harder</p> 
          </motion.div>
       
       </div> 
      
    </>
  );
};
//absolute left-20 top-20 w-full
//absolute left-14 top-20
//absolute right-14 top-20"
export default CardButton;
