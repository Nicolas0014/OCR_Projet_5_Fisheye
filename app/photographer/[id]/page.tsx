import {
  getPhotographer,
  getAllMediasForPhotographer,
} from "@/app/lib/prisma-db";

// Types

// Components
import Image from "next/image";
import Medias from "@/app/components/Medias/Medias";

// Hooks
import { Suspense } from "react";

// Navigation
import { notFound } from "next/navigation";

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

  const photographer = await getPhotographer(numericId);

  if (!photographer) {
    notFound();
  }

  const medias = await getAllMediasForPhotographer(photographer.id);

  return (
    <div className="space-y-8">
      {/* Header du photographe */}
      <Suspense
        fallback={
          <div>Chargement des informations du photographe en cours...</div>
        }
      >
        <div className="bg-gray-light py-16 px-12 rounded-sm flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-xxl font-bold text-secondary mb-0">
              {photographer.name}
            </h1>
            <p className="text-lg text-primary">
              {photographer.city}, {photographer.country}
            </p>
            <p className="text-normal text-gray-dark">{photographer.tagline}</p>
          </div>
          <button className="btn">Contactez-moi</button>
          <Image
            src={`/${photographer.portrait}`}
            alt={photographer.name}
            width={200}
            height={200}
            className="rounded-full w-50 h-50 object-cover"
          />
        </div>
      </Suspense>

      {/* Galerie du photographe */}
      <Suspense fallback={<div>Chargement des médias en cours...</div>}>
        <Medias medias={medias} />
      </Suspense>
    </div>
  );
}
