import { Suspense } from "react";

const FallBackComp = (
  <h1 className="backdrop-blur text-white text-4xl">Loading</h1>
);

export default function EventLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={FallBackComp}>{children}</Suspense>;
}
