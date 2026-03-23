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
  image?: string;
  video?: string;
  likes: number;
  date: string;
  price: number;
}
