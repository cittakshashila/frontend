export default function Event({ params }: { params: { id: string } }) {

  return (
    <div>
      Sorry, there&apos;s no event named &quot;{params.id}&quot;.
    </div>
  );
}
