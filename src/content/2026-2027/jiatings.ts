//NOT UPDATED YET (Copy of last year's)
//TO DO Change the names!!!!

import { Jiating } from "@/utils/types";
import { MegateamList } from "@/content/2026-2027/megateam";

// 2026-2027 Parents!!
    
export const JiatingList: Jiating[] = [
    {
        id: 1,
        name: "Miffy",
        instagram: "miffyfamm",
        years: "2026-2027",
        parents: [
            MegateamList.find(parent => parent.name === "Ella Li")!,
            MegateamList.find(parent => parent.name === "Justin Zhang")!,
            MegateamList.find(parent => parent.name === "Alysa Zhao")!,
            MegateamList.find(parent => parent.name === "Lanxi Xu")!
        ],
        groupImgOrientation: "horizontal"
    },
    {
        id: 2,
        name: "Mofusand",
        instagram: "mofusandfam.csa",
        years: "2026-2027",
        parents: [
            MegateamList.find(parent => parent.name === "Ethan Mak")!,
            MegateamList.find(parent => parent.name === "Vivian Xu")!,
            MegateamList.find(parent => parent.name === "Alice Yu")!,
            MegateamList.find(parent => parent.name === "Miky Zheng")!
        ],
        groupImgOrientation: "horizontal"
    },
    {
        id: 3,
        name: "Hirono",
        instagram: "hirono.csa",
        years: "2026-2027",
        parents: [
            MegateamList.find(parent => parent.name === "Keiko Cheung")!,
            MegateamList.find(parent => parent.name === "William Vu")!,
            MegateamList.find(parent => parent.name === "Ethan Lam")!,
            MegateamList.find(parent => parent.name === "Bonnie Tsoi")!
        ],
        groupImgOrientation: "horizontal"
    },
    {
        id: 4,
        name: "Dimoo",
        instagram: "dimoo_fam",
        years: "2026-2027",
        parents: [
            MegateamList.find(parent => parent.name === "Emily Dong")!,
            MegateamList.find(parent => parent.name === "Kevinn Tran")!,
            MegateamList.find(parent => parent.name === "Manya Tiwari")!,
            MegateamList.find(parent => parent.name === "Evan Ying")!
        ],
        groupImgOrientation: "horizontal"
    },
    {
        id: 5,
        name: "Peach Riot",
        instagram: "peachriotfam",
        years: "2026-2027",
        parents: [
            MegateamList.find(parent => parent.name === "Lia Chen")!,
            MegateamList.find(parent => parent.name === "El Wu")!,
            MegateamList.find(parent => parent.name === "Keilon Carrier")!,
            MegateamList.find(parent => parent.name === "Reilly Mize")!
        ],
        groupImgOrientation: "vertical"
    },
    {
        id: 6,
        name: "Smiski",
        instagram: "smiskijt",
        years: "2026-2027",
        parents: [
            MegateamList.find(parent => parent.name === "Chloe Cheong")!,
            MegateamList.find(parent => parent.name === "Andrew Zhang")!,
            MegateamList.find(parent => parent.name === "Aryan Bandi")!,
            MegateamList.find(parent => parent.name === "Alexis Carmel")!
        ],
        groupImgOrientation: "horizontal"
    }
    
]