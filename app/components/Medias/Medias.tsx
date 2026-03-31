"use client";

// Types
import { Media, SelectItems } from "@/app/types";

// Components
import Image from "next/image";
import Select from "@/app/components/Select/Select";

// Hooks
import { useState, useEffect } from "react";

// Utils
import { sortMedias } from "@/app/utils/sortMedias";

export default function Medias({ medias }: { medias: Media[] }) {
  const [filterSelected, setFilterSelected] =
    useState<SelectItems>("Popularité");

  const [filteredMedias, setFilteredMedias] = useState<Media[]>(medias);

  useEffect(() => {
    setFilteredMedias(sortMedias(medias, filterSelected));
  }, [medias, filterSelected]);

  return (
    <div className="space-y-12">
      <Select
        items={["Popularité", "Date", "Titre"]}
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />

      <div className="grid grid-cols-3 gap-12">
        {filteredMedias.length > 0 ? (
          filteredMedias.map((media) => (
            <article key={media.id} className="w-87.5">
              {media.image ? (
                <Image
                  src={`/${media.image}`}
                  alt={media.title}
                  width={300}
                  height={200}
                  className="rounded-sm object-cover w-full h-75"
                />
              ) : media.video ? (
                // TODO : ne pas afficher les controles
                <video className="rounded-sm object-cover w-full h-75">
                  <source src={`/${media.video}`} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              ) : null}
              <div className="text-primary text-lg flex items-center justify-between py-2">
                <h2>{media.title}</h2>
                <p className="flex items-center gap-1.5">
                  {media.likes}
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.75 18.35L7.48125 17.03C2.975 12.36 0 9.28 0 5.5C0 2.42 2.1175 0 4.8125 0C6.335 0 7.79625 0.81 8.75 2.09C9.70375 0.81 11.165 0 12.6875 0C15.3825 0 17.5 2.42 17.5 5.5C17.5 9.28 14.525 12.36 10.0188 17.04L8.75 18.35Z"
                      fill="#911C1C"
                    />
                  </svg>
                </p>
              </div>
            </article>
          ))
        ) : (
          <p>Aucun média disponible</p>
        )}
      </div>
    </div>
  );
}
