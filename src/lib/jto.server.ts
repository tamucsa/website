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

    // return Jiating name and medals value (adjust indices if sheet layout changes)
    return [foundCol[0], foundCol[10]] as [string, number];
}

export default fetchMedals;
