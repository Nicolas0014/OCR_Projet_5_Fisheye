import Image from "next/image";

// Types
import { Photographer } from "@/app/types";
import Link from "next/link";

export default function PhotographerCard({
  photographer,
  index,
}: {
  photographer: Photographer;
  index: number;
}) {
  return (
    <div className={`flex flex-col item-center`}>
      <div className="relative flex flex-col items-center text-center space-y-1">
        <Link
          href={`/photographer/${photographer.id}`}
          className="flex flex-col items-center"
        >
          <Image
            src={"/" + photographer.portrait}
            alt={`${photographer.name}'s profile`}
            width={200}
            height={200}
            className="rounded-full w-50 h-50 object-cover mb-4"
          />
          <h2 className="text-xl text-secondary">{photographer.name}</h2>
        </Link>
        <p className="text-s text-primary">{`${photographer.city}, ${photographer.country}`}</p>
        <p className="text-xs">{photographer.tagline}</p>
        <p className="text-xxs text-gray-dark">{`${photographer.price}€/jour`}</p>
      </div>
    </div>
  );
}
