"use client";
import BGPaintSplash from "@/assets/paint-effect-bg.webp";
import {NavBar} from "@/components";
import Image from "next/image";

const Socials = () => {
    return(<div>
        <NavBar/>
        <Image
            src={BGPaintSplash}
            alt="BackGround Photo"
            fill
            className="object-cover min-w-full min-h-full"
        />
    </div>)
}
export default Socials;
