export interface Photographer {
  id: number;
  name: string;
  city: string;
  country: string;
  tagline: string;
  price: number;
  portrait: string;
}

export interface Media {
  id: number;
  photographerId: number;
  title: string;
  image?: string | null;
  video?: string | null;
  likes: number;
  date: string;
  price: number;
}

export type SelectItems = "Popularité" | "Date" | "Titre";

export interface FormInput {
  label: string;
  type: string;
  id: string;
  value: string;
  setFunction: React.Dispatch<React.SetStateAction<string>>;
}
