"use client";

import { cn } from "@/libs/utils";
import {
  IconBook,
  IconMasksTheater,
  IconMicrophone2,
  IconRestore,
  IconTool,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
interface prop {
  type:
    | "ALL"
    | "TECHNICAL"
    | "NON-TECHNICAL"
    | "WORKSHOP"
    | "PRO SHOW"
    | "ONLINE EVENT";
}
import { motion } from "framer-motion";

export default function FilterComponent({ type }: prop) {
  return (
    <>
      <section className={cn("  py-4  z-10")}>
        <section className="hidden h-[60px] text-white  text-center text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
          <Link
            href={{ pathname: "", query: { filter: "ALL" } }}
            className={`cursor-pointer transition-all ${type === "ALL" && "border-b-4"}`}
          >
            All
          </Link>
          <Link
            href={{ pathname: "", query: { filter: "TECHNICAL" } }}
            className={`cursor-pointer transition-all ${type === "TECHNICAL" && "border-b-4"}`}
          >
            Technical
          </Link>
          <Link
            href={{ pathname: "", query: { filter: "NON-TECHNICAL" } }}
            className={`cursor-pointer transition-all ${type === "NON-TECHNICAL" && "border-b-4"}`}
          >
            Non-Technical
          </Link>
          <Link
            href={{ pathname: "", query: { filter: "WORKSHOP" } }}
            className={`cursor-pointer transition-all ${type === "WORKSHOP" && "border-b-4"}`}
          >
            Workshops
          </Link>
          <Link
            href={{ pathname: "", query: { filter: "PRO SHOW" } }}
            className={`cursor-pointer transition-all ${type === "PRO SHOW" && "border-b-4"}`}
          >
            Pro-Shows
          </Link>
          <Link
            href={{ pathname: "", query: { filter: "ONLINE EVENT" } }}
            className={`cursor-pointer transition-all ${type === "ONLINE EVENT" && "border-b-4"}`}
          >
            Online
          </Link>
        </section>
      </section>
      <motion.section
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="lg:hidden flex flex-col items-center space-y-1 px-2 py-5 rounded-lg h-fit w-10 backdrop-blur text-cream z-50 fixed top-1/2 -translate-y-1/2 left-5"
      >
        <Link
          href={{ pathname: "", query: { filter: "ALL" } }}
          className={`cursor-pointer transition-all ${type === "ALL" && "rounded-lg bg-cream text-grey"}`}
        >
          <IconRestore size={30} />
        </Link>

        <Link
          href={{ pathname: "", query: { filter: "PRO SHOW" } }}
          className={`cursor-pointer transition-all ${type === "PRO SHOW" && "rounded-lg bg-cream text-grey"}`}
        >
          <IconMicrophone2 size={30} />
        </Link>

        <Link
          href={{ pathname: "", query: { filter: "TECHNICAL" } }}
          className={`cursor-pointer transition-all ${type === "TECHNICAL" && "rounded-lg bg-cream text-grey"}`}
        >
          <IconTool size={30} />
        </Link>

        <Link
          href={{ pathname: "", query: { filter: "NON-TECHNICAL" } }}
          className={`cursor-pointer transition-all ${type === "NON-TECHNICAL" && "rounded-lg bg-cream text-grey"}`}
        >
          <IconMasksTheater size={30} />
        </Link>

        <Link
          href={{ pathname: "", query: { filter: "WORKSHOP" } }}
          className={`cursor-pointer transition-all ${type === "WORKSHOP" && "rounded-lg bg-cream text-grey"}`}
        >
          <IconBook size={30} />
        </Link>

        <Link
          href={{ pathname: "", query: { filter: "ONLINE EVENT" } }}
          className={`cursor-pointer transition-all ${type === "ONLINE EVENT" && "rounded-lg bg-cream text-grey"}`}
        >
          <IconWorld size={30} />
        </Link>
      </motion.section>
    </>
  );
}
