import { Megateam } from "@/utils/types";
import { JiatingList } from "@/content/2026-2027/jiatings";

// 2026-2027 Officers!!

// Resolve references to jiatings in MegateamList
export function resolveMegateamJiatingRefs(MegateamList: any[], JiatingList: any[]) {
    for (const member of MegateamList) {
        for (const entryArr of Object.values(member.yearEntries)) {
            for (const entry of entryArr as any[]) {
                if (entry.jiating && entry.jiating.name) {
                    const found = JiatingList.find(j => j.name === entry.jiating.name);
                    if (found) {
                        entry.jiating = found;
                    }
                }
            }
        }
    }
}

export const MegateamList: Megateam[] = [
    {
        id: 1,
        name: "Keiko Cheung",
        major: "Management Information Systems '27",
        instagram: "keik0_cheung",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Co-President",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Hirono" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 2,
        name: "Dominic Hidayat",
        major: "Chemical Engineering '28",
        instagram: "domomh.ig",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Co-President",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 3,
        name: "Matthew Yen",
        major: "Management Information Systems '28",
        instagram: "morthew_yen",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Vice President Internal",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 4,
        name: "Ella Li",
        major: "Chemical Engineering '29",
        instagram: "shangqing_li",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Vice President External",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 5,
        name: "Akhil Kasamsetty",
        major: "Computer Science '28",
        instagram: "akhilk999",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Secretary",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 6,
        name: "Lia Chen",
        major: "Accounting '27",
        instagram: "lcennies",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Treasurer",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 7,
        name: "Monica Zhang",
        major: "Electrical Engineering '28",
        instagram: "monicaa_zhang",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Event Coordinator",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 8,
        name: "Evan Chang",
        major: "Computer Engineering '28",
        instagram: "hypeplane07",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Event Coordinator",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 9,
        name: "Chloe Cheong",
        major: "Kinesiology '29",
        instagram: "ce_cheong",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Public Relations",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 10,
        name: "Harrison Li",
        major: "Computer Science '28",
        instagram: "harrisonli0531",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Public Relations",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 11,
        name: "El Wu",
        major: "Astrophysics '29",
        instagram: "_seasofjupiter_",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Graphics Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 12,
        name: "Evie Su",
        major: "Chemical Engineering '29",
        instagram: "eevee._.chu964",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Graphics Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 13,
        name: "Kylie Moon",
        major: "Kinesiology '29",
        instagram: "myliek_",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Historian",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 14,
        name: "Kai Hammel",
        major: "International Affairs '27",
        instagram: "aka_hammel",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Historian and Dance Coordinator",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 15,
        name: "Troy Donaghy",
        major: "Electrical Engineering '29",
        instagram: "troy.donaghyy",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Sports Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 16,
        name: "Andrew Zhang",
        major: "Computer Science '29",
        instagram: "kanji_gawa",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Sports Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 17,
        name: "Keilon Carrier",
        major: "Physics '28",
        instagram: "starkeilon",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Fundraising Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 18,
        name: "Dylan Mire",
        major: "Electrical Engineering '29",
        instagram: "dylann_mire",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Fundraising Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 19,
        name: "Maximillian Hsu",
        major: "Computer Science '27",
        instagram: "ximabub",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Philanthropy Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 20,
        name: "Emily Dong",
        major: "Business, Pre-med '29",
        instagram: "emilyysdong",
        yearEntries: {
            "2026-2027": [
                {
                    type: "officer",
                    position: "Culture Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
]