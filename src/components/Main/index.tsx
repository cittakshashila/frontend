import Image from "next/image";
import TakshashilaSecondaryLogo from "@/assets/takshashila-secondary-logo.svg";
import TakshashilaTextLogo from "@/assets/takshashila-text.svg";
import TakshashilaSideProp from "@/assets/about-cit-side-prop-tklogo-hero.png";

import IMGSooriNa from "@/assets/stacked-images-about-section/soori-na-speaking.png";
import IMGWeloveOs from "@/assets/stacked-images-about-section/workshop-we-love-os.png";
import IMGDjDance from "@/assets/stacked-images-about-section/tk-dj-crowd-dance.png";
import IMGPeopleSitting from "@/assets/stacked-images-about-section/people-sitting-together.png";
import IMGSriram from "@/assets/stacked-images-about-section/sriram-parthasarathy.png";
import IMGThaikudamGuitarist from "@/assets/stacked-images-about-section/thaikudam-gutarist.png";

import {
  IMGProShow,
  IMGWorkshop,
  IMGTechnical,
  IMGNonTechnical,
} from "@/assets/event-section";

import BGCITCrowd from "@/assets/cit-crowd-bg.webp";
import BGPaintSplash from "@/assets/paint-effect-bg.webp";
import BGThaiKudamBridge from "@/assets/thaikudambridge-bg.webp";

import { NavBar } from "@/components";
import HomeEventComponent from "../HomeEventComponent";

