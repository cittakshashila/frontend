import Image from "next/image";
import TakshashilaPrimaryLogo from "@/assets/takshashila-primary-logo.png";
import TakshashilaSecondaryLogo from "@/assets/takshashila-secondary-logo.svg";
import AboutUsImage from "@/assets/about-us-stacked-image.webp";
import AboutCITSideTKLogo from "@/assets/about-cit-side-prop-tklogo.png";
import YearBanner from "@/assets/2024-year-banner.png";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Button from "@/components/Button";
import { isTeaser } from "@/libs/utils";

export default function Home() {
  if (isTeaser) {
    return (
      <main className="bg-paint-effect bg-cover bg-center  min-h-screen bg-[#272727]">
        <section className="relative w-full  h-screen bg-world-map bg-cover bg-center flex flex-col items-center justify-center p-5 md:p-24 lg:p-72">
          <Image
            alt="year"
            src={YearBanner}
            width={100}
            height={100}
            className="absolute top-20 right-10 w-20 lg:w-28 lg:top-28 lg:right-14"
          />
          <Image
            alt="takshashila-logo"
            src={TakshashilaPrimaryLogo}
            width={1000}
            height={300}
          />
          <h1 className="absolute bottom-24 font-mono text-base text-[#CBC9C8] lg:text-xl">
            BOARDING STARTS SOON...
          </h1>
        </section>

        <section className="overflow-clip relative bg-cit-crowd bg-opacity-75 bg-blend-overlay bg-[#272727] bg-right text-white min-h-screen w-full flex flex-col justify-center p-10 md:p-24">
          <h1 className="text-3xl font-semibold pb-4">About CIT</h1>
          <p className="z-10 text-base w-full md:max-w-3xl">
            A prominent institution ranking amongst the top colleges in Tamil
            Nadu, was established with an initiative to provide pragmatic
            learning. The institution has also partnered with a number of
            companies to set a worldwide standard by offering students a diverse
            range of possibilities that combine education and recreation. The
            students' appetite for knowledge makes them thrive to prepare for
            the ready-to-serve industrial requirements. This is delivered by CIT
            through professional ethics which is sated by frequent guest
            lectures by professionals from various industries and academic
            backgrounds. Chennai Institute of Technology has been awarded the
            National Award of Excellence for Best Placements & has been ranked
            Second in Tamil Nadu. Our college has made dreams of thousands of
            students come true
            <br />
            <br />
            <span className="">
              &quot;Our objective for establishing CIT is to transfer our
              knowledge to you, so that you can tranform into a proper
              engineer&quot;
            </span>
            <br />
            <br />
            <span>– Shri Sriram Parthasarathy</span>
          </p>
          <Image
            src={AboutCITSideTKLogo}
            alt="side-image"
            className="hidden md:block absolute right-0 rotate-[30deg] "
          />
        </section>

        <section className="relative bg-thai-kudam-bridge bg-right overflow-hidden bg-opacity-75 bg-blend-overlay bg-[#272727] text-white min-h-screen w-full flex flex-col justify-center p-10 md:p-24">
          <h1 className="text-3xl font-semibold pb-4">About Takshashila</h1>
          <p className="z-10 text-base w-full md:max-w-3xl">
            The grand Annual Cultural Fiesta Of Chennai Institute Of Technology
            is an eminent spectacle that gives the student community a platform
            to showcase their talents and sculpt their skills.This memorable
            occasion is a perfect fusion of entertainment and knowledge-filled
            atmosphere with a potpourri of genres that escalate the vibrance of
            celebration.The event inculcates a blend of virtues among the
            students which makes them shine out of the crowd.This time,
            Takshashila’s global fusion will be an exhilarating experience ,full
            of adventures that are fished straight out of the ocean.
            <br />
            <br />
            The genesis of the "Around the World" theme for Takshashila 2024
            springs from our legacy as a cradle of multifaceted talents and
            cultural rendezvous. The theme "Around the World" mirrors
            Takshashila's commitment to transcending boundaries, fostering an
            environment to converge and exchange ideas, revel in diversity, and
            also showcase their talents.The tagline "A Global Fusion"
            encapsulates the spirit of blending cultural nuances, technological
            breakthroughs, and artistic marvels, creating an intricate mosaic
            that mirrors the interconnectedness of our World .
          </p>
          <Image
            src={AboutCITSideTKLogo}
            alt="side-image"
            className="hidden md:block absolute -top-80 right-0 rotate-[30deg] "
          />
        </section>
      </main>
    );
  }
  return (
    <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200">
      <section className="relative flex items-center justify-center md:justify-end h-screen p-10 md:p-24 lg:p-48">
        <Image
          alt="TK-logo"
          width={500}
          height={90}
          src={TakshashilaSecondaryLogo}
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

      <section className="backdrop-blur bg-[#00000055] ">
        <section className="overflow-x-clip w-full flex flex-col relative items-start gap-8 p-10 md:p-24">
          <Image
            className="hidden z-10 lg:block w-1/2 min-w-[450px] max-w-[800px] absolute -right-14 top-16 grayscale hover:grayscale-0"
            alt="about-us-stacked-image"
            src={AboutUsImage}
          />
          <h1 className="text-3xl text-[#CBC9C8]">About CIT</h1>
          <hr className="text-[#CBC9C8] h-[1px] w-full md:hidden" />
          <p className="text-[#CBC9C8] text-xs md:text-base lg:w-1/2">
            A prominent institution ranking amongst the top colleges in Tamil
            Nadu, was established with an initiative to provide pragmatic
            learning. The institution has also partnered with a number of
            companies to set a worldwide standard by offering students a diverse
            range of possibilities that combine education and recreation. &nbsp;
            <br />
            <br />
            The students' appetite for knowledge makes them thrive to prepare
            for the ready-to-serve industrial requirements. This is delivered by
            CIT through professional ethics which is sated by frequent guest
            lectures by professionals from various industries and academic
            backgrounds. Chennai Institute of Technology has been awarded the
            National Award of Excellence for Best Placements & has been ranked
            Second in Tamil Nadu. Our college has made dreams of thousands of
            students come true
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

        <section className="w-full flex flex-col relative items-start gap-8 p-10 md:p-24">
          <h1 className="text-3xl text-[#CBC9C8]">About Takshashila</h1>
          <p className="text-[#CBC9C8] text-xs md:text-base lg:w-[65%]">
            The Grand Annual Cultural Fiesta of Chennai Institute Of Technology
            is an eminent spectacle that gives the student community a platform
            to showcase their talents and sculpt their skills. This memorable
            occasion is a perfect fusion of entertainment and knowledge-filled
            atmosphere with a potpourri of genres that escalate the vibrance of
            celebration. The event inculcates a blend of virtues among the
            students which makes them shine out of the crowd. This time,
            Takshashila's voyage will be an exhilarating one, full of adventures
            that are fished straight out of the ocean.
          </p>
          <p className="text-[#CBC9C8] text-xs md:text-lg w-full">
            The Great Indian cinema is a fascinating theme that sheds light on
            Indian culture and society. It has been a beacon of hope for over
            100 years, providing an escape from reality for us. This year,
            Takshashila celebrates Indian cinema and pays tribute to the art of
            storytelling through movies. The logo explores the beauty of iconic
            Indian films, delving into the minds of the artists who created
            them. From a distant point, a movie might not seem of any particular
            interest, but for us, it represents year-long dedication and hard
            work to produce a 2-hour-long masterpiece projected on a screen, a
            testament to the unfathomable wonders of the creative mind.
          </p>
        </section>

        <section className="w-full flex items-center justify-center border-y  border-[#CBC9C8]">
          <section className="p-10 py-24">
            <Image
              alt="TK-logo"
              width={500}
              height={90}
              src={TakshashilaSecondaryLogo}
              className="w-full max-w-56"
            />
          </section>
          <section className="hidden text-[#f0f0f0] w-2/3 lg:flex lg:justify-end lg:items-center lg:gap-x-5">
            <section className="flex flex-col space-y-1">
              <h1 className="text-2xl mb-3">Socials</h1>
              <a className="text-[#CBC9C8] text-xs" href="#">Instagram</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Facebook</a>
              <a className="text-[#CBC9C8] text-xs" href="#">LinkedIn</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Phone</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Email</a>
            </section>

            <div className="bg-[#CBC9C8] w-[1px] h-24 mx-8" />

            <section className="flex flex-col space-y-1">
              <h1 className="text-2xl mb-3">Events</h1>
              <a className="text-[#CBC9C8] text-xs" href="#">Technical</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Non Technical</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Workshops</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Pro-Shows</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Others</a>
            </section>

            <div className="bg-[#CBC9C8] w-[1px] h-24 mx-8" />

            <section className="flex flex-col space-y-1">
              <h1 className="text-2xl mb-3">Website</h1>
              <a className="text-[#CBC9C8] text-xs" href="#">Terms & Policy</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Services</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Account</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Collage Site</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Developer</a>
            </section>

            <div className="bg-[#CBC9C8] w-[1px] h-24 mx-8" />

            <section className="flex flex-col space-y-1">
              <h1 className="text-2xl mb-3">Support</h1>
              <a className="text-[#CBC9C8] text-xs" href="#">
                Takshashila Team
              </a>
              <a className="text-[#CBC9C8] text-xs" href="#">Report</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Developer</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Contact Us</a>
              <a className="text-[#CBC9C8] text-xs" href="#">Credits</a>
            </section>
          </section>
        </section>

        <section className="flex justify-center gap-3 text-white text-[9px] py-2">
          <h1>cittakshashila.in</h1>
          <h1>Copyright &copy; 2024</h1>
          <h1>Website By Team :bitspace</h1>
        </section>
      </section>
    </main>
  );
}
