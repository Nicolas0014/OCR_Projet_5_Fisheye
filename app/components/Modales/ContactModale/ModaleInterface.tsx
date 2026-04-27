// Types
import { FormInput } from "@/app/types";

import { useEffect, useRef } from "react";

export default function ModaleInterface({
  photographerName,
  formInputs,
  onSubmit,
  onClose,
}: {
  photographerName: string;
  formInputs: FormInput[];
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
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

  return (
    <div className="fixed left-0 top-0 h-screen w-screen z-30">
      <div
        className="absolute inset-0 left-0 top-0 bg-white opacity-60"
        onClick={onClose}
      ></div>
      <div
        className="relative left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-167.5 h-11/12 bg-secondary rounded-md p-8"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
      >
        <form onSubmit={onSubmit} className="space-y-4">
          <button
            className="absolute right-6 top-6 cursor-pointer"
            onClick={() => onClose()}
            aria-label="close modale"
          >
            <svg
              width="42"
              height="42"
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
            >
              <path
                d="M42 4.23L37.77 0L21 16.77L4.23 0L0 4.23L16.77 21L0 37.77L4.23 42L21 25.23L37.77 42L42 37.77L25.23 21L42 4.23Z"
                fill="white"
              />
            </svg>
          </button>
          <div>
            <h2 className="text-xxl mb-0 leading-none">Contactez-moi</h2>
            <label className="text-xxl mb-0">{photographerName}</label>
          </div>
          {formInputs.map((input) => (
            <div className="space-y-1" key={input.id}>
              <label className="text-xl" htmlFor={input.id}>
                {input.label}
              </label>
              {input.type === "textarea" ? (
                <textarea
                  id={input.id}
                  name={input.id}
                  value={input.value}
                  className="inputStyle min-h-42.5"
                  onChange={(e) => input.setFunction(e.target.value)}
                />
              ) : (
                <input
                  type={input.type}
                  id={input.id}
                  name={input.id}
                  value={input.value}
                  className="inputStyle"
                  onChange={(e) => input.setFunction(e.target.value)}
                />
              )}
            </div>
          ))}
          <button type="submit" className="btn">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}
