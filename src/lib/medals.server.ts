import { JTMedalCount } from "@/utils/types";
import fetchMedals from "@/lib/jto.server";

/**
 * Server helper to get JTO medals using the shared Google Sheets logic.
 */
export async function getJTOMedals(jiatingName: string): Promise<JTMedalCount> {
  const [jiating, medals] = await fetchMedals(jiatingName);
  return { jiatingName: jiating ?? jiatingName, medals: Number(medals) || 0 } as JTMedalCount;
}