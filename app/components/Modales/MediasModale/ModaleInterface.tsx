"use client";

// Components
import Image from "next/image";

// Hooks
import { useState } from "react";

// Types
import { Media } from "@/app/types";

export default function ModaleInterface({
  initialMedia,
  allMedias,
  onClose,
}: {
  initialMedia: Media;
  allMedias: Media[];
  onClose: () => void;
}) {
  const [currentMedia, setCurrentMedia] = useState<Media>(initialMedia);

  const navigateTo = (direction: "next" | "previous") => {
    const currentIndex = allMedias.findIndex(
      (media) => media.id === currentMedia.id,
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % allMedias.length;
    } else {
      newIndex = (currentIndex - 1 + allMedias.length) % allMedias.length;
    }

    setCurrentMedia(allMedias[newIndex]);
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-screen z-30">
      <div
        className="absolute inset-0 left-0 top-0 bg-black opacity-60"
        onClick={onClose}
      ></div>
      <div
        className="relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-310 h-11/12 bg-white rounded-md p-8"
        aria-label="image closeup view"
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-6 top-6 cursor-pointer"
          aria-label="Close dialog"
          onClick={onClose}
          // Accessibilite clavier
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClose();
            }
          }}
        >
          <path
            d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
            fill="#911C1C"
          />
        </svg>

        <svg
          width="30"
          height="48"
          viewBox="0 0 30 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-8 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Previous image"
          onClick={() => navigateTo("previous")}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigateTo("previous");
            }
          }}
        >
          <path
            d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z"
            fill="#911C1C"
          />
        </svg>

        <svg
          width="30"
          height="48"
          viewBox="0 0 30 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer"
          aria-label="Next image"
          onClick={() => navigateTo("next")}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              navigateTo("next");
            }
          }}
        >
          <path
            d="M5.05138e-07 5.64L18.32 24L6.72563e-08 42.36L5.64 48L29.64 24L5.64 3.88195e-06L5.05138e-07 5.64Z"
            fill="#911C1C"
          />
        </svg>

        {/* TODO : Bibliotheque lazy loading pour afficher un spinner tant qu'elle n'est pas chargée */}
        <figure className="relative w-262.5 h-full mx-auto flex flex-col">
          {currentMedia.image ? (
            <Image
              src={`/${currentMedia.image}`}
              width={1050}
              height={950}
              alt={currentMedia.title}
              className="w-full h-9/10 rounded-md object-cover"
            />
          ) : currentMedia.video ? (
            <video className="w-full h-full rounded-md object-cover" controls>
              <source src={`/${currentMedia.video}`} type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          ) : null}
          <figcaption className="text-lg text-primary pt-6 flex-1">
            {currentMedia.title}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
