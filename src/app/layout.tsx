import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components";
import { georgia, oranienbaum, passport } from "@/libs/fonts";
import { title } from "process";

export const metadata: Metadata = {
  title: "CIT - Takshashila 2024",
  description:
    "Takshashila, an event organized In regards to annual cultural event conducted in Chennai Institute Of Technology.",
  keywords:
    "TAKSHASHILA, CULTURAL, CIT, CHENNAI, SYMPOSIUM, EVENT, COLLEGE, COMPETITION, INSTITUTE, TECHNOLOGY, DESIGN",
  themeColor: "#272727",
  openGraph: {
    title: "CIT - TAKSHASHILA 2024",
    description:
      "Takshashila, an event organized In regards to cultural event conducted in Chennai Institute Of Technology.",
    type: "website",
    url: "https://www.cittakshashila.in/",
    siteName: "CIT - TAKSHASHILA 2024",
    images: ["/thumbnail.png"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cittakshashila",
  },
  robots: "all",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="revised" content="31/01/2024" />
        <meta name="thumbnail" content="~/thumbnail.png" />
      </head>
      <body
        className={`${georgia.variable} ${oranienbaum.variable} ${passport.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
