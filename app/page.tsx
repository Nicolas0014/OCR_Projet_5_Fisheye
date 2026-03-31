import { getAllPhotographers } from "@/app/lib/prisma-db";

// Components
import PhotographerCard from "./components/Cards/PhotographerCard";

// Types
import { Photographer } from "./types";
import { Suspense } from "react";

export default async function Home() {
  const allPhotographers: Photographer[] = await getAllPhotographers();
  // TODO : utiliser le contexte pour cacher ?
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-3 gap-y-20">
          {allPhotographers.map((photographer: Photographer, index: number) => (
            <PhotographerCard
              key={photographer.id}
              photographer={photographer}
              index={index + 1}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
