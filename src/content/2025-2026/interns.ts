import { Megateam } from "@/utils/types";
import { MegateamList } from "./megateam";

// 2025-2026 Interns!!

const internNames = [
    "Miky Zheng",
    "Evangeline Su", //might change to Evie
    "Dylan Mire",
    "Matthew Yen",
    "Kai Hammel",
    "Andrew Zhang",
    "Marho Akpenyi",
    "Harrison Li",
    "Shangqing Li", // might change to Ella
    "Evan Chang",
    "Chloe Cheong"
];

export const InternList: Megateam[] = internNames
    .map(name => MegateamList.find(intern => intern.name === name)!)
    .filter(Boolean);