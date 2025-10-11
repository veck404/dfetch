import { NextResponse } from "next/server";
import demo from "@/data/demo.json";

export async function GET(_request: Request) {
  return NextResponse.json(demo);
}
