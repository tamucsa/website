import Image from "next/image";

export default function UnderConstruction() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Image
            src="/under-construction.png"
            alt="Site is under construction"
            width={800}
            height={800}
            className="items-center justify-center"
            />
        </div>
    );
}
