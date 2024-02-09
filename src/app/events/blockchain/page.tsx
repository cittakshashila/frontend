import EventDescriptionBox from "@/components/EventDescriptionBox";
import { EventDescriptor } from "@/libs/types";

export default function BlockChain() {
  const array: EventDescriptor[] = [{
    event_name: "Block Chain",
    event_date: "31 March 2023",
    event_details:
      "Blockchain technology is used in various industries, from banking to healthcare. This workshop is designed for individuals who want to learn about the various potential applications and the underlying mechanisms of blockchains. Participants will explore various use cases for blockchain technology, including supply chain management, identity verification, and more. Join us for an interactive workshop to learn more about blockchain.",
    event_fees: "₹200",
    event_tag: "Secure and decentralized record keeping with blockchain",
    event_time: "8:00 AM",
    event_type: "Workshops",
    event_img: "/block-chain.webp",
    contact_email: "harshavardhanr.aids2020@citchennai.net",
    contact_name: "Harshavardhan R",
    contact_number: "6380529077",
  }];

  return (
    <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200 backdrop-blur-xl ">
      <EventDescriptionBox details={array[0]} />
    </main>
  );
}
