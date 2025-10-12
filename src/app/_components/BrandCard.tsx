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

/**
 * Renders a card displaying brand information including initials, name, handle, bio, and links.
 *
 * @param id - Unique identifier for the brand.
 * @param name - Display name of the brand.
 * @param handle - Unique handle or username for the brand.
 * @param bio - Short biography or description of the brand.
 * @param themeColor - Optional color used for the brand's avatar background.
 * @param links - Optional array of link objects associated with the brand.
 *
 * The card shows the brand's initials in a colored circle, the name, handle, and either the first link's title or the bio as a subtitle.
 * Clicking the card navigates to the brand's page.
 */
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
