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
                    position: "Co-President",
                    rawImgOrientation: "horizontal"
                },
                {
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "horizontal" //change
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
                    position: "Vice President External",
                    rawImgOrientation: "horizontal"
                },
                {
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
                    position: "Secretary",
                    rawImgOrientation: "horizontal"
                },
                {
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "horizontal" //change
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
                    position: "Treasurer",
                    rawImgOrientation: "horizontal"
                },
                {
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "horizontal" //change
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
                    position: "Public Relations Chair",
                    rawImgOrientation: "horizontal"
                },
                {
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
                    position: "Event Coordinator",
                    rawImgOrientation: "vertical"
                },
                {
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "horizontal" //change
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
                    position: "Fundraising Chair",
                    rawImgOrientation: "horizontal"
                },
                {
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "horizontal" //change
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
                    position: "Fundraising Chair",
                    rawImgOrientation: "vertical"
                },
                {
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "horizontal" //change
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
                    position: "Graphics Chair",
                    rawImgOrientation: "horizontal"
                },
                {
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
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "horizontal" //change
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
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "horizontal" //change
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
                    jiating: { name: "Usagi" },
                    rawImgOrientation: "horizontal" //change
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
                    jiating: { name: "Kurimanju" },
                    rawImgOrientation: "vertical"
                }
            ]
        }
    },
    {
        id: 27,
        name: "Matthew Yen",
        major: "Finance '28",
        instagram: "morthew_yen",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Kurimanju" },
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
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "horizontal" //change
                }
            ]
        }
    },
    {
        id: 29,
        name: "Lia Chen",
        major: "Accounting '27",
        instagram: "lcennies",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Momonga" },
                    rawImgOrientation: "horizontal" //change
                }
            ]
        }
    },
    {
        id: 30,
        name: "Evan Chang",
        major: "Computer Engineering '28",
        instagram: "hypeplane07",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Rakko" },
                    rawImgOrientation: "horizontal" //change
                }
            ]
        }
    },
    {
        id: 31,
        name: "Jamie Lee",
        major: "Architecture '27",
        instagram: "j_lee.h",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "horizontal" //change
                }
            ]
        },
    },
    {
        id: 32,
        name: "Vivian Chen",
        major: "Business '28", //change
        instagram: "vvivianchenn",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "vertical" //change
                }
            ]
        },
    },
    {
        id: 33,
        name: "Peixuan Jiang",
        major: "Biological Engineering '25",
        instagram: "peiixxuann",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "horizontal" //change
                }
            ]
        },
    },
    {
        id: 34,
        name: "Jacob Pham",
        major: "Mathematics '28",
        instagram: "phamtjacob",
        yearEntries: {
            "2025-2026": [
                {
                    jiating: { name: "Hachiware" },
                    rawImgOrientation: "horizontal" //change
                }
            ]
        }
    }
]