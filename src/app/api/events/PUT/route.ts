import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { CALL, TOKEN_SECRET } from "@/libs/utils";

export const revalidate = 1;
export async function PUT(req: NextRequest): Promise<NextResponse> {
    const data = await req.json();
    const { token } = data
    try {
        jwt.verify(token, TOKEN_SECRET, (err: any) => {
            if (err)
                return NextResponse
                    .json({ statusCode: 403, body: { message: "Forbidden" } });
        });
    } catch (e) {
        return NextResponse.json(e);
    }
    try {
        const d = await CALL.event(data.event_name, data.event_data, data.type, { img: data.img, num: data.num });
        return NextResponse.json(d);
    } catch (e) {
        return NextResponse.json(e);
    }
}
