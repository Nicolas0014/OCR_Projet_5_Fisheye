"use client";

// Types
import { Media, SelectItems, Photographer } from "@/app/types";

// Components
import Select from "@/app/components/Select/Select";
import MediasModaleTrigger from "@/app/components/Modales/MediasModale/ModaleTrigger";

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
            <MediasModaleTrigger
              key={media.id}
              media={media}
              allMedias={filteredMedias}
            />
          ))
        ) : (
          <p>Aucun média disponible</p>
        )}
      </div>
    </div>
  );
}
