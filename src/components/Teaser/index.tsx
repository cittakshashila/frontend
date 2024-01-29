"use client";

import Image from "next/image";
import AboutCITSideTKLogo from "@/assets/about-cit-side-prop-tklogo.png";
import YearBanner from "@/assets/2024-year-banner.png";
import TakshashilaPrimaryLogo from "@/assets/takshashila-primary-logo.svg";
import DownArrow from "@/assets/down-arrow.svg";
import { Carousel } from "@/components";
import { IconCircleFilled } from "@tabler/icons-react";
import { cn } from "@/libs/utils";
import useHighlightScroll from "@/hooks/useHighlightScroll";
import ContactCard from "../ContactCard";

const Teaser = () => {
  const { activeSection } = useHighlightScroll();
  const activeStyle = "border-cream";
  const defaultStyle =
    "no-underline	text-cream border border-transparent transition-all duration-200 p-[3px] rounded";

  return (
    <main className="bg-paint-effect bg-cover bg-center bg-[#272727] wrapper h-screen lg:snap-y lg:snap-mandatory overflow-y-hidden">
      <nav className="hidden md:block fixed right-[50px] top-1/2 z-50">
        <ul className="flex flex-col items-center gap-2">
          <li
            className={cn(
              defaultStyle,
              activeSection === "hero" && activeStyle,
            )}
          >
            <a href="#hero">
              <IconCircleFilled size={14} />
            </a>
          </li>

          <li
            className={cn(
              defaultStyle,
              activeSection === "aboutcit" && activeStyle,
            )}
          >
            <a href="#aboutcit">
              <IconCircleFilled size={14} />
            </a>
          </li>

          <li
            className={cn(
              defaultStyle,
              activeSection === "abouttk" && activeStyle,
            )}
          >
            <a href="#abouttk">
              <IconCircleFilled size={14} />
            </a>
          </li>
        </ul>
      </nav>

      <section
        data-section
        id="hero"
        className="relative w-full  h-screen bg-world-map bg-cover bg-center flex flex-col items-center justify-center p-5 md:p-24 lg:p-72 lg:snap-start lg:overflow-y-hidden"
      >
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
        <h1 className="absolute font-passport bottom-24 text-base text-cream lg:text-xl">
          BOARDING STARTS SOON...
        </h1>
        <a
          href="#aboutcit"
          className="hidden lg:block absolute bottom-10 right-10"
        >
          <Image alt="arrow" src={DownArrow} />
        </a>
      </section>

      <section
        data-section
        id="aboutcit"
        className="overflow-clip relative bg-cit-crowd bg-opacity-75 bg-blend-overlay bg-[#272727] bg-right text-white min-h-screen w-full flex flex-col justify-center p-10 md:p-24 lg:snap-start lg:overflow-y-hidden"
      >
        <h1 className="text-4xl font-semibold pb-4">About CIT</h1>
        <p className="z-10 text-base w-full md:max-w-3xl">
          A prominent institution ranking amongst the top colleges in Tamil
          Nadu, was established with an initiative to provide pragmatic
          learning. The institution has also partnered with a number of
          companies to set a worldwide standard by offering students a diverse
          range of possibilities that combine education and recreation. The
          students' appetite for knowledge makes them thrive to prepare for the
          ready-to-serve industrial requirements. This is delivered by CIT
          through professional ethics which is sated by frequent guest lectures
          by professionals from various industries and academic backgrounds.
          Chennai Institute of Technology has been awarded the National Award of
          Excellence for Best Placements & has been ranked Second in Tamil Nadu.
          Our college has made dreams of thousands of students come true
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
        <a
          href="#abouttk"
          className="hidden lg:block absolute bottom-10 right-10"
        >
          <Image alt="arrow" src={DownArrow} />
        </a>

        <ContactCard />
      </section>

      <section
        data-section
        id="abouttk"
        className="relative bg-thai-kudam-bridge bg-right overflow-hidden bg-blend-overlay bg-[#272727] min-h-screen w-full flex flex-col items-center justify-center gap-10 p-10 md:p-24 lg:flex-row lg:snap-start lg:overflow-y-hidden"
      >
        <section className="z-10 text-white">
          <h1 className="text-4xl font-semibold pb-4">About Takshashila</h1>
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
            that mirrors the interconnectedness of our World.
          </p>

          <ContactCard />
        </section>

        <Carousel />
        <Image
          src={AboutCITSideTKLogo}
          alt="side-image"
          className="hidden md:block absolute -top-80 right-0 rotate-[30deg] -z-0"
        />

        <a href="#hero" className="hidden lg:block absolute bottom-10 right-10">
          <Image className="rotate-180" alt="arrow" src={DownArrow} />
        </a>
      </section>
    </main>
  );
};
export default Teaser;
