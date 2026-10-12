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
                },
                {
                    type: "parent",
                    jiating: { name: "Miffy" },
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
                },
                {
                    type: "parent",
                    jiating: { name: "Peach Riot" },
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
                },
                {
                    type: "parent",
                    jiating: { name: "Smiski" },
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
                },
                {
                    type: "parent",
                    jiating: { name: "Peach Riot" },
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
                },
                {
                    type: "parent",
                    jiating: { name: "Smiski" },
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
                },
                {
                    type: "parent",
                    jiating: { name: "Peach Riot" },
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
                },
                {
                    type: "parent",
                    jiating: { name: "Dimoo" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 21,
        name: "Justin Zhang",
        major: "Biology '28",
        instagram: "just_zhangg",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Miffy" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 22,
        name: "Aryan Bandi",
        major: "Computer Science '29",
        instagram: "aryann.bandi",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Smiski" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 23,
        name: "Alysa Zhao",
        major: "Computer Science '28",
        instagram: "alysxzhao",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Miffy" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 24,
        name: "Ethan Mak",
        major: "Management Information Systems '29",
        instagram: "ethanmak1",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Mofusand" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 25,
        name: "Alice Yu",
        major: "Nuclear Engineering '29",
        instagram: "whyamihere_alice._",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Mofusand" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 26,
        name: "Kevinn Tran",
        major: "Computer Science '27",
        instagram: "_kevinntran_",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Dimoo" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 27,
        name: "Alexis Carmel",
        major: "Psychology '28",
        instagram: "alexis_violinist",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Smiski" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 28,
        name: "Lanxi Xu",
        major: "Computer Science '28",
        instagram: "lanshi.i",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Miffy" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 29,
        name: "Vivian Xu",
        major: "Management Information Systems '29",
        instagram: "kuerilakkuma",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Mofusand" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 30,
        name: "William Vu",
        major: "Biochemistry '27",
        instagram: "wills.vu",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Hirono" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 31,
        name: "Ethan Lam",
        major: "Political Science '27",
        instagram: "ethan.lamb74",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Hirono" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 32,
        name: "Bonnie Tsoi",
        major: "Financial Planning  '28",
        instagram: "bxing0930",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Hirono" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 33,
        name: "Manya Tiwari",
        major: "Biology '28",
        instagram: "manyatiwari_",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Dimoo" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 34,
        name: "Reilly Mize",
        major: "Genetics '28",
        instagram: "r_mize",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Peach Riot" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 35,
        name: "Miky Zheng",
        major: "Accounting '29",
        instagram: "mikii.996",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Mofusand" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 36,
        name: "Evan Ying",
        major: "Biology '28",
        instagram: "evan_ying_",
        yearEntries: {
            "2026-2027": [
                {
                    type: "parent",
                    jiating: { name: "Dimoo" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    
]