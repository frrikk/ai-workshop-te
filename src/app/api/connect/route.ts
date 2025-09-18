import { NextResponse } from "next/server";
import { env } from "@/config";

export async function GET() {
  const res = await fetch(env.NEXT_PUBLIC_STUDIO_ENDPOINT);
  const data = await res.json();

  return NextResponse.json(data);
}
