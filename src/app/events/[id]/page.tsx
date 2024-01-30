import { isTeaser } from "@/libs/utils";

export default function Event({ params }: { params: { id: string } }) {
  if (isTeaser) return;

  return (
    <div>
      Sorry, there&apos;s no event named &quot;{params.id}&quot;.
    </div>
  );
}
