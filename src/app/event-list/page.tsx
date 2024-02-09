import { NavBar } from "@/components";
import AddToCartButton from "@/components/AddToCartButton";
import { EventList } from "@/libs/data";

export default function Events() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-800 ">
      <NavBar />

      <section className="  pt-32 text-center ">
        {EventList.map((event) => (
          <AddToCartButton
            key={event.code}
            event={event}
          />
        ))}
      </section>
    </main>
  );
}
