"use client";

import TakshashilaSubmark from "@/assets/takshashila-submark-logo.svg";
import { cn } from "@/libs/utils";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import { useState } from "react";
import ProfileButton from "./ProfileButton";
import CartSheet from "./CartSheet";

const NavBar = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleHamburger = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-16 fixed z-[999] w-full p-8 pt-16 md:p-20">
        <CartSheet />
        <a href="#hero">
          <Image
            width={48}
            height={48}
            alt="takshashila-submark-logo"
            src={TakshashilaSubmark}
          />
        </a>

        <section
          className={cn(
            " text-white text-xl text-center font-bold backdrop-blur absolute left-0 pt-24 pb-5 rounded-b-3xl shadow z-40 w-full duration-500 md:static md:p-0 md:flex md:items-center md:w-auto md:gap-5 md:shadow-none md:backdrop-blur-0",
            isOpen ? "top-0" : "-top-48",
          )}
        >
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Events</h1>
          <ProfileButton />
        </section>

        <section
          onClick={handleHamburger}
          className="text-white cursor-pointer md:hidden"
        >
          {isOpen ? <IconX size={40} /> : <IconMenu2 size={40} />}
        </section>
      </nav>
    </>
  );
};

export default NavBar;
