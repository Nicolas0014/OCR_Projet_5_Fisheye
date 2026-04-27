"use client";

// Hooks
import { useState, useEffect, useRef } from "react";

// Types
import { Media } from "@/app/types";
import LoadingMedia from "./LoadingMedia";

export default function ModaleInterface({
  initialMedia,
  allMedias,
  onClose,
}: {
  initialMedia: Media;
  allMedias: Media[];
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = modalRef.current;
    if (!el) return;

    const focusables = Array.from(
      el.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    );

    const first = focusables[0];
    const last = focusables[focusables.length - 1];

    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (focusables.length === 0) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }

      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

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
        className="absolute inset-0 left-0 top-0 bg-white"
        onClick={onClose}
      ></div>
      <div
        className="relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-310 h-11/12 rounded-md p-8"
        aria-label="image closeup view"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute right-6 top-6 cursor-pointer"
          onClick={onClose}
          aria-label="Close modale"
        >
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
              fill="#911C1C"
            />
          </svg>
        </button>

        <button
          className="absolute left-8 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => navigateTo("previous")}
          aria-label="Previous image"
        >
          <svg
            width="30"
            height="48"
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M29.6399 42.36L11.3199 24L29.6399 5.64L23.9999 -2.46532e-07L-0.000107861 24L23.9999 48L29.6399 42.36Z"
              fill="#911C1C"
            />
          </svg>
        </button>

        <button
          className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer"
          onClick={() => navigateTo("next")}
          aria-label="Next image"
        >
          <svg
            width="30"
            height="48"
            viewBox="0 0 30 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.05138e-07 5.64L18.32 24L6.72563e-08 42.36L5.64 48L29.64 24L5.64 3.88195e-06L5.05138e-07 5.64Z"
              fill="#911C1C"
            />
          </svg>
        </button>

        <LoadingMedia currentMedia={currentMedia} />
      </div>
    </div>
  );
}
