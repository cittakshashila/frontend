import Image from "next/image";
import TakshashilaTextLogo from "@/assets/takshashila-text.svg";
import AboutUsImage from "@/assets/about-us-stacked-image.webp";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200">
      <section className="relative flex items-center justify-center md:justify-end h-screen p-10 md:p-24 lg:p-48">
        <Image
          alt="TK-logo"
          width={500}
          height={90}
          src={TakshashilaTextLogo}
          className="w-full max-w-[550px]"
        />
        <section className="flex items-center absolute bottom-10 gap-3 md:left-24">
          <a href="https://www.instagram.com/cittakshashila/">
            <IconBrandInstagram className="cursor-pointer text-[#CBC9C8] hover:text-[#f0f0f0]" />
          </a>
          <a href="https://www.facebook.com/people/CIT-Takshashila/100064056814271/">
            <IconBrandFacebook className="cursor-pointer text-[#CBC9C8] hover:text-[#f0f0f0]" />
          </a>

          <a href="https://www.linkedin.com/in/cittakshashila">
            <IconBrandLinkedin className="cursor-pointer text-[#CBC9C8] hover:text-[#f0f0f0]" />
          </a>
          <a href="mailto:takshashila@citchennai.net">
            <IconMail className="cursor-pointer text-[#CBC9C8] hover:text-[#f0f0f0]" />
          </a>
          <a href="tel:+919361100381">
            <IconPhone className="cursor-pointer text-[#CBC9C8] hover:text-[#f0f0f0]" />
          </a>
        </section>
      </section>

      <section className="overflow-hidden w-full flex flex-col relative items-start gap-8 p-10 backdrop-blur bg-[#00000033] md:p-24">
        <Image
          className="hidden lg:block w-1/2 min-w-[450px] max-w-[800px] absolute -right-14 top-16 grayscale hover:grayscale-0"
          alt="about-us-stacked-image"
          src={AboutUsImage}
        />
        <h1 className="text-3xl text-[#CBC9C8]">About CIT</h1>
        <hr className="text-[#CBC9C8] h-[1px] w-full md:hidden" />
        <p className="text-[#CBC9C8] text-xs md:text-sm lg:w-1/2">
          A prominent institution ranking amongst the top colleges in Tamil
          Nadu, was established with an initiative to provide pragmatic
          learning. The institution has also partnered with a number of
          companies to set a worldwide standard by offering students a diverse
          range of possibilities that combine education and recreation. &nbsp;
          <br />
          <br />
          The students' appetite for knowledge makes them thrive to prepare for
          the ready-to-serve industrial requirements. This is delivered by CIT
          through professional ethics which is sated by frequent guest lectures
          by professionals from various industries and academic backgrounds.
          Chennai Institute of Technology has been awarded the National Award of
          Excellence for Best Placements & has been ranked Second in Tamil Nadu.
          Our college has made dreams of thousands of students come true
          <br />
          <br />
          "Our objective for establishing CIT is to transfer our knowledge to
          you, so that you can tranform into a proper engineer"
          <br />
          <br />
          <span className="font-bold italic text-xs">
            ~Shri Sriram Parthasarathy
          </span>
        </p>
        <section className="flex gap-2">
          <Button>Latest</Button>
          <Button>Website</Button>
          <Button>More</Button>
        </section>
      </section>
    </main>
  );
}
