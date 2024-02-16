import type { Metadata, Viewport } from "next";
import "./globals.css";
import { georgia, oranienbaum, passport } from "@/libs/fonts";
import { CLIENT_ID, isTeaser } from "@/libs/utils";
import { Teaser } from "@/components";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const viewport: Viewport = {
  themeColor: "#18181B",
};
export const metadata: Metadata = {
  title: "CIT - Takshashila 2024",
  description:
    "Takshashila, an event organized In regards to annual cultural event conducted in Chennai Institute Of Technology.",
  keywords:
    "TAKSHASHILA, CULTURAL, CIT, CHENNAI, SYMPOSIUM, EVENT, COLLEGE, COMPETITION, INSTITUTE, TECHNOLOGY, DESIGN",
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
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <html lang="en">
        <head>
          <meta name="revised" content="31/01/2024" />
          <meta name="thumbnail" content="/thumbnail.png" />
        </head>
        <body
          className={`${georgia.variable} ${oranienbaum.variable} ${passport.variable}`}
        >
          {isTeaser ? <Teaser /> : children}
        </body>
      </html>
    </GoogleOAuthProvider>
  );
}
