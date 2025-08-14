export interface Officer {
    id: number;
    name: string;
    position: string;
    major: string;
    instagram: string;
    rawImgOrientation: "horizontal" | "vertical";
}

export interface Album {
    id: number;
    title: string;
    description?: string;
    coverImage?: string;
    url: string;
    years: string;
    groupInfo?: { // Optional field for grouping albums;
        group: "GM" | "Jiating Reveal" | "Pumpkin Patch" | "Ni-Howdy" | "Formals"
        titleForGroup?: string // Optional field for providing a different title for the group;
    };
}