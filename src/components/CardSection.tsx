import { motion } from "framer-motion";

const CardButton = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="flex justify-evenly ">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className=""
      >
       
        <ul className="list-disc ml-6">
        <li className="text-4xl font-bold  p-4 m-4 md:text-3xl lg:text-2xl list-none">Phone</li>
            <li className="text-md m-2 lg:text-lg p-2"><a href="/">M Gayathrie (Event Queries)</a></li>
            <li className="text-md m-2 lg:text-lg p-2"><a href="/">Shyam (Sponsorship Queries)</a></li>
            <li className="text-md m-2 lg:text-lg p-2"><a href="/">V Akshya Preetha (Pro Shows Queries)</a></li>
            <li className="text-md m-2 lg:text-lg p-2"><a href =" https://www.bitspace.org.in/">BitSpace</a></li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        className=""
      >
        <h1 className="text-4xl font-bold p-4 mt-4 mr-12 sm:text-md hidden md:block lg:text-2xl pl-24">Useful Links</h1>
        <ul className="list-none flex justify-center flex-col mt-2">
            <li className="text-sm hidden md:block lg:text-lg pl-24 m-2"><a href="/">Opening Soon</a></li>
            <li className="text-sm hidden md:block lg:text-lg pl-24 m-2"><a href="/">Events</a></li>
            <li className="text-sm hidden md:block lg:text-lg pl-24 m-2"><a href="/">Credits</a></li>
            <li className="text-sm hidden md:block lg:text-lg pl-24 m-2"><a href="/">Pro Harder</a></li>
        </ul>
      </motion.section>
    </section>
  );
};

export default CardButton;
