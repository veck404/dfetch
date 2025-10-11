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
  // show first link title as a tiny subtitle if provided (avoids unused var)
  const subtitle = links && links.length > 0 ? (links[0]?.title ?? bio) : bio;

  return (
    <Link
      href={`/${handle ?? id}`}
      className="brand-card"
      style={{
        display: "block",
        borderRadius: 8,
        padding: 12,
        border: "1px solid #eee",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 8,
            background: themeColor ?? "#ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
          }}
        >
          {name?.slice(0, 1)}
        </div>
        <div>
          <div style={{ fontWeight: 700 }}>{name}</div>
          <div style={{ color: "#666" }}>{subtitle}</div>
        </div>
      </div>
    </Link>
  );
}
