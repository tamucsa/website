import { Megateam } from "@/utils/types";
import { MegateamList } from "./megateam";

// 2025-2026 Officers!!

const officerNames = [
    "Sarah Ward",
    "Ruth Jasadiredja",
    "Keiko Cheung",
    "Dominic Hidayat",
    "Reilly Mize",
    "Kody Chu",
    "Akhil Kasamsetty",
    "Bao Nguyen",
    "Grace Zhou",
    "Lia Chen",
    "Keilon Carrier",
    "Steve Zhang",
    "Ryan Kha",
    "Kevinn Tran",
    "Hecate Hu",
    "Sydney Guy",
    "Emily Chen",
    "Bonnie Tsoi",
];

export const OfficerList: Megateam[] = officerNames
    .map(name => MegateamList.find(officer => officer.name === name)!)
    .filter(Boolean);