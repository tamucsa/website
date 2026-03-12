import { google } from "googleapis";

export async function fetchMedals(jiating: string) {
    // set up authentication for Google Sheets API
    const auth = new google.auth.JWT({
            email: process.env.GOOGLE_CLIENT_EMAIL_JTOMEDAL,
            key: process.env.GOOGLE_PRIVATE_KEY_JTOMEDAL?.replace(/\\n/g, '\n'),
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    });

    // Sets up Google Sheets API client and fetches entire sheet
    const sheets = google.sheets({ version: "v4", auth });
    const range = "Sheet1!A1:G13";
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId: "1pNp0Zw8SVQb2KWw6RKRjuzSfOf0reLVLDpSRWRDH65U",
        range,
    });

    // Retrieves list of rows & searches for matching name (not case-sensitive)
    const rows = (res.data.values ?? []) as any[][];
    const headerRow = (rows[0] ?? []).map((v) => String(v));
    const colIndex = headerRow.findIndex(v => v.toLowerCase() === jiating.toLowerCase());
    // If no matching column is found, throw an error.
    if (colIndex === -1) {
        throw new Error(`Name "${jiating}" not found`, { cause: 404 });
    }

    // Find the row labeled "Total Medals" in column A and read this jiating's value from that row.
    const totalRow = rows.find((r) => String(r?.[0] ?? "").trim().toLowerCase() === "total medals");
    if (!totalRow) {
        throw new Error("Could not find 'Total Medals' row in sheet");
    }

    const medalValue = Number(totalRow[colIndex]);
    if (!Number.isFinite(medalValue)) {
        throw new Error(`Invalid medal value for \"${jiating}\"`);
    }

    // Return canonical jiating name from header and parsed medal count.
    return [headerRow[colIndex], medalValue] as [string, number];
}

export default fetchMedals;
