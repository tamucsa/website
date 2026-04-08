import { Megateam } from "@/utils/types";
import { JiatingList } from "@/content/2025-2026/jiatings";

// 2025-2026 Officers!!

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
        name: "Sarah Ward",
        major: "Chemical Engineering '26",
        instagram: "sarah_shrugs",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Co-President",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 2,
        name: "Ruth Jasadiredja",
        major: "Computer Engineering '27",
        instagram: "ruth.ie_ruth",
        yearEntries: {
            "2025-2026": [
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
        name: "Keiko Cheung",
        major: "Management Information Systems '27",
        instagram: "keik0_cheung",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Vice President Internal",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 4,
        name: "Dominic Hidayat",
        major: "Chemical Engineering '28",
        instagram: "domomh.ig",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Vice President External",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 5,
        name: "Reilly Mize",
        major: "Genetics '28",
        instagram: "r__mize",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Secretary",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 6,
        name: "Kody Chu",
        major: "Accounting '28",
        instagram: "kody.chu",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Treasurer",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 7,
        name: "Akhil Kasamsetty",
        major: "Computer Science '28",
        instagram: "akhilk999",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Public Relations Chair",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Kurimanju" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 8,
        name: "Bao Nguyen",
        major: "Food Science '28",
        instagram: "bbnbao",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Public Relations Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 9,
        name: "Grace Zhou",
        major: "History '26",
        instagram: "glz.c4",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Event Coordinator",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 10,
        name: "Lia Chen",
        major: "Accounting '27",
        instagram: "lcennies",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Event Coordinator",
                    rawImgOrientation: "vertical"
                },
                {
                    type: "parent",
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 11,
        name: "Keilon Carrier",
        major: "Physics '28",
        instagram: "starkeilon",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Fundraising Chair",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 12,
        name: "Steve Zhang",
        major: "Economics '28",
        instagram: "dongkai.zhang06",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Fundraising Chair",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 13,
        name: "Ryan Kha",
        major: "Computer Science '26",
        instagram: "ryankha03",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Sports Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 14,
        name: "Kevinn Tran",
        major: "Computer Science '27",
        instagram: "cantguardkev",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Sports Chair",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 15,
        name: "Hecate Hu",
        major: "Civil Engineering '28",
        instagram: "te_not_tea",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Graphics Chair",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 16,
        name: "Sydney Guy",
        major: "Biomedical Sciences '27",
        instagram: "squidny0",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Graphics Chair",
                    rawImgOrientation: "horizontal"
                },
                {
                    type: "parent",
                    jiating: { name: "Chiikawa" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 17,
        name: "Emily Chen",
        major: "Accounting '28",
        instagram: "cmilychen",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Culture Chair",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 18,
        name: "Bonnie Tsoi",
        major: "Financial Planning '28",
        instagram: "bxing0930",
        yearEntries: {
            "2025-2026": [
                {
                    type: "officer",
                    position: "Historian",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 19,
        name: "Peter Ha",
        major: "Electrical Engineering '28",
        instagram: "_xpeterh",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 20,
        name: "Zachary Yang",
        major: "Accounting '28",
        instagram: "zach_.y",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 21,
        name: "Ethan Lam",
        major: "Political Science '27",
        instagram: "ethan.lamb74",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 22,
        name: "Christian Argenbright",
        major: "Biomedical Engineering '28",
        instagram: "chrisargenbright24",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Chiikawa" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 23,
        name: "Eric Liu",
        major: "Manufacturing and Mechanical Engineering Technology '28",
        instagram: "el1136_",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Chiikawa" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 24,
        name: "Kailee Yee",
        major: "Environmental Engineering '27",
        instagram: "kaileegotyeeted",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Chiikawa" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 25,
        name: "Maximillian Hsu",
        major: "Computer Science '27",
        instagram: "ximabub",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Kurimanju" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 26,
        name: "Ray Cheng",
        major: "Computer Science '28",
        instagram: "disar_ray_",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Kurimanju" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 27,
        name: "Matthew Yen",
        major: "Management Information Systems '28",
        instagram: "morthew_yen",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Kurimanju" },
                    rawImgOrientation: "vertical"
                },
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 28,
        name: "Erith Won",
        major: "Psychology '26",
        instagram: "jaeyllyfish",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 29,
        name: "Evan Chang",
        major: "Computer Engineering '28",
        instagram: "hypeplane07",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "vertical"
                },
                {
                    type: "intern",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 30,
        name: "Jamie Lee",
        major: "Architecture '27",
        instagram: "j_lee.h",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "vertical"
                }
            ]
        },
    },
    {
        id: 31,
        name: "Vivian Chen",
        major: "Business '28", //change
        instagram: "vvivianchenn",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "vertical"
                }
            ]
        },
    },
    {
        id: 32,
        name: "Peixuan Jiang",
        major: "Biological Engineering '25",
        instagram: "peiixxuann",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "vertical"
                }
            ]
        },
    },
    {
        id: 33,
        name: "Jacob Pham",
        major: "Mathematics '28",
        instagram: "phamtjacob",
        yearEntries: {
            "2025-2026": [
                {
                    type: "parent",
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 34,
        name: "Miky Zheng",
        major: "Economics '29",
        instagram: "mikii.996",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 35,
        name: "Evangeline Su",
        major: "General Engineering '29",
        instagram: "eevee._.chu954",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 36,
        name: "Dylan Mire",
        major: "General Engineering '29",
        instagram: "dylan.jpegg",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 37,
        name: "Kai Hammel",
        major: "International Affairs '29",
        instagram: "aka_hammel",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 38,
        name: "Andrew Zhang",
        major: "General Engineering '29",
        instagram: "kanji_gawa",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 39,
        name: "Marho Akpenyi",
        major: "Biomedical Engineering '29",
        instagram: "c.u.2marh0",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 40,
        name: "Harrison Li",
        major: "Computer Science '28",
        instagram: "harrisonli0531",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "horizontal"
                }
            ]
        }
    },
    {
        id: 41,
        name: "Shangqing Li",
        major: "General Engineering '29",
        instagram: "shangqing_li",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 42,
        name: "Chloe Cheong",
        major: "Kinesiology '29",
        instagram: "ce_cheong",
        yearEntries: {
            "2025-2026": [
                {
                    type: "intern",
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
]