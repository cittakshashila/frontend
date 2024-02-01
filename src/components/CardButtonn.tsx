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
        <div className="w-2/3 h-2/4 bg-transparent border-2 border-solid border-white border-opacity-20 backdrop-filter backdrop-blur-lg shadow-lg text-white rounded-md relative">
          <motion.div
            className="absolute left-20 top-20 sm:w-38"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <h1 className="text-2xl md:text-5xl font-bold mb-4" >Phone :</h1>
            <br />
            <br />
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100 sm:rounded-lg md:bg-transparent md:rounded-none transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black w-full sm:w-30 md:w-auto sm:block">. M Gayathrie (Event Queries)</p>
            
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100  sm:rounded-lg md:bg-transparent md:rounded-none  transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black ">. Shyam (Sponsorship Queries),</p>
            
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100  sm:rounded-lg md:bg-transparent md:rounded-none  transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black">. V Akshya Preetha (Pro Shows Queries)</p>
            
            <p className="text-lg p-4 rounded-lg sm:bg-zinc-600 bg-opacity-100  sm:rounded-lg md:bg-transparent md:rounded-none  transition-colors duration-300 ease-in-out hover:bg-slate-200 hover:text-black">: BitSpace</p>

          </motion.div>
          <motion.div
            className="fixed right-56 top-20 hidden lg:block md:text-sm"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            
            <h1 className="text-2xl md:font-bold mb-4">Useful Links</h1>
            <br />
            <br />
            <p className="text-sm md:text-xl p-4">Opening Soon</p>
            <p className="text-sm md:text-xl p-4">Events</p>
            <p className="text-sm md:text-xl p-4">Credits</p>
            <p className="text-sm md:text-xl p-4">Pro Harder</p> 
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default CardButton;
