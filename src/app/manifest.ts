import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CIT - Takshashila 2024",
    short_name: "cittakshashila",
    description:
      "Takshashila is an event organized in regards to annual cultural event conducted in Chennai Institute Of Technology.",

    start_url: "/",
    display: "standalone",
    background_color: "#18181b",
    theme_color: "#18181b",
    icons: [
      {
        src: "icons/takshashila-logo-64.png",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "icons/takshashila-logo-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "icons/takshashila-logo-16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "icons/takshashila-submark-logo-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "icons/takshashila-submark-logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "screenshots/Screenshotpor.png",
        type: "image/png",
        sizes: "540x720",
        //@ts-ignore
        form_factor: "narrow",
      },
      {
        src: "screenshots/Screenshotlsc.png",
        type: "image/png",
        sizes: "720x540",
        //@ts-ignore
        form_factor: "wide",
      },
    ],
  };
}
