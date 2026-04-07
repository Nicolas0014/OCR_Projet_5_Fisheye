// Components
import Image from "next/image";
import ContactModaleTrigger from "../Modales/ContactModale/ModaleTrigger";

// Types
import { Photographer } from "@/app/types";

export default function PhotographerHeader({
  photographer,
}: {
  photographer: Photographer;
}) {
  return (
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
      <ContactModaleTrigger photographerName={photographer.name} />
      <Image
        src={`/${photographer.portrait}`}
        alt={photographer.name}
        width={200}
        height={200}
        className="rounded-full w-50 h-50 object-cover"
      />
    </div>
  );
}
