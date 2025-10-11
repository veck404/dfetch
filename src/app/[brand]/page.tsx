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

export default function BrandPage({ params }: { params: { brand: string } }) {
  const handle = params.brand;
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
      <div
        style={{ width: 420 }}
        className="m-8 rounded-lg bg-white p-6 shadow"
      >
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 12,
              background: brand.themeColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: 28,
            }}
          >
            {brand.name?.slice(0, 1)}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{brand.name}</h1>
            <div className="text-sm text-gray-600">@{brand.handle}</div>
          </div>
        </div>

        <p className="mt-4 text-gray-700">{brand.bio}</p>

        <div className="mt-6 flex flex-col gap-3">
          {brand.links?.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="rounded border px-4 py-2 text-center text-black no-underline"
              style={{ background: "#f7f7f7" }}
            >
              {l.title}
            </a>
          ))}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <Link href="/">Back to demo list</Link>
        </div>
      </div>
    </main>
  );
}
