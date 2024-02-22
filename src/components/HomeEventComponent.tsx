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
  type?: "left" | "right";
}

export default function HomeEventComponent({
  title,
  description,
  image1,
  image2,
  image3,
  type = "left",
}: prop) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.section
      className={cn(
        "lg:flex backdrop-blur-sm w-full h-full min-w-56 rounded-lg overflow-clip",
        type === "left" && "flex-row-reverse",
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className={cn(
          "flex invisible items-center text-cream text-xl md:visible lg:text-[85px] w-1/2 px-5",
          type === "right" ? "text-right" : "text-left",
        )}
      >
        {title}
      </h1>
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

          <span>
            <Link
              href={"/events"}
              className="text-grey bg-cream p-1 rounded-md px-5"
            >
              Learn More
            </Link>
          </span>
        </motion.p>

        <h1 className="absolute text-cream sm:text-[50px] md:hidden lg:text-[85px] px-5">
          {title}
        </h1>
      </section>
    </motion.section>
  );
}
