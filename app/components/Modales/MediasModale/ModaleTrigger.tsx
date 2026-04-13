"use client";

import { useState } from "react";

// Components
import ModaleInterface from "./ModaleInterface";
import LikeIcon from "../../LikeIcon/LikeIcon";
import Image from "next/image";

// Types
import { Media, Photographer } from "@/app/types";

export default function ModaleTrigger({
  media,
  allMedias,
}: {
  media: Media;
  allMedias: Media[];
}) {
  const [isModaleOpen, setIsModaleOpen] = useState(false);

  return (
    <div>
      <article
        key={media.id}
        className="w-87.5 cursor-pointer"
        onClick={() => setIsModaleOpen(true)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsModaleOpen(true);
          }
        }}
      >
        {media.image ? (
          <Image
            src={`/${media.image}`}
            alt={media.title}
            width={300}
            height={200}
            className="rounded-sm object-cover w-full h-75"
          />
        ) : media.video ? (
          <video className="rounded-sm object-cover w-full h-75">
            <source src={`/${media.video}`} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        ) : null}
        <div className="text-primary text-lg flex items-center justify-between py-2">
          <h2>{media.title}</h2>
          <LikeIcon media={media} />
        </div>
      </article>

      {isModaleOpen && (
        <ModaleInterface
          initialMedia={media}
          allMedias={allMedias}
          onClose={() => setIsModaleOpen(false)}
        />
      )}
    </div>
  );
}
