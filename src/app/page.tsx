// Removed unused imports
// Removed authentication import
import { HydrateClient } from "@/trpc/server";
import demo from "@/data/demo.json";
import BrandCard from "@/app/_components/BrandCard";

export default async function Home() {
  // Removed unused hello variable
  // Removed authentication and session logic

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            A <span className="text-[hsl(280,100%,70%)]">T3</span> App
          </h1>
          {/* Demo brands list (minimal Linktree-style pages) */}

          {/* Demo brands list (minimal Linktree-style pages) */}
          <div className="w-full max-w-4xl">
            <h2 className="mb-16 flex flex-col items-center gap-2 align-middle text-4xl font-bold">
              Showcasing Demo brand profiles
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
              {demo.brands.map((b) => (
                <BrandCard
                  key={b.id}
                  id={b.id}
                  name={b.name}
                  handle={b.handle}
                  bio={b.bio}
                  themeColor={b.themeColor}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
