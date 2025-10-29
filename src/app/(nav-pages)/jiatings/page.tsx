import JiatingPageComponent from "@/app/components/jiatings/JiatingPageComponent";
import { getJTOMedals } from "@/lib/medals.server";
import { JiatingList } from "@/content/2025-2026/jiatings";

import { Metadata } from "next";

// server-only helper (no 'use client')
export default async function JiatingsPage() {
  // Fetch JTO medals for all jiatings in parallel
  const names = JiatingList.map((j) => j.name);
  const results = await Promise.all(names.map(async (name) => {
    try {
      return await getJTOMedals(name);
    } catch (err: any) {
      // capture error message so the UI can show why a given fetch failed
      return { error: err?.message ?? String(err) };
    }
  }));

  const medalsByJiating: Record<string, any> = Object.fromEntries(names.map((name, idx) => [name, results[idx]]));

  // Create a sorted JiatingList (server-side) ordered by medals descending.
  // Non-numeric or errored entries are treated as lowest.
  const sortedJiatingList = [...JiatingList].slice().sort((a, b) => {
    const aData = medalsByJiating[a.name];
    const bData = medalsByJiating[b.name];
    const aCount = (aData && typeof aData === 'object' && typeof aData.medals === 'number') ? aData.medals : Number.NEGATIVE_INFINITY;
    const bCount = (bData && typeof bData === 'object' && typeof bData.medals === 'number') ? bData.medals : Number.NEGATIVE_INFINITY;
    if (bCount === aCount) return a.id - b.id;
    return bCount - aCount;
  });

  return <JiatingPageComponent initialMedalsByJiating={medalsByJiating} initialSortedJiatingList={sortedJiatingList} />;
}

export const metadata: Metadata = {
  title: "TAMU CSA - Jiatings",
  description: "Meet the Jiatings of the Chinese Student Association at TAMU!",
};