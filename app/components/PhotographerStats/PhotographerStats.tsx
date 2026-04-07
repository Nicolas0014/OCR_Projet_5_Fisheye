"use client";

// Types
import { Photographer, Media } from "@/app/types";
import { useEffect, useState } from "react";

export default function PhotographerStats({
  photographer,
  medias,
}: {
  photographer: Photographer;
  medias: Media[];
}) {
  const [totalLikes, setTotalLikes] = useState(0);

  useEffect(() => {
    const likesSum = medias.reduce((sum, media) => sum + media.likes, 0);
    setTotalLikes(likesSum);
  }, [medias]);

  return (
    <div className="fixed bg-secondary bottom-0 right-12 p-6 rounded-md">
      <p className="text-lg flex items-center gap-12">
        <span className="flex items-center gap-1">
          {totalLikes}
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="likes"
          >
            <path
              d="M8.75 18.35L7.48125 17.03C2.975 12.36 0 9.28 0 5.5C0 2.42 2.1175 0 4.8125 0C6.335 0 7.79625 0.81 8.75 2.09C9.70375 0.81 11.165 0 12.6875 0C15.3825 0 17.5 2.42 17.5 5.5C17.5 9.28 14.525 12.36 10.0188 17.04L8.75 18.35Z"
              fill="#000000"
            />
          </svg>
        </span>
        <span>{photographer.price}€ / jour</span>
      </p>
    </div>
  );
}
