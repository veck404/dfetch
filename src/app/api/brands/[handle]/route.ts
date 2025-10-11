import { NextResponse, NextRequest } from "next/server";
import demo from "@/data/demo.json";

// Next.js may provide params as a plain object or a Promise in some typings
export async function GET(_request: NextRequest, context: any) {
  const handle = context?.params?.handle ?? context?.params;
  const brand = demo.brands.find((b) => b.handle === handle || b.id === handle);
  if (!brand) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(brand);
}
