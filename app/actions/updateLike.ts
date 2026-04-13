"use server";

import { secureUpdateNumberOfLikes } from "@/app/lib/prisma-db";

export async function updateLike(mediaId: number, unlike: boolean = false) {
  try {
    const result = await secureUpdateNumberOfLikes(mediaId, unlike);
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
