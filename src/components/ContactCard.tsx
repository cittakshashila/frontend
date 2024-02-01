import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export default function ContactCard() {
  return (
    <section className="lg:absolute pt-5 left-14 bottom-10 flex text-cream gap-2">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/cittakshashila/"
        className="hover:text-white"
        aria-label="CIT-Takshashila Instagram"
      >
        <IconBrandInstagram />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/people/CIT-Takshashila/100064056814271/"
        className="hover:text-white"
        aria-label="CIT-Takshashila Facebook"
      >
        <IconBrandFacebook />
      </a>
      <a
        href="https://github.com/cittakshashila"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white"
        aria-label="CIT-Takshashila GitHub"
      >
        <IconBrandGithub />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/cittakshashila"
        className="hover:text-white"
        aria-label="CIT-Takshashila LinkedIn"
      >
        <IconBrandLinkedin />
      </a>
    </section>
  );
}
