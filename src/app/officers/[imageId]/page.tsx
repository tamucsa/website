import Image from "next/image";
import Link from "next/link";
import { RiArrowLeftCircleFill, RiArrowRightCircleFill, RiArrowLeftSLine, RiArrowRightSLine, RiDownloadLine, RiCloseLargeLine} from "react-icons/ri";

export default async function ModalImage({ params }: { params: Promise<{imageId: number}> }) {
    const { imageId } = await params;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-20">
            <Link href={`/officers#officer-${imageId}`} className="absolute -inset-0 cursor-default z-20">
                <Image alt={`Officer ${imageId} Blurred Background`} src={`/officerImages/raw/${imageId}.JPG`} fill className="max-w-full max-h-screen blur-xl" />
            </Link>
            <div className="bg-white p-0 rounded-lg shadow-lg z-30">
                <Image alt={`Officer ${imageId}`} src={`/officerImages/raw/${imageId}.JPG`} width={1000} height={1000} className="max-w-full max-h-screen w-auto h-150" />
            </div>
        </div>  
    );
}