"use server";

import { updateNumberOfLikes } from "@/app/lib/prisma-db";
import { revalidatePath } from "next/cache";

export async function updateLike(
  mediaId: number,
  newNumberOfLikes: number,
  photographerId: number,
) {
  try {
    const result = await updateNumberOfLikes(mediaId, newNumberOfLikes);
    revalidatePath(`/photographer/${photographerId}`);
    return {
      success: true,
      data: result,
    };
  } catch (error) {
    console.error("Update like error:", error);
    return {
      success: false,
      error: "Failed to update like",
    };
  }
}
