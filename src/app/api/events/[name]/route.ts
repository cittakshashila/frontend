import { FOLDER_URL, INFO_URL } from "@/libs/utils";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { name: string } }) {
    const { name } = params;
    const json = await fetch(`https://github.com/cittakshashila/EVENTS-DATA-24/blob/master/events/${name}/info.json`).then(res => res.json());
    return NextResponse.json(json);
}
