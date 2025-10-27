import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import demo from "@/data/demo.json";

type ApiRouteParams = {
  params: {
    handle: string;
  };
};

export function GET(_request: NextRequest, { params }: ApiRouteParams) {
  const { handle } = params;

  const brand = demo.brands.find((b) => b.handle === handle || b.id === handle);

  if (!brand) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(brand);
}