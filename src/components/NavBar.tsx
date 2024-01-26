"use client"
import { motion } from "framer-motion";
import TakshashilaSubmark from "@/assets/takshashila-submark-logo.png";
import { cn } from "@/libs/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import YearBanner from "@/assets/2024-year-banner.png";
const tabs = ["Home", "CIT", "TAKSHASHILA"];

const NavBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  const handleHamburger = () => {
    setOpen(!isOpen);
  };

  const handleTabSelection = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, duration: 4}}
      className="flex justify-between items-center h-16 fixed z-50 w-full p-8 pt-16 md:p-20"
    >
      <Image
        width={48}
        height={48}
        alt="takshashila-submark-logo"
        src={TakshashilaSubmark}
      />
       <Image
                    alt="year"
                    src={YearBanner}
                    width={100}
                    height={100}
                    className="absolute top-20 right-10 w-20 lg:w-28 lg:top-28 lg:right-14"
                />
                <div className="flex items-center justify-between">
                  

                </div>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={cn(
          "hidden text-white text-xl text-center font-bold backdrop-blur absolute left-0 pt-24 pb-5 rounded-b-3xl shadow -z-20 w-full duration-500 md:static md:p-0 md:flex md:w-auto md:gap-5 md:shadow-none md:backdrop-blur-0",
          isOpen ? "top-0" : "-top-48",
        )}
      >
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selectedTab === tab}
            setSelected={handleTabSelection}
            key={tab}
          />
        ))}
      </motion.section>

      <motion.section
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleHamburger}
        className="text-white cursor-pointer hidden"
      >
        {isOpen ? <IconX size={40} /> : <IconMenu2 size={40} />}
      </motion.section>
    </motion.nav>
  );
};

const Chip = ({
  text,
  selected,
  setSelected,
}: {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

export default NavBar;
