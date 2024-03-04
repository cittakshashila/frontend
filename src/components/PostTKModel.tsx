"use client";
import { useState } from "react";
import ConfettiComponent from "./ConfettiComponent";
import { cn } from "@/libs/utils";
import { motion, AnimatePresence } from "framer-motion";
export default function PostTKModel() {
  const [isHidden, setHidden] = useState<boolean>(false);

  setTimeout(() => {
    setHidden(true);
  }, 5000);

  return (
    <AnimatePresence initial={true}>
      {!isHidden && (
        <>
          <motion.section
            className={cn(
              "w-full h-screen z-[999] bg-black bg-opacity-50 fixed",
            )}
            onClick={() => setHidden(true)}
          >
            <ConfettiComponent />
            <motion.section
              className="p-8 select-none flex flex-col items-center justify-center bg-white rounded-xl drop-shadow-md w-[320px] xl:w-[500px] h-72 absolute mx-auto my-auto top-0 bottom-0 left-0 right-0"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
            >
              <h1 className="text-4xl text-center">
                Thank you for love and support ❤️
              </h1>
              <h1 className="text-xl text-center pt-6">
                Meet you next year 🎉{" "}
              </h1>
            </motion.section>
          </motion.section>
        </>
      )}
    </AnimatePresence>
  );
}
