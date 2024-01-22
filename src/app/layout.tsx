"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import jos from "jos-animation";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { use, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// Had to comment below code because of error | metadata is not defined
// export const metadata: Metadata = {
//   title: "CIT - Takshashila 2024",
//   description:
//     "Takshashila, an event organized In regards to annual cultural event conducted in Chennai Institute Of Technology.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jos_options = {
    debugMode: false, // turn this off in production
    passive: false,
    animation: "fade",
    duration: 0.5,
    rootMargin: "0% 0% 30% 0%",
  };

  useEffect(() => {
    jos.init(jos_options);
    jos.version(); // returns the version of the library
  }, []);

  useEffect(() => {
    jos.refresh();
  });

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
