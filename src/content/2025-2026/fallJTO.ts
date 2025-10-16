import { JTOEvent } from "@/utils/types";
import { JiatingList } from "@/content/2025-2026/jiatings";

export const Fall2025JTOList: JTOEvent[] = [

    // Fall 2025 JTO Events
    
    {
        title: "Pickleball",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Pickleball",
                date: "Oct 3rd",
                day: "Fri",
                time: "6:30pm - 8:30pm"
            }
        ],
        location: "Omar Smith Tennis Court",
        completed: true,
        placements: {
            1: JiatingList.find(jiating => jiating.name === "Hachiware"),
            2: JiatingList.find(jiating => jiating.name === "Usagi"),
            3: JiatingList.find(jiating => jiating.name === "Kurimanju")
        }
    },
    {
        title: "League of Legends",
        semester: "Fall 2025",
        oneDay: false,
        dayEntries: [
            {
                title: "Seeding",
                date: "Oct 12th",
                day: "Sun",
                time: "6:00pm - 10:00pm"
            },
            {
                title: "Official",
                date: "Oct 13th",
                day: "Mon",
                time: "6:00pm - 10:00pm"
            }
        ],
        location: "Discord",
        completed: true,
        placements: {
            1: JiatingList.find(jiating => jiating.name === "Hachiware"),
            2: JiatingList.find(jiating => jiating.name === "Kurimanju"),
            3: JiatingList.find(jiating => jiating.name === "Usagi")
        }
    },
    {
        title: "Volleyball",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Official",
                date: "Oct 19th",
                day: "Sun",
                time: "12:30pm - 2:30pm"
            }
        ],
        location: "Main Rec Center",
        completed: false,
    },
    {
        title: "Valorant",
        semester: "Fall 2025",
        oneDay: false,
        dayEntries: [
            {
                title: "Seeding",
                date: "Oct 21st",
                day: "Tues",
                time: "6:00pm - 8:00pm"
            },
            {
                title: "Official",
                date: "Oct 22nd",
                day: "Wed",
                time: "6:00pm - 8:00pm"
            }
        ],
        location: "Discord",
        completed: false,
    },
    {
        title: "Dodgeball",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Dodgeball",
                date: "Oct 26th",
                day: "Sun",
                time: "12:00pm - 1:00pm"
            }
        ],
        location: "Main Rec Center",
        completed: false,
    },
    {
        title: "Badminton",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Badminton",
                date: "Nov 7th",
                day: "Fri",
                time: "6:00pm - 8:00pm"
            }
        ],
        location: "Main Rec Center",
        completed: false,
    },
    {
        title: "Food Competition",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Food Competition",
                date: "Nov 9th",
                day: "Sun",
                time: "12:00pm - 2:00pm"
            }
        ],
        location: "Sushi Masa",
        completed: false,
    },
    {
        title: "Basketball",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Basketball",
                date: "Nov 15th",
                day: "Sat",
                time: "12:30pm - 2:30pm"
            }
        ],
        location: "A&M United Methodist Church",
        completed: false,
    },
    {
        title: "Brawl Stars",
        semester: "Fall 2025",
        oneDay: true,
        dayEntries: [
            {
                title: "Brawl Stars",
                date: "Nov 19th",
                day: "Wed",
                time: "6:00pm - 8:00pm"
            },
        ],
        location: "Discord",
        completed: false,
    }
];