import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { useState } from "react";
import { motion } from "framer-motion";

interface prop {
  title: string;
  description: string;
  image1: StaticImageData;
  image2: StaticImageData;
  image3: StaticImageData;
  filter:
  | "ALL"
  | "TECHNICAL"
  | "NON-TECHNICAL"
  | "WORKSHOP"
  | "PRO SHOW"
  | "ONLINE EVENT";
  type?: "left" | "right";
}

export default function HomeEventComponent({
  title,
  description,
  image1,
  image2,
  image3,
  filter,
  type = "left",
}: prop) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <motion.section
        className={cn(
          "hidden  lg:flex backdrop-blur-sm w-full h-full min-w-56 rounded-lg overflow-clip",
          type === "left" && "flex-row-reverse",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link
          href={`/events?filter=${filter}`}
          className={cn(
            "flex invisible items-center text-cream text-xl md:visible lg:text-5xl  w-1/2 px-5",
            type === "right" ? "text-right" : "text-left",
          )}
        >
          {title}
        </Link>
        <section className="lg:relative absolute top-0 flex flex-grow  lg:w-0">
          <section className="absolute top-0 flex -space-x-20">
            <motion.section
              initial={{ x: 0, y: 0 }}
              animate={{ x: isHovered ? -250 : 0, y: isHovered ? 250 : 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
            >
              <Image src={image1} alt="image3" />{" "}
            </motion.section>
            <motion.section
              initial={{ x: 0, y: 0 }}
              animate={{ x: isHovered ? 250 : 0, y: isHovered ? -250 : 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
            >
              <Image src={image2} alt="image3" />
            </motion.section>
            <motion.section
              initial={{ x: 0, y: 0 }}
              animate={{ x: isHovered ? -250 : 0, y: isHovered ? 250 : 0 }}
              transition={{ duration: 0.5, type: "tween", delay: 0.1 }}
            >
              <Image src={image3} alt="image3" />
            </motion.section>
          </section>

          <motion.p
            className={cn(
              "flex flex-col justify-center itemscenter text-cream text-[12px] mdtext-lg px-2",
              type === "left" ? "text-right" : "text-left",
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        </section>
      </motion.section>

      <Link
        href={`/events?filter=${filter}`}
        className="flex items-center justify-center border border-cream rounded-md relative p-5 lg:hidden backdrop-blur text-center text-cream h-full w-full overflow-auto"
      >
        <h1 className="text-4xl font-bold text-cream w-full p-1 py2  z-10">
          {title}
        </h1>
      </Link>
    </>
  );
}
