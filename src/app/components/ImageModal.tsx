import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill, RiArrowLeftSLine, RiArrowRightSLine, RiDownloadLine, RiCloseLine} from "react-icons/ri";

interface ImageModalProps {
    imageId: number;
    className?: string;
}

export default function ImageModal({ imageId, className }: ImageModalProps) {
    return (
        <div className={`relative ${className}`}>
            {/* Actual Image */}
            <Image alt={`Officer ${imageId}`} src={`/officerImages/raw/${imageId}.JPG`} width={1000} height={1000} className="max-w-full max-h-screen w-auto h-150 rounded-2xl shadow-lg" />
            {/* Buttons */}
            <div className="absolute inset-3 mx-auto flex items-center justify-center">
                <Link href={`/officers#${imageId}`} className="absolute top-0 left-0 p-1 items-center bg-white/70 rounded-full hover:text-primary transition-colors">
                    <RiCloseLine className="w-8 h-8" />
                </Link>
            </div>
        </div>
    );
}