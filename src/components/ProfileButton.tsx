"use client";

import { useCartContext } from "@/contexts/CartContext";
import { useProfileButton } from "@/hooks/useProfileButton";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProfileButton() {
  const { menuRef, imgRef, auth, logOut, login, isOpen, setOpen } =
    useProfileButton();
  const { setCartOpen } = useCartContext();

  return (
    <>
      <section className="relative">
        <section
          onClick={() => {
            console.log(auth);
            setOpen(!isOpen);
          }}
          className=" cursor-pointer"
        >
          <Image
            src={auth?.picture ||
              "https://i.pinimg.com/564x/ef/18/a0/ef18a00898e588648883cb370056dc0d.jpg"}
            className="rounded-full"
            width={36}
            height={36}
            alt="default-profile"
            ref={imgRef}
          />
        </section>

        <section
          className={cn(
            "absolute top-12 right-0 bg-slate-100 rounded-md py-2 text-grey text-right text-sm min-w-52 transition-all",
            !isOpen && "hidden",
          )}
          ref={menuRef}
        >
          {auth === null
            ? (
              <>
                <h1 className="text-sm cursor-pointer px-3 font-mono hover:bg-slate-200">
                  Register to continue
                </h1>
                <hr className="my-2" />
                <button
                  onClick={() => login()}
                  className="rounded-md cursor-pointer bg-red-400 p-2 px-3 text-grey hover:bg-red-300 mr-3"
                >
                  Register
                </button>
              </>
            )
            : (
              <>
                <h1 className="text-xl cursor-pointer px-3 font-mono hover:bg-slate-200">
                  {auth.name}
                </h1>
                <h2 className="text-xs cursor-pointer px-3 font-mono hover:bg-slate-200">
                  {auth.email}
                </h2>

                <hr className="my-2" />

                <ul className="space-y-1">
                  <li>
                    <h1
                      onClick={() => setCartOpen(true)}
                      className="block cursor-pointer px-3 font-mono hover:bg-slate-200"
                    >
                      Cart
                    </h1>
                  </li>

                  <li>
                    <Link
                      className="block cursor-pointer px-3 font-mono hover:bg-slate-200"
                      href="/booked-events"
                    >
                      Booked Events
                    </Link>
                  </li>

                  <button
                    onClick={() => logOut()}
                    className=" cursor-pointer bg-gray-900 mx-3 text-cream font-mono hover:bg-gray-950 text-center w-1/2 inline-block rounded-sm"
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
