import axios from "axios";
import {NextRequest, NextResponse} from "next/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization")
  const token: string = (authHeader && authHeader.split(" ")[1]) || "";
  const authLink = `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`;
  const getPayload = await axios.get(authLink);
  console.log(getPayload.data.email)
  const response = await axios.get("http://localhost:6969/user")
  return NextResponse.json(response.data);
}
