import { isTeaser } from "@/libs/utils";

export default function Event({ params }: { params: { id: string } }) {
  if (isTeaser) return;

  return <div>
    Sorry, there's no event named "{params.id}".
    </div>;
}
