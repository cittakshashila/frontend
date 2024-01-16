import Image from "next/image";
import TakshashilaTextLogo from "@/assets/takshashila-text.svg";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";

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
    </main>
  );
}
