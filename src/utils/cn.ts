import { config } from "@/config";
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(config.directLineEndpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.studioSecret}`,
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
