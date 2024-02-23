import React from "react";
import { MEDIA_URL } from "@/libs/utils";
import Image from "next/image";
import { title } from "process";
import { Variants, motion } from "framer-motion";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  date: string;
  category: string;
}

const hoverContainerVarient: Variants = {
  notHovered: { translateY: 100, opacity: 0 },
  hovered: { filter: "grayscale" },
};

const hoverTitleVarient: Variants = {
  notHovered: { y: 0 },
  hovered: { y: -300 },
  ifMobile: { y: -300 },
};

const hoverButtonVarient: Variants = {
  notHovered: { opacity: 0 },
  hovered: { opacity: 1 },
  ifMobile: { opacity: 1 },
};

const hoverSpanVarient: Variants = {
  notHovered: { opacity: 0 },
  hovered: { opacity: 1 },
};

const Card = ({ id, name, date, category }: Props) => {
  return (
    <motion.section
      variants={hoverContainerVarient}
      layout
      initial="notHovered"
      animate={{ translateY: 0, opacity: 1 }}
      whileHover="hovered"
      className="group border-[#D7D7D7] overflow-clip rounded-md border relative h-[550px] flex flex-col p-10 px-2 items-center justify-end"
    >
      <Image
        loading="lazy"
        fill
        src={MEDIA_URL(id, 2)}
        alt={title}
        className="z-[1] group-hover:grayscale group-hover:scale-110 object-center object-cover transition-all"
        sizes=""
      />

      <section className="fade-overlay" />

      <motion.h1
        className="z-[3] inline-flex md:hidden flex-col text-white text-2xl lg:text-4xl text-center font-oranienbaum"
        variants={hoverTitleVarient}
        initial="ifMobile"
      >
        {name} - S
        <motion.span className="text-xs">
          {date} | {category}
        </motion.span>
      </motion.h1>

      <motion.h1
        variants={hoverTitleVarient}
        className="z-[3] hidden md:inline-flex flex-col text-white text-2xl lg:text-4xl text-center font-oranienbaum"
      >
        {name}
        <motion.span variants={hoverSpanVarient} className="text-sm">
          {date} | {category}
        </motion.span>
      </motion.h1>

      <motion.div
        variants={hoverButtonVarient}
        className="z-[3] hidden md:inline-flex "
      >
        <Link
          href={`events/${id}`}
          className="border border-cream p-3 text-grey text-center rounded-md bg-cream "
        >
          Learn More
        </Link>
      </motion.div>
      <motion.div
        variants={hoverButtonVarient}
        initial="ifMobile"
        className="z-[3] md:hidden"
      >
        <Link
          href={`events/${id}`}
          className="border border-cream p-3 text-grey text-center rounded-md bg-cream "
        >
          Learn More
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Card;
