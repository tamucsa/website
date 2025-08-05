import { Officer } from "@/utils/types";

import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill, RiArrowLeftSLine, RiArrowRightSLine, RiDownloadLine, RiCloseLine} from "react-icons/ri";

interface ImageModalProps {
    officer: Officer;
    className?: string;
}

export default function ImageModal({ officer, className }: ImageModalProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Actual Image */}
            {/* <div className="my-10 mx-10">
                <Image alt={`${officer.name}'s Full Image`} src={`/officerImages/raw/${officer.id}.JPG`} width={1000} height={1000} 
                    className="rounded-2xl shadow-lg" 
                />  
            </div> */}
            <div className="flex flex-col m-10 rounded-2xl">
                <div className="rounded-2xl w-screen h-screen overflow-hidden">
                    <Image alt={`${officer.name}'s Full Image`} src={`/officerImages/raw/${officer.id}.JPG`} fill
                    className="rounded-2xl shadow-lg" objectFit="contain" sizes=""
                    />
                </div>
            </div>
            {/* Buttons */} 
            <div className="flex absolute inset-3 mx-10 my-10 items-center justify-center">
                <Link href={`/officers#${officer.id}`} className="absolute top-0 left-0 p-1 items-center bg-white/70 rounded-full hover:text-primary transition-colors">
                    <RiCloseLine className="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
}