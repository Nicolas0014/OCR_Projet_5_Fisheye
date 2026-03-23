// Types
import Select from "@/app/components/Select/Select";
import { Media, Photographer } from "@/app/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default async function PhotographerPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;

  // TODO : Gérer l'erreur 404
  // TODO : Utiliser la requête Prisma de prisma-db pour récupérer les données du photographe à partir de son ID
  // TODO : Utiliser la requête Prisma de prisma-db pour récupérer les données des médias du photographe à partir de son ID

  const [filteredMedias, setFilteredMedias] = useState<Media[]>([]); // TODO : Filtrer les médias du photographe à partir de son ID

  useEffect(() => {
    // TODO : Trier les médias du photographe en fonction du critère de tri sélectionné (popularité, date, titre)
    setFilteredMedias([]); // TODO : Mettre à jour les médias filtrés en fonction du critère de tri sélectionné
  }, []);

  const photographer: Photographer = {
    id: 1,
    name: "Mimi Keel",
    city: "London",
    country: "UK",
    tagline: "Voir le beau dans le quotidien",
    price: 400,
    portrait: "MimiKeel.jpg",
  };

  return (
    <div className="space-y-8">
      {/* Header du photographe */}
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
      {/* Galerie du photographe */}
      <div>
        <Select items={["Popularité", "Date", "Titre"]} />
        {/* TODO : Afficher sa gallerie photo */}
        {filteredMedias.map((media) => (
          <div key={media.id}>
            <Image
              src={`/${media.image}`}
              alt={media.title}
              width={300}
              height={200}
              className="rounded-sm object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{media.title}</h2>
            <p className="text-sm text-gray-dark">{media.likes} likes</p>
          </div>
        ))}
      </div>
    </div>
  );
}
