"use client";

import Image from "next/image";
import ProfileButton from "./ProfileButton";
import SubmarkLogo from "@/assets/takshashila-submark-logo.svg";
import CartSheet from "./CartSheet";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <section className="flex items-center justify-between p-4 lg:p-10 fixed bgwhite w-full z-[1000]">
      <section className="min-w-9 lg:w-full h-full inline-block">
        <div className="w-fit">
          <Link href={"/"}>
            <Image
              alt="takshashila-logo"
              width={36}
              height={36}
              src={SubmarkLogo}
            />
          </Link>
        </div>
      </section>

      {pathname === "/" && (
        <section className="flex text-white bg-black bg-opacity-45 backdrop-blur-sm p-2 px-4 rounded-md space-x-3 lg:backdrop-blur-none lg:bg-transparent">
          <a href="#about">
            <h1>About</h1>
          </a>
          <a href="#events">
            <h1>Events</h1>
          </a>
          <a href="#contact">
            <h1>Contact</h1>
          </a>
        </section>
      )}
      <ProfileButton />
      <CartSheet />
    </section>
  );
}
