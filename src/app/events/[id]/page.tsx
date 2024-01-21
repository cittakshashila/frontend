import { isTeaser } from "@/libs/utils";

export default function Event({ params }: { params: { id: string } }) {
  if (isTeaser) return;

  return <div>My Post: {params.id}</div>;
}
