import { INFO_URL } from "@/libs/utils";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 1;
export async function GET(
  req: NextRequest,
  { params }: { params: { name: string } },
) {
  const { name } = params;
  const json = await fetch(INFO_URL(name || "")).then((res) => res.json());

  return NextResponse.json(json);
}
