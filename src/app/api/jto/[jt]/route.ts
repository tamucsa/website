import { type NextRequest, NextResponse } from "next/server";
import fetchMedals from "@/lib/jto.server";

export type CacheEntry = {
    jiating: string;
    medals: number;
    timestamp: number;
}

// cache object: key = row number, value = Cache Entry
const cache: Record<string, CacheEntry> = {};
const CACHE_DURATION = 1000 * 60 * 10;

// fetchMedals is imported from shared server helper (src/lib/jto.server.ts)

export async function GET(request: NextRequest, { params }: { params: Promise<{ jt?: string }> }) {
    // Next.js route parameter name comes from the filename: [jt]
    // `params` may be a Promise in some Next.js runtime shapes — await it before reading properties.
    const resolvedParams = await params;
    const inputJiating = resolvedParams?.jt;

    if (!inputJiating) {
        return NextResponse.json({ error: "Missing jiating parameter" }, { status: 400 });
    }

    const now = Date.now();
    const cached = cache[inputJiating];
    if (cached && now - cached.timestamp < CACHE_DURATION) {
        return NextResponse.json({ jiating: inputJiating, medals: cached.medals, cached: true }, {status: 200, headers: { "X-Cache": "HIT" }});
    }

    try {
        const [jiating, medals] = await fetchMedals(inputJiating);
        cache[jiating] = { jiating: jiating, medals: medals, timestamp: now };
        return NextResponse.json({ jiating, medals, cached: false }, { status: 200 });
    } catch (error: any) {
        // If the fetchMedals threw a 404-like error, preserve that status
        if (error?.cause === 404) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }
        console.error("Error fetching data from Google Sheets:", error);
        return NextResponse.json({ error: error?.message ?? "Failed to fetch data" }, { status: 500 });
    }
}