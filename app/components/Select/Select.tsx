"use client";

// Hooks
import { useState } from "react";

import Image from "next/image";

// Types
import { SelectItems } from "@/app/types";

export default function Select({
  items,
  filterSelected,
  setFilterSelected,
}: {
  items: string[];
  filterSelected: SelectItems;
  setFilterSelected: (item: SelectItems) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (item: SelectItems) => {
    setFilterSelected(item);
    setIsOpen(false);
  };

  return (
    <div className="flex gap-4">
      <label className="font-bold py-4" htmlFor="orderBy">
        Trier par
      </label>
      <div
        id="orderBy"
        className={`relative bg-primary text-white font-bold rounded-md py-1 px-4 cursor-pointer min-w-40 z-10`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className="py-3 px-1">{filterSelected}</span>
          <Image
            src="/ChevronUp.png"
            alt="Chevron Up"
            width={14}
            height={14}
            className={isOpen ? "" : "rotate-180"}
          />
        </div>
        {isOpen && (
          <div className="absolute left-0 pb-1 px-4 bg-primary w-full flex flex-col rounded-b-md">
            {items
              .filter((item) => item !== filterSelected)
              .map((item) => (
                <div
                  key={item}
                  onClick={() => handleChange(item as SelectItems)}
                  className="py-3 px-1 border-t border-white"
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
