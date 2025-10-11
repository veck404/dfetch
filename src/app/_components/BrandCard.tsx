import Link from "next/link";

type LinkItem = { title: string; url: string };

type Props = {
  id: string;
  name: string;
  handle: string;
  bio?: string;
  themeColor?: string;
  links?: LinkItem[];
};

export default function BrandCard({
  id,
  name,
  handle,
  bio,
  themeColor,
  links,
}: Props) {
  const subtitle = links && links.length > 0 ? (links[0]?.title ?? bio) : bio;
  const initials = name
    ? name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("")
    : (name?.slice(0, 1) ?? "B");

  return (
    <Link href={`/${handle ?? id}`} className="block no-underline">
      <div
        className="flex flex-col items-center gap-3 rounded-xl bg-white/5 p-6 text-center transition hover:shadow-lg"
        style={{ minHeight: 160 }}
      >
        <div
          className="flex items-center justify-center font-bold text-white"
          style={{
            width: 88,
            height: 88,
            borderRadius: 9999,
            background: themeColor ?? "#888",
          }}
        >
          <span className="text-2xl">{initials}</span>
        </div>

        <div>
          <div className="text-lg font-semibold text-white">{name}</div>
          <div className="mt-1 text-sm text-gray-300">@{handle}</div>
          {subtitle && (
            <div className="mt-2 text-sm text-gray-400">{subtitle}</div>
          )}
        </div>
      </div>
    </Link>
  );
}
