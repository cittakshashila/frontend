import { FOLDER_INFO_URL } from "@/libs/utils";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 1;
export async function GET(_: NextRequest) {
  const json = await fetch(FOLDER_INFO_URL).then((res) => res.json());

  return NextResponse.json(json);
}
