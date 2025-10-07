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