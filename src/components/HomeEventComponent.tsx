import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface prop {
  title: string;
  description: string;
  background: StaticImageData;
}

export default function HomeEventComponent({
  title,
  description,
  background,
}: prop) {
  return (
    <section className="h-full xl:h-auto relative flex flex-col items-center justify-between w-full rounded-xl py-5">
      <Image
        className="rounded-l -z-10"
        src={background}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={title}
      />
      <h1 className="transition-all text-white text-center py-2 text-4xl w-full backdrop-blur bg-opacity-50 bg-cream shadow">
        {title}
      </h1>
      <Link href={"/events"} className="bg-white w-3/4 py-2 font-bold text-xl text-center font-oranienbaum rounded-md  shadow">
        Learn More
      </Link>
    </section>
  );
}
