import ImageModal from "@/app/components/ImageModal";
import Image from "next/image";
import Link from "next/link";

export default async function ModalImage({ params }: { params: Promise<{imageId: number}> }) {
    const { imageId } = await params;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-20">
            <Link href={`/officers#${imageId}`} className="absolute -inset-0 cursor-default z-20">
                <Image alt={`Officer ${imageId} Blurred Background`} src={`/officerImages/raw/${imageId}.JPG`} fill className="max-w-full max-h-screen blur-xl brightness-75" />
            </Link>
            <ImageModal imageId={imageId} className="z-30"/>
        </div>  
    );
}