"use client";

import { useProfileButton } from "@/hooks/useProfileButton";
import { cn } from "@/libs/utils";
import { useAuth, useCart } from "@/store";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function ProfileButton() {
  const { menuRef, imgRef, logOut, login, isOpen, setOpen } =
    useProfileButton();
  const { toggleCart } = useCart();
  const { auth } = useAuth((state) => state);
  const router = useRouter()

  return (
    <>
      <section className="relative">
        <section
          onClick={() => {
            setOpen(!isOpen);
          }}
          className=" cursor-pointer"
        >
          <Image
            src={
              auth?.picture ||
              "https://i.pinimg.com/564x/ef/18/a0/ef18a00898e588648883cb370056dc0d.jpg"
            }
            className="rounded-full"
            width={36}
            height={36}
            alt="default-profile"
            ref={imgRef}
          />
        </section>

        <section
          className={cn(
            " bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70",
            "absolute top-12 right-0 rounded-md py-5 text-cream text-center text-sm min-w-52 transition-all",
            !isOpen && "hidden",
          )}
          ref={menuRef}
        >
          {auth === null ? (
            <>
              <h1 className="text-sm pointer-events-none px-3 font-mono hover:bg-cream hover:text-grey">
                Register to continue
              </h1>
              <hr className="my-2" />
              <button
                onClick={() => login()}
                className="rounded-md cursor-pointer bg-[#f0f0f0] p-2 px-3 text-grey hover:bg-cream mr-3"
              >
                Register
              </button>
            </>
          ) : (
            <>
              <h1 className="text-xl cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey">
                {auth.name}
              </h1>
              <h2 className="text-xs cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey">
                {auth.email}
              </h2>

              <hr className="my-2" />

              <ul className="space-y-1">
                <li>
                  <h1
                    onClick={() => toggleCart()}
                    className="block cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey"
                  >
                  Wish List
                  </h1>
                </li>
                <li>
                  <Link
                    className="block cursor-pointer px-3 font-mono hover:bg-slate-200 hover:text-grey"
                    href="/booked-events"
                  >
                    Booked Events
                  </Link>
                </li>
                <button
                  onClick={() => {
                    router.push("/")
                    logOut()
                  }}
                  className=" cursor-pointer bg-red-500 mx-3 py-1 text-cream font-mono hover:bg-red-400 text-center w-1/2 inline-block rounded-sm"
                >
                  Log Out
                </button>
              </ul>
            </>
          )}
        </section>
      </section>
    </>
  );
}
