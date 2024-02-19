import { cn } from "@/libs/utils";
import { Dispatch, SetStateAction, use, useState } from "react";
interface prop {
  isBackdrop: boolean;
  setFilter: Dispatch<SetStateAction<string>>;
}

export default function FilterComponent({ isBackdrop, setFilter }: prop) {
  return (
    <section
      className={cn(
        "  py-4  z-10",
        isBackdrop && "backdrop-blur",
      )}
    >
      <section className="hidden h-[60px] text-white  text-center text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
        <h1 onClick={() => setFilter("ALL")} className="cursor-pointer">
          All
        </h1>
        <h1 onClick={() => setFilter("TECHNICAL")} className="cursor-pointer">
          Technical
        </h1>
        <h1
          onClick={() => setFilter("NON-TECHNICAL")}
          className="cursor-pointer"
        >
          Non-Technical
        </h1>
        <h1 onClick={() => setFilter("WORKSHOP")} className="cursor-pointer">
          Workshops
        </h1>
        <h1 onClick={() => setFilter("PRO SHOW")} className="cursor-pointer">
          Pro-Shows
        </h1>
        <h1
          onClick={() => setFilter("ONLINE EVENT")}
          className="cursor-pointer"
        >
          Online
        </h1>
      </section>
    </section>
  );
}
