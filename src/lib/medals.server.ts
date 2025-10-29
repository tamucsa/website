import { JTMedalCount } from "@/utils/types";

/**
 * Fetch JTO medals via the internal API route (/api/jto/[jt]).
 * This keeps the server-side page code calling a local route instead of an external host.
 */
export async function getJTOMedals(jiatingName: string): Promise<JTMedalCount> {
  // Construct an absolute base URL. Prefer an explicit env var, fall back to Vercel-provided
  // hostname, and finally localhost for local dev.
  let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  if (!baseUrl) {
    if (process.env.VERCEL_URL) baseUrl = `https://${process.env.VERCEL_URL}`;
    else baseUrl = "http://localhost:3000";
  }

  const url = `${baseUrl.replace(/\/+$/, "")}/api/jto/${encodeURIComponent(jiatingName)}`;

  const res = await fetch(url, { cache: "no-store" });
  let payload: any;
  try {
    payload = await res.json();
  } catch (err) {
    throw new Error(`Failed parsing JSON response from internal JTO API for '${jiatingName}': ${err}`);
  }

  if (!res.ok) {
    // Prefer explicit error message from API if available
    const msg = payload?.error ?? `status ${res.status}`;
    throw new Error(`Internal JTO API error for '${jiatingName}': ${msg}`);
  }

  // The API returns { jiating, medals } — normalize to JTMedalCount
  return {
    jiatingName: payload.jiating ?? jiatingName,
    medals: typeof payload.medals === "number" ? payload.medals : Number(payload.medals) || 0,
  } as JTMedalCount;
}