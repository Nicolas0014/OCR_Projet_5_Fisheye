import { getAllPhotographers } from "@/app/lib/prisma-db";

// Components
import PhotographerCard from "./components/Cards/PhotographerCard";

// Types
import { Photographer } from "./types";
import { Suspense } from "react";

export default async function Home() {
  const allPhotographers = [
    {
      id: 1,
      name: "Mimi Keel",
      city: "London",
      country: "UK",
      tagline: "Voir le beau dans le quotidien",
      price: 400,
      portrait: "/MimiKeel.jpg",
    },
    {
      id: 2,
      name: "Ellie-Rose Wilkens",
      city: "Paris",
      country: "France",
      tagline: "Capturer des compositions complexes en noir et blanc",
      price: 250,
      portrait: "/EllieRoseWilkens.jpg",
    },
    {
      id: 3,
      name: "Tracy Galindo",
      city: "Montreal",
      country: "Canada",
      tagline: "Photographe freelance",
      price: 500,
      portrait: "/TracyGalindo.jpg",
    },
    {
      id: 4,
      name: "Nabeel Bradford",
      city: "Mexico City",
      country: "Mexico",
      tagline: "Toujours aller de l'avant",
      price: 350,
      portrait: "/NabeelBradford.jpg",
    },
    {
      id: 5,
      name: "Rhode Dubois",
      city: "Barcelona",
      country: "Spain",
      tagline:
        "Je crée des souvenirs de famille que vous chérirez pour toujours.",
      price: 300,
      portrait: "/RhodeDubois.jpg",
    },
    {
      id: 6,
      name: "Marcel Nikolic",
      city: "Berlin",
      country: "Germany",
      tagline: "Toujours à la recherche de LA photo",
      price: 400,
      portrait: "/MarcelNikolic.jpg",
    },
  ];

  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-3 gap-y-20">
          {allPhotographers.map((photographer: Photographer, index: number) => (
            <PhotographerCard
              key={photographer.id}
              photographer={photographer}
              index={index + 1}
            />
          ))}
        </div>
      </Suspense>
    </main>
  );
}
