// Types
import { Media, SelectItems } from "@/app/types";

export function sortMedias(medias: Media[], filter: SelectItems): Media[] {
  switch (filter) {
    case "Popularité":
      return [...medias].sort((a, b) => b.likes - a.likes);
    case "Date":
      return [...medias].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );
    case "Titre":
      return [...medias].sort((a, b) => a.title.localeCompare(b.title));
    default:
      return medias;
  }
}
