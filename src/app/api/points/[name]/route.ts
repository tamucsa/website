import { type NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export type CacheEntry = {
    name: string;
    jt: string;
    totalPoints: number;
    csaPoints: number;
    jtSportsPoints: number;
    concessionNumber: number;
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
    const range = "Fall 25-26 Points!A2:L215";
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
    //return Name, JT, Total Points, CSA points, JT & Sport Points, Concession Number
    return [foundRow[0], foundRow[2],foundRow[3], foundRow[4], foundRow[5], foundRow[10]] as [string, string, number, number, number, number];
}

export async function GET(request: NextRequest, {params}: { params: Promise<{ name: string }> }) {
    const inputName = (await params).name;

    const now = Date.now();
    const cached = cache[inputName];
    if (cached && now - cached.timestamp < CACHE_DURATION) {
        return NextResponse.json({ name: cached.name, jt: cached.jt, totalPoints: cached.totalPoints, csaPoints: cached.csaPoints, jtSportsPoints: cached.jtSportsPoints, concessionNumber: cached.concessionNumber, cached: true }, {status: 200, headers: { "X-Cache": "HIT" }});
    }

    try {
        const [name, jt, totalPoints, csaPoints, jtSportsPoints, concessionNumber] = await fetchRowByName(inputName);
        cache[inputName] = { name: name, jt: jt, totalPoints: totalPoints, csaPoints: csaPoints, jtSportsPoints: jtSportsPoints, concessionNumber: concessionNumber, timestamp: now };
        return NextResponse.json({ name: name, jt: jt, totalPoints: totalPoints, csaPoints: csaPoints, jtSportsPoints: jtSportsPoints, concessionNumber: concessionNumber, cached: false }, {status: 200});
    } catch (error: any) {
        if (error.cause === 404) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }
        console.error("Error fetching data from Google Sheets:", error);
        return NextResponse.json({ error: error.message || "Failed to fetch data" }, { status: 500 });
    }
}