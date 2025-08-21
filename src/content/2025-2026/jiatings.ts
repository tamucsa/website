import { Jiating } from "@/utils/types";
import { MegateamList } from "@/content/2025-2026/megateam";

// 2025-2026 Parents!!
    
export const JiatingList: Jiating[] = [
    {
        id: 1,
        name: "Usagi",
        instagram: "usagi", // change
        years: "2025-2026",
        parents: [
            MegateamList.find(parent => parent.name === "Dominic Hidayat")!,
            MegateamList.find(parent => parent.name === "Peter Ha")!,
            MegateamList.find(parent => parent.name === "Zachary Yang")!,
            MegateamList.find(parent => parent.name === "Ethan Lam")!
        ]
    },
    {
        id: 2,
        name: "Chiikawa",
        instagram: "chiikawa", // change
        years: "2025-2026",
        parents: [
            MegateamList.find(parent => parent.name === "Christian Argenbright")!,
            MegateamList.find(parent => parent.name === "Eric Liu")!,
            MegateamList.find(parent => parent.name === "Kailee Yee")!,
            MegateamList.find(parent => parent.name === "Sydney Guy")!
        ]
    },
    {
        id: 3,
        name: "Kurimanju",
        instagram: "kurimanju", // change
        years: "2025-2026",
        parents: [
            MegateamList.find(parent => parent.name === "Maximillian Hsu")!,
            MegateamList.find(parent => parent.name === "Ray Cheng")!,
            MegateamList.find(parent => parent.name === "Akhil Kasamsetty")!,
            MegateamList.find(parent => parent.name === "Matthew Yen")!
        ]
    },
    {
        id: 4,
        name: "Momonga",
        instagram: "momonga", // change
        years: "2025-2026",
        parents: [
            MegateamList.find(parent => parent.name === "Erith Won")!,
            MegateamList.find(parent => parent.name === "Reilly Mize")!,
            MegateamList.find(officer => officer.name === "Sarah Ward")!,
            MegateamList.find(officer => officer.name === "Lia Chen")!
        ]
    },
    {
        id: 5,
        name: "Rakko",
        instagram: "rakko", // change
        years: "2025-2026",
        parents: [
            MegateamList.find(parent => parent.name === "Keilon Carrier")!,
            MegateamList.find(parent => parent.name === "Steve Zhang")!,
            MegateamList.find(parent => parent.name === "Evan Chang")!,
            MegateamList.find(parent => parent.name === "Kody Chu")!
        ]
    },
    {
        id: 6,
        name: "Hachiware",
        instagram: "hachiware", // change
        years: "2025-2026",
        parents: [
            MegateamList.find(parent => parent.name === "Jamie Lee")!,
            MegateamList.find(parent => parent.name === "Vivian Chen")!,
            MegateamList.find(parent => parent.name === "Peixuan Jiang")!,
            MegateamList.find(parent => parent.name === "Jacob Pham")!
        ]
    }
]