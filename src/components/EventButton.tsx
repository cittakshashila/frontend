import { cn } from "@/libs/utils";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
  classnames: string;
  type?: "fill" | "outline";
}

export default function EventButton({
  children,
  type = "outline",
  classnames,
}: props) {
  return (
    <button
      className={cn(
        `py-1 px-3 rounded-md border ${classnames}`,
        type === "outline"
          ? "text-white border-white hover:text-black hover:bg-white"
          : "text-black  bg-white hover:text-white hover:bg-transparent hover:border-white",
      )}
    >
      {children}
    </button>
  );
}
