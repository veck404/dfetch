import Link from "next/link";
import demo from "@/data/demo.json";

type Brand = {
  id: string;
  name: string;
  handle: string;
  bio?: string;
  themeColor?: string;
  links?: { title: string; url: string }[];
};

export default async function BrandPage({
  params,
}: {
  params: { brand: string } | Promise<{ brand: string }>;
}) {
  const resolved = await params;
  const handle = resolved.brand;
  const brand = demo.brands.find(
    (b: Brand) => b.handle === handle || b.id === handle,
  ) as Brand | undefined;

  if (!brand) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Brand not found</h1>
          <p className="mt-2">No brand profile for &quot;{handle}&quot;</p>
          <Link href="/" className="mt-4 inline-block text-blue-600">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-4 w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <div className="flex flex-col items-center">
          <div
            className="flex items-center justify-center font-extrabold text-white"
            style={{
              width: 120,
              height: 120,
              borderRadius: 9999,
              background: brand.themeColor ?? "#666",
            }}
          >
            <span className="text-4xl">
              {brand.name
                ?.split(" ")
                .map((s) => s[0])
                .slice(0, 2)
                .join("")}
            </span>
          </div>

          <h1 className="mt-4 text-2xl font-extrabold text-gray-900">
            {brand.name}
          </h1>
          <div className="mt-1 text-sm text-gray-500">@{brand.handle}</div>

          {brand.bio && (
            <p className="mt-4 text-center text-gray-600">{brand.bio}</p>
          )}

          <div className="mt-6 flex w-full flex-col gap-3">
            {brand.links?.map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-full bg-gray-100 px-6 py-3 text-center text-gray-900 no-underline shadow-sm transition hover:scale-[1.01] hover:shadow-md"
              >
                {l.title}
              </a>
            ))}
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <Link href="/">Back to demo list</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
