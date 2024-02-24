import { cn } from "@/libs/utils";
import { Dispatch, SetStateAction } from "react";
interface prop {
    type: "ALL" | "TECHNICAL" | "NON-TECHNICAL" | "WORKSHOP" | "PRO SHOW" | "ONLINE EVENT";
    setFilter: Dispatch<SetStateAction<"ALL" | "TECHNICAL" | "NON-TECHNICAL" | "WORKSHOP" | "PRO SHOW" | "ONLINE EVENT">>;
}

export default function FilterComponent({ setFilter, type }: prop) {
    return (
        <section className={cn("  py-4  z-10")}>
            <section className="hidden h-[60px] text-white  text-center text-3xl lg:flex space-x-5 p-4 items-center justify-center w-full ">
                <h1 onClick={() => setFilter("ALL")} className={`cursor-pointer transition-all ${type === "ALL" && "border-b-4"}`}>
                    All
                </h1>
                <h1 onClick={() => setFilter("TECHNICAL")} className={`cursor-pointer transition-all ${type === "TECHNICAL" && "border-b-4"}`}>
                    Technical
                </h1>
                <h1
                    onClick={() => setFilter("NON-TECHNICAL")} className={`cursor-pointer transition-all ${type === "NON-TECHNICAL" && "border-b-4"}`}>
                    Non-Technical
                </h1>
                <h1 onClick={() => setFilter("WORKSHOP")} className={`cursor-pointer transition-all ${type === "WORKSHOP" && "border-b-4"}`}>
                    Workshops
                </h1>
                <h1 onClick={() => setFilter("PRO SHOW")} className={`cursor-pointer transition-all ${type === "PRO SHOW" && "border-b-4"}`}>
                    Pro-Shows
                </h1>
                <h1
                    onClick={() => setFilter("ONLINE EVENT")} className={`cursor-pointer transition-all ${type === "ONLINE EVENT" && "border-b-4"}`}>
                    Online
                </h1>
            </section>
        </section>
    );
}
