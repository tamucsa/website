export interface Megateam {
    id: number; //unique ID for each megateam member
    name: string;
    major: string;
    instagram: string;
    yearEntries: { // all of the entries
        [year: string]: Array<OfficerRole | ParentRole>; // list of Officer, Parent, or both for that year
    }
}

export interface OfficerRole {
    position: string;
    rawImgOrientation: "horizontal" | "vertical";
}

export interface ParentRole {
    jiating: Jiating | { name: string };
    rawImgOrientation: "horizontal" | "vertical";
}

export interface Jiating {
    id: number;
    name: string;   
    parents: [Megateam, Megateam, Megateam, Megateam];
    instagram: string;
    years: string;
    groupImgOrientation: "horizontal" | "vertical";
}

export interface Album {
    id: number;
    title: string;
    description?: string;
    coverImage?: string;
    url: string;
    years: string;
    date?: string; // Optional field for the date of the event or album
    groupInfo?: Array<{
        group: "Howdy Week" | "GM" | "Jiating Reveal" | "Pumpkin Patch" | "Ni-Howdy" | "Formals" | "VSA Mixer" | "PhilSA Mixer" | "EPIC Mixer" | "TASA Mixer" | "SASE Mixer";
        titleForGroup?: string; // Optional field for providing a different title for the group
    }>;
}

export interface GMSlideshow {
    title: string;
    baseUrl: string; // Base URL without query parameters
    years: string;
    slug: string;
    date?: string; // Optional field for the date of the GM
}

export interface JTOEvent {
    title: string;
    semester: "Fall 2025" | "Spring 2025";
    oneDay: boolean; // True if the event is a one-day event, false if it spans multiple days
    dayEntries: Array<{
        title: string;
        date: string; // Date in Month Day format (e.g., "Oct 3rd")
        day: string; // Day of the week (e.g., "Fri")
        time: string; // Time in HH:MMam/pm - HH:MMam/pm format (e.g., "6:30pm - 8:30pm")
    }>;
    location: string;
    completed: boolean;
    placements?: {
        [place: number]: Jiating | undefined; // e.g., "1st": JiatingList.find(jiating => jiating.name === "Hachiware")
    }
}

export interface NiHowdySchool {
    school: string;
    shortname: string;
    instagram: string;
}

export interface JTMedalCount {
    jiatingName: string;
    medals: number;
}