import { JTOEvent } from "@/utils/types";
import { JiatingList } from "@/content/2025-2026/jiatings";

export const Spring2026JTOList: JTOEvent[] = [

    // Spring 2026 JTO Events
    
    {
        title: "Ping Pong",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Pickleball",
                date: "Feb 7th",
                day: "Sat",
                time: "2:00pm - 4:00pm"
            }
        ],
        location: "The Stack",
        completed: true,
        placements: {
            1: JiatingList.find(jiating => jiating.name === "Kurimanju"),
            2: JiatingList.find(jiating => jiating.name === "Usagi"),
            3: JiatingList.find(jiating => jiating.name === "Rakko")
        }
    },
    {
        title: "Valorant",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Valorant",
                date: "Feb 13th",
                day: "Fri",
                time: "8:00pm - 10:00pm"
            },
        ],
        location: "Discord",
        completed: true,
        placements: {
            1: JiatingList.find(jiating => jiating.name === "Kurimanju"),
            2: JiatingList.find(jiating => jiating.name === "Momonga"),
            3: JiatingList.find(jiating => jiating.name === "Kurimanju")
        }
    },
    {
        title: "Clash Royale",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Clash Royale",
                date: "Feb 21th",
                day: "Sat",
                time: "8:00pm - 10:00pm"
            }
        ],
        location: "Discord",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Kurimanju"),
        //     2: JiatingList.find(jiating => jiating.name === "Hachiware"),
        //     3: JiatingList.find(jiating => jiating.name === "Usagi")
        // }
    },
    {
        title: "Dodgeball",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Dodgeball",
                date: "Feb 22rd",
                day: "Sun",
                time: "12:30pm - 1:30pm"
            }
        ],
        location: "Main Rec Center",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Momonga"),
        //     2: JiatingList.find(jiating => jiating.name === "Kurimanju"),
        //     3: JiatingList.find(jiating => jiating.name === "Kurimanju")
        // }
    },
    {
        title: "Volleyball",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Volleyball",
                date: "Mar 1st",
                day: "Sun",
                time: "12:30pm - 2:30pm"
            }
        ],
        location: "Main Rec Center",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Usagi"),
        //     2: JiatingList.find(jiating => jiating.name === "Kurimanju"),
        //     3: JiatingList.find(jiating => jiating.name === "Chiikawa")
        // }
    },
    {
        title: "Badminton",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Badminton",
                date: "Mar 15th",
                day: "Sun",
                time: "12:30pm - 1:30pm"
            }
        ],
        location: "Main Rec Center",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Usagi"),
        //     2: JiatingList.find(jiating => jiating.name === "Rakko"),
        //     3: JiatingList.find(jiating => jiating.name === "Momonga")
        // }
    },
    {
        title: "Basketball",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Basketball",
                date: "Mar 28th",
                day: "Sat",
                time: "12:30pm - 2:30pm"
            }
        ],
        location: "A&M United Methodist Church",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Momonga"),
        //     2: JiatingList.find(jiating => jiating.name === "Kurimanju"),
        //     3: JiatingList.find(jiating => jiating.name === "Hachiware")
        // }
    },
    {
        title: "Pickleball",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Pickleball",
                date: "Mar 29th",
                day: "Sun",
                time: "12:30pm - 1:30pm"
            }
        ],
        location: "Omar Smith Courts",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Kurimanju"),
        //     2: JiatingList.find(jiating => jiating.name === "Hachiware"),
        //     3: JiatingList.find(jiating => jiating.name === "Momonga")
        // }
    },
    {
        title: "Tennis",
        semester: "Spring 2026",
        oneDay: true,
        dayEntries: [
            {
                title: "Tennis",
                date: "Apr 4th",
                day: "Sat",
                time: "12:30pm - 1:30pm"
            },
        ],
        location: "Omar Smith Courts",
        completed: false,
        // placements: {
        //     1: JiatingList.find(jiating => jiating.name === "Kurimanju"),
        //     2: JiatingList.find(jiating => jiating.name === "Momonga"),
        //     3: JiatingList.find(jiating => jiating.name === "Hachiware")
        // }
    }
];