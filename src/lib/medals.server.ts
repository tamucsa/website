import { JTMedalCount } from "@/utils/types";
import fetchMedals from "@/lib/jto.server";
import { unstable_cache } from "next/cache";

/**
 * Server helper to get JTO medals using the shared Google Sheets logic.
 */
export async function getJTOMedals(jiatingName: string): Promise<JTMedalCount> {
  const [jiating, medals] = await fetchMedals(jiatingName);
  return { jiatingName: jiating ?? jiatingName, medals: Number(medals) || 0 } as JTMedalCount;
}

// Cache Google Sheets reads per jiating and refresh every 60 seconds.
// Next.js includes function arguments in the cache key.
export const getJTOMedalsCached = unstable_cache(
  getJTOMedals,
  ["jto-medals"],
  { revalidate: 60, tags: ["jto-medals"] }
);