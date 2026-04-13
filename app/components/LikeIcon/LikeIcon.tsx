"use client";
// Types
import { Media } from "@/app/types";
import { useState } from "react";

// Server Actions
import { updateLike } from "@/app/actions/updateLike";

// Context
import { useLikes } from "@/app/contexts/totalLikes";

export default function LikeIcon({ media }: { media: Media }) {
  const { incrementLikes, decrementLikes } = useLikes();
  const [numberOfLikes, setNumberOfLikes] = useState(media.likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();

    try {
      const response = await updateLike(media.id);

      if (response.success) {
        setNumberOfLikes((prev) => prev + 1);
        setIsLiked(true);
        incrementLikes();
      } else {
        throw new Error("Failed to update like");
      }
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  const handleUnlike = async (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    e.stopPropagation();

    try {
      const response = await updateLike(media.id, true);

      if (!response.success) {
        throw new Error("Failed to update like");
      } else {
        setNumberOfLikes((prev) => prev - 1);
        setIsLiked(false);
        decrementLikes();
      }
    } catch (error) {
      console.error("Error updating like:", error);
    }
  };

  return (
    <p className="flex items-center gap-1.5">
      {numberOfLikes}
      <svg
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="likes"
        onClick={(e) => (isLiked ? handleUnlike(e) : handleLike(e))}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            isLiked ? handleUnlike(e as any) : handleLike(e as any);
          }
        }}
      >
        <path
          d="M8.75 18.35L7.48125 17.03C2.975 12.36 0 9.28 0 5.5C0 2.42 2.1175 0 4.8125 0C6.335 0 7.79625 0.81 8.75 2.09C9.70375 0.81 11.165 0 12.6875 0C15.3825 0 17.5 2.42 17.5 5.5C17.5 9.28 14.525 12.36 10.0188 17.04L8.75 18.35Z"
          fill={isLiked ? "#911C1C" : "#CCCCCC"}
        />
      </svg>
    </p>
  );
}
