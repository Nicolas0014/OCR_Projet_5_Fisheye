// Types
import Select from "@/app/components/Select/Select";
import { Photographer } from "@/app/types";
import Image from "next/image";

export default async function PhotographerPage({
  params,
}: {
  params: { id: number };
}) {
  const { id } = await params;

  // TODO : Utiliser la requête Prisma de prisma-db pour récupérer les données du photographe à partir de son ID

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
      </div>
    </div>
  );
}
