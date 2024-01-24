import { isTeaser } from "@/libs/utils";

export default function Event({ params }: { params: { id: string } }) {
  if (isTeaser) return;

  return <div>
    <main className="flex min-h-screen bg-hero-popcorn bg-fixed bg-cover bg-bottom flex-col bg-red-200 backdrop-blur-xl ">
      <div className="relative flex flex-row flex-wrap text-white text-8xl font-bold top-[50vh] justify-center align-middle text-center">
      Event "{params.id}" Not Found
      </div>
    </main>
    </div>;
}