const Main = () => {
  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar />

      <Image
        className="h-screen -z-20 bg-[#272727]"
        alt="bg"
        src={BGPaintSplash}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        loading="lazy"
      />

      <section className="relative w-full flex items-center justify-center h-screen p-10 md:p-24 lg:p-48 overflow-clip">
        <Image
          className="absolute lg:-right-56 -z-10 lg:-top-64 lg:w-[900px] min-w-[1000px] -bottom-40"
          src={TakshashilaSideProp}
          width={500}
          alt="cit-takshashila-primary-logo"
        />

        <Image
          src={TakshashilaTextLogo}
          width={700}
          alt="cit-takshashila-primary-logo"
          className="w-[500px] lg:w-[700px]"
        />

        <Image
          className="hidden lg:block absolute -z-10 -left-56 -top-0 w-[900px]"
          src={TakshashilaSideProp}
          width={500}
          alt="cit-takshashila-primary-logo"
        />
      </section>

      <section className="relative min-h-screen w-full p-10 md:p-24 lg:px-40 ">
        <Image
          className="h-screen -z-10 bg-[#272727]"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          src={BGCITCrowd}
        />

        <section className="flex flex-col xl:flex-row items-center">
          <section>
            <h1 className="font-oranienbaum text-4xl text-cream pb-3">
              About CIT
            </h1>
            <p className="text-cream text-xs md:text-base text-justify">
              A prominent institution ranking amongst the top colleges in Tamil
              Nadu, was established with an initiative to provide pragmatic
              learning. The institution has also partnered with a number of
              companies to set a worldwide standard by offering students a
              diverse range of possibilities that combine education and
              recreation. The students appetite for knowledge makes them thrive
              to prepare for the ready-to-serve industrial requirements. This is
              delivered by CIT through professional ethics which is sated by
              frequent guest lectures by professionals from various industries
              and academic backgrounds. Chennai Institute of Technology has been
              awarded the National Award of Excellence for Best Placements & has
              been ranked Second in Tamil Nadu. Our college has made dreams of
              thousands of students come true
              <br />
              <br />
              &quot;Our objective for establishing CIT is to transfer our
              knowledge to you, so that you can transform into a proper
              engineer&quot;
              <br />
              <br />
              <span className="font-bold italic text-base">
                ~Shri Sriram Parthasarathy
              </span>
            </p>
          </section>

          <section className="m-5 xl:pt-0 w-40 h-40 xl:w-48 xl:h-48 relative xl:min-w-[350px]">
            <Image
              height={150}
              width={150}
              src={IMGPeopleSitting}
              alt="soori-na"
              className="absolute left-20 rotate-6 xl:top-28 xl:left-40 xl:rotate-6 md:w-52 "
            />
            <Image
              height={150}
              width={150}
              src={IMGWeloveOs}
              alt="soori-na"
              className="absolute -rotate-6 right-20 xl:top-10 xl:left-10 xl:-rotate-6 md:w-52"
            />
            <Image
              height={150}
              width={150}
              src={IMGSriram}
              alt="soori-na"
              className="absolute rotate-6 xl:-top-20 xl:left-52 xl:rotate-6 md:w-52"
            />
          </section>
        </section>

        <section className="flex xl:flex-row-reverse xl:mt-16">
          <section>
            <h1 className="font-oranienbaum text-4xl text-cream py-4">
              About Takshashila
            </h1>
            <p className="text-cream text-xs md:text-base text-justify">
              The Grand Annual Cultural Fiesta of Chennai Institute Of
              Technology is an eminent spectacle that gives the student
              community a platform to showcase their talents and sculpt their
              skills. This memorable occasion is a perfect fusion of
              entertainment and knowledge-filled atmosphere with a potpourri of
              genres that escalate the vibrance of celebration. The event
              inculcates a blend of virtues among the students which makes them
              shine out of the crowd. This time, Takshashila&apos; s voyage will
              be an exhilarating one, full of adventures that are fished
              straight out of the ocean.
            </p>
          </section>

          <section className="hidden xl:block w-48 h-48 relative xl:min-w-[350px]">
            <Image
              height={200}
              width={200}
              src={IMGSooriNa}
              alt="soori-na"
              className="absolute -left-8 top-6 -rotate-6"
            />
            <Image
              height={200}
              width={200}
              src={IMGDjDance}
              alt="soori-na"
              className="absolute top-28 right-16 -rotate-3"
            />
            <Image
              height={200}
              width={200}
              src={IMGThaikudamGuitarist}
              alt="soori-na"
              className="absolute right-5 -top-6 rotate-6"
            />
          </section>
        </section>
      </section>

      <section className="flex flex-col relative min-h-screen w-full  p-10 md:p-24 lg:p-48 lg:py-36">
        <Image
          className="h-screen -z-10 bg-[#272727]"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          src={BGThaiKudamBridge}
        />
        <h1 className="font-oranienbaum text-5xl text-cream pb-3 text-center">
          Events
        </h1>

        <section className="hidden xl:flex flex-grow space-x-3 ">
          <HomeEventComponent
            title="Pro Shows"
            description="For people with friends"
            background={IMGProShow}
          />

          <HomeEventComponent
            title="Workshop"
            description="For NERDS"
            background={IMGWorkshop}
          />

          <HomeEventComponent
            title="Non-Technical"
            description="it is non techincal events, loren ipsum its on load rasengan macbook pro router keyboard it is pendrive paper"
            background={IMGNonTechnical}
          />

          <HomeEventComponent
            title="Technical"
            description="For people with "
            background={IMGTechnical}
          />
        </section>
      </section>


      <section className="w-full relative flex items-center justify-center border-y  border-cream">
        <Image
          className="h-screen -z-10 bg-[#272727]"
          alt="bg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          loading="lazy"
          src={BGPaintSplash}
        />
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
            <a className="text-cream text-xs" href="#">
              Instagram
            </a>
            <a className="text-cream text-xs" href="#">
              Facebook
            </a>
            <a className="text-cream text-xs" href="#">
              LinkedIn
            </a>
            <a className="text-cream text-xs" href="#">
              Phone
            </a>
            <a className="text-cream text-xs" href="#">
              Email
            </a>
          </section>

          <div className="bg-cream w-[1px] h-24 mx-8" />

          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Events</h1>
            <a className="text-cream text-xs" href="#">
              Technical
            </a>
            <a className="text-cream text-xs" href="#">
              Non Technical
            </a>
            <a className="text-cream text-xs" href="#">
              Workshops
            </a>
            <a className="text-cream text-xs" href="#">
              Pro-Shows
            </a>
            <a className="text-cream text-xs" href="#">
              Others
            </a>
          </section>

          <div className="bg-cream w-[1px] h-24 mx-8" />

          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Website</h1>
            <a className="text-cream text-xs" href="#">
              Terms & Policy
            </a>
            <a className="text-cream text-xs" href="#">
              Services
            </a>
            <a className="text-cream text-xs" href="#">
              Account
            </a>
            <a className="text-cream text-xs" href="#">
              Collage Site
            </a>
            <a className="text-cream text-xs" href="#">
              Developer
            </a>
          </section>

          <div className="bg-cream w-[1px] h-24 mx-8" />

          <section className="flex flex-col space-y-1">
            <h1 className="text-2xl mb-3">Support</h1>
            <a className="text-cream text-xs" href="#">
              Takshashila Team
            </a>
            <a className="text-cream text-xs" href="#">
              Report
            </a>
            <a className="text-cream text-xs" href="#">
              Developer
            </a>
            <a className="text-cream text-xs" href="#">
              Contact Us
            </a>
            <a className="text-cream text-xs" href="#">
              Credits
            </a>
          </section>
        </section>
      </section>

      <section className="bg-grey flex justify-center gap-3 text-white text-[9px] py-2">
        <h1>cittakshashila.in</h1>
        <h1>Copyright &copy; 2024</h1>
        <h1>Website By Team :bitspace</h1>
      </section>
    </main>
  );
};

export default Main;
