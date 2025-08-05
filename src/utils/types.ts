export interface Officer {
    id: number;
    name: string;
    position: string;
    major: string;
    instagram: string;
}

export interface Album {
    id: number;
    title: string;
    description?: string;
    coverImage?: string;
    url: string;
    years: string;
}