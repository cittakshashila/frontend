import Image, { StaticImageData } from "next/image";

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
    <section className="relative flex flex-col items-center hover:justify-between justify-end w-full rounded-xl p-5">
      <Image
        className="rounded-xl -z-10"
        src={background}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        alt={title}
      />
      <h1 className="transition-all text-cream text-4xl">{title}</h1>
      <p className="hidden  text-black text-base ">{description}</p>
      <button className="hidden  bg-white w-3/4">Learn More</button>
    </section>
  );
}
