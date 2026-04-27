// Providers
import { LikesProvider } from "@/app/contexts/totalLikes";

import {
  getPhotographer,
  getAllMediasForPhotographer,
} from "@/app/lib/prisma-db";

// Components
import Header from "@/app/components/Header/Header";
import PhotographerHeader from "@/app/components/PhotographerHeader/PhotographerHeader";
import Medias from "@/app/components/Medias/Medias";

// Hooks
import { Suspense } from "react";

// Navigation
import { notFound } from "next/navigation";

// Types
import { Photographer, Media } from "@/app/types";
import PhotographerStats from "@/app/components/PhotographerStats/PhotographerStats";

export default async function PhotographerPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;

  const numericId = Number(id);

  if (isNaN(numericId)) {
    notFound();
  }

  const photographer: Photographer | null = await getPhotographer(numericId);

  if (!photographer) {
    notFound();
  }

  const medias: Media[] = await getAllMediasForPhotographer(photographer.id);

  return (
    <LikesProvider>
      <main>
        <Header showTitle={false} />

        <div className="space-y-8">
          {/* Header du photographe */}
          <Suspense
            fallback={
              <div>Chargement des informations du photographe en cours...</div>
            }
          >
            <PhotographerHeader photographer={photographer} />
          </Suspense>

          {/* Galerie du photographe */}
          <Suspense fallback={<div>Chargement des médias en cours...</div>}>
            <Medias medias={medias} />
          </Suspense>
        </div>

        <PhotographerStats price={photographer.price} medias={medias} />
      </main>
    </LikesProvider>
  );
}
