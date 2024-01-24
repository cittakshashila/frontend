import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";
import { oranienbaum, passport, quicksand } from "@/libs/fonts";

export const metadata: Metadata = {
    title: "CIT - Takshashila 2024",
    description:
        "Takshashila, an event organized In regards to annual cultural event conducted in Chennai Institute Of Technology.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${quicksand.variable} ${oranienbaum.variable} ${passport.variable}`}
            >
                <NavBar />
                {children}
            </body>
        </html>
    );
}
