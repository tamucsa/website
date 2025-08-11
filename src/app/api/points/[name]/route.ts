import { type NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export type CacheEntry = {
    name: string;
    totalPoints: number;
    csaPoints: number;
    jtSportsPoints: number;
    semiformalEligibility: string;
    gmCredits: number;
    threePtEventCredit: string;
    timestamp: number;
}

// cache object: key = row number, value = Cache Entry
const cache: Record<string, CacheEntry> = {};
const CACHE_DURATION = 1000 * 60 * 10;

async function fetchRowByName(name: string) {
    // set up authentication for Google Sheets API
    const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL,
            key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    });

    // Sets up Google Sheets API client and fetches entire sheet
    const sheets = google.sheets({ version: "v4", auth });
    const range = "Fall 24-25 Points!A2:I400";
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range,
    });

    // Retrieves list of rows & searches for matching name (not case-sensitive)
    const rows = res.data.values || [];
    const foundRow = rows.find((row: string[]) => row[0]?.toLowerCase() === name.toLowerCase());
    // If no matching row is found, throw an error
    if (!foundRow) {
        throw new Error(`Name "${name}" not found`, { cause: 404 });
    }

    // Debugging (Prints contents of found row)
    // console.log(`${name}: ${JSON.stringify(foundRow)}`);
    //return Name, Total Points, CSA points, JT & Sport Points, Winter Formal Eligibility (T/F), GM Credits, and 3-Point Event Credit (T/F)
    return [foundRow[0], foundRow[3], foundRow[4], foundRow[5], foundRow[6], foundRow[7], foundRow[8]] as [string, number, number, number, string, number, string];
}

export async function GET(request: NextRequest, {params}: { params: Promise<{ name: string }> }) {
    const inputName = (await params).name;

    const now = Date.now();
    const cached = cache[inputName];
    if (cached && now - cached.timestamp < CACHE_DURATION) {
        // return NextResponse.json({ total: cached.total, csa: cached.csa, jt: cached.jt, cached: true });
    }

    try {
        const [name, totalPoints, csaPoints, jtSportsPoints, semiformalEligibility, gmCredits, threePtEventCredit] = await fetchRowByName(inputName);
        cache[inputName] = { name: name, totalPoints: totalPoints, csaPoints: csaPoints, jtSportsPoints: jtSportsPoints, semiformalEligibility: semiformalEligibility, gmCredits: gmCredits, threePtEventCredit: threePtEventCredit, timestamp: now };
        return NextResponse.json({ name: name, totalPoints: totalPoints, csaPoints: csaPoints, jtSportsPoints: jtSportsPoints, semiformalEligibility: semiformalEligibility, gmCredits: gmCredits, threePtEventCredit: threePtEventCredit, cached: false }, {status: 200});
    } catch (error: any) {
        if (error.cause === 404) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }
        console.error("Error fetching data from Google Sheets:", error);
        return NextResponse.json({ error: error.message || "Failed to fetch data" }, { status: 500 });
    }
}