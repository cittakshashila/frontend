"use client";

import Image from "next/image";
import ProfileButton from "./ProfileButton";
import SubmarkLogo from "@/assets/takshashila-submark-logo.svg";
import CartSheet from "./CartSheet";

export default function NavBar() {
  return (
    <section className="flex items-center justify-between p-4 lg:p-10 fixed bgwhite w-full z-50">
      <section className="min-w-9 lg:w-full h-full inline-block">
        <Image
          alt="takshashila-logo"
          width={36}
          height={36}
          src={SubmarkLogo}
        ></Image>
      </section>
      <section className="flex text-white bg-black bg-opacity-45 backdrop-blur-sm p-2 px-4 rounded-md space-x-3 lg:backdrop-blur-none lg:bg-transparent">
        <h1>About</h1>
        <h1>Events</h1>
        <h1>Contact</h1>
      </section>
      <ProfileButton />
      <CartSheet />
    </section>
  );
}
