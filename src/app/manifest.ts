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
        src: "favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
      },
      {
        src: "icons/takshashila-submark-logo-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/takshashila-submark-logo-192.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
