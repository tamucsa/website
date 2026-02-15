import { ParentRole, Megateam, Jiating } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { RiCloseLine } from "react-icons/ri";

interface ImageModalProps {
    parent: Megateam;
    jiating: Jiating;
    className?: string;
}

export default function ParentImageModal({ parent, jiating, className }: ImageModalProps) {
    // Set width and height based on the parent's raw image orientation
    let width, height;
    // Find the first ParentRole entry in the year jiating.years (ex: "2025-2026")
    let entry: ParentRole | undefined;
    const entries = parent.yearEntries[jiating.years] || [];
    entry = entries.find(entry => "jiating" in entry) as ParentRole;
    if (entry && entry.rawImgOrientation === "horizontal") {
        width = 1000;
        height = 1000;
    } else if (entry && entry.rawImgOrientation === "vertical") {
        width = 450;
        height = 450;
    } else {
        width = 0;
        height = 0;
    }

    return (
        <div className={`relative ${className}`}>
            {/* Actual Image */}
            <div className="m-7">
                <Image alt={`${parent.name}'s Full Image`} src={`/2025-2026/jiatings/${jiating.name}/parents/raw/${parent.id}.JPG`} width={width} height={height}
                    className="rounded-2xl shadow-lg" style={{ objectFit: "contain" }} sizes=""
                />  
            </div>
            {/* Buttons */} 
            <div className="flex absolute m-7 inset-3 items-center justify-center">
                <Link href={`/jiatings/${jiating.id}`} className="absolute top-0 left-0 p-1 items-center bg-white/70 rounded-full hover:text-primary transition-colors">
                    <RiCloseLine className="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
}