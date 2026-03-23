"use client";

// Hooks
import { useState } from "react";

import Image from "next/image";

// Types
type SelectItems = "Popularité" | "Date" | "Titre";

export default function Select({ items }: { items: string[] }) {
  const [selected, setSelected] = useState<SelectItems>(
    items[0] as SelectItems,
  );

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (item: SelectItems) => {
    setSelected(item);
  };

  return (
    <div className="flex gap-4">
      <label className="font-bold py-4" htmlFor="orderBy">
        Trier par
      </label>
      <div
        id="orderBy"
        className={`relative bg-primary text-white font-bold rounded-md py-2.5 px-4 cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="py-2.5 px-1">{selected}</span>
          <Image
            src="/ChevronUp.png"
            alt="Chevron Up"
            width={14}
            height={14}
            className={isOpen ? "" : "rotate-180"}
          />
        </div>
        {isOpen && (
          <div className="relative bg-primary w-full flex flex-col">
            {items
              .filter((item) => item !== selected)
              .map((item) => (
                <div
                  key={item}
                  onClick={() => handleChange(item as SelectItems)}
                  className="py-2.5 px-1 border-t border-white"
                >
                  <span>{item}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
