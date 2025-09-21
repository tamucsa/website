import { OfficerRole, Megateam } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { RiCloseLine} from "react-icons/ri";

interface ImageModalProps {
    officer: Megateam;
    className?: string;
}

export default function OfficerImageModal({ officer, className }: ImageModalProps) {
    // Set width and height based on the officer's raw image orientation
    let width, height;
    // Find the first OfficerRole entry in the year "2025-2026"
    let entry: OfficerRole | undefined;
    const entries = officer.yearEntries["2025-2026"] || [];
    entry = entries.find(entry => "position" in entry) as OfficerRole;
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
                <Image alt={`${officer.name}'s Full Image`} src={`/2025-2026/officerImages/raw/${officer.id}.JPG`} width={width} height={height}
                    className="rounded-2xl shadow-lg" style={{ objectFit: "contain" }} sizes=""
                />  
            </div>
            {/* <div className="rounded-2xl w-screen h-screen overflow-hidden">
                <Image alt={`${officer.name}'s Full Image`} src={`/officerImages/raw/${officer.id}.JPG`} fill
                className="rounded-2xl shadow-lg" style={{ objectFit: "contain" }} sizes=""
                />
            </div> */}
            {/* Buttons */} 
            <div className="flex absolute m-7 inset-3 items-center justify-center">
                <Link href={`/officers#${officer.id}`} className="absolute top-0 left-0 p-1 items-center bg-white/70 rounded-full hover:text-primary transition-colors">
                    <RiCloseLine className="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
}