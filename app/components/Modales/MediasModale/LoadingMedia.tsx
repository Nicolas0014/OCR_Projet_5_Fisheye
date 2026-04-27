"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ClipLoader } from "react-spinners";
import { Media } from "@/app/types";

export default function LoadingMedia({
  currentMedia,
}: {
  currentMedia: Media;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
  }, [currentMedia]);

  return (
    <figure className="relative w-262.5 h-full mx-auto flex flex-col">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10 rounded-md">
          <ClipLoader />
        </div>
      )}

      {currentMedia.image ? (
        <Image
          src={`/${currentMedia.image}`}
          width={1050}
          height={950}
          alt={currentMedia.title}
          className="w-full h-[90%] rounded-md object-cover"
          onLoad={() => setLoading(false)}
        />
      ) : currentMedia.video ? (
        <video
          className="w-full h-full rounded-md object-cover"
          controls
          onLoadedData={() => setLoading(false)}
        >
          <source src={`/${currentMedia.video}`} type="video/mp4" />
        </video>
      ) : null}

      <figcaption className="text-lg text-primary pt-6 flex-1">
        {currentMedia.title}
      </figcaption>
    </figure>
  );
}
