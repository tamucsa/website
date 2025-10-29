import { type NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export type CacheEntry = {
    jiating: string;
    medals: number;
    timestamp: number;
}

// cache object: key = row number, value = Cache Entry
const cache: Record<string, CacheEntry> = {};
const CACHE_DURATION = 1000 * 60 * 10;

async function fetchMedals(jiating: string) {
    // set up authentication for Google Sheets API
    const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL_JTOMEDAL,
            key: process.env.GOOGLE_PRIVATE_KEY_JTOMEDAL?.replace(/\\n/g, '\n'),
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    });

    // Sets up Google Sheets API client and fetches entire sheet
    const sheets = google.sheets({ version: "v4", auth });
    const range = "Sheet1!B1:G11";
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: "1XmtJIzNyXW7XqRVLMHbaluHVwhXXP_NwGLTlg2C7nnE",
        range,
    });

    // Retrieves list of rows & searches for matching name (not case-sensitive)
    const rows = (res.data.values ?? []) as any[][];
    const headerRow = (rows[0] ?? []).map(v => String(v));
    const colIndex = headerRow.findIndex(v => v.toLowerCase() === jiating.toLowerCase());
    const foundCol = colIndex !== -1 ? rows.map(r => r?.[colIndex]) : undefined;
    // If no matching col is found, throw an error
    if (!foundCol) {
        throw new Error(`Name "${jiating}" not found`, { cause: 404 });
    }

    // Debugging (Prints contents of found col)
    // console.log(`${name}: ${JSON.stringify(foundCol)}`);
    //return Jiating, Medals
    return [foundCol[0], foundCol[10]] as [string, number];
}

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