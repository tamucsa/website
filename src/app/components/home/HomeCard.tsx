import Image from "next/image";

type HomeCardProps = {
    className?: string;
};

export default function HomeCard({ className }: HomeCardProps) {
    return (
        <div className={`relative h-[90vh] md:h-auto md:w-full ${className} overflow-hidden`}>
            <Image
                src="/stockImages/cropped-NiHowdy-1.jpg"
                alt=""
                width={2048}
                height={1024}
                className="object-cover h-full md:h-auto"
                // style={{ width: "100%", height: "auto" }}
            />
            <div 
            // style={{ WebkitTextStroke: "1px black" }} //adds 1 px black outline to text
            className="absolute top-1/4 left-1/2 -translate-x-1/2 font-primary tracking-wider text-center text-white w-lg md:w-auto md:text-nowrap [text-shadow:_0_2px_8px_rgba(0,0,0,0.7)]">
                <h1 className="text-6xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl">
                    Chinese Student Association
                </h1>
                <h2 className="mt-2 lg:mt-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
                    Texas A&M University | EST. 1963
                </h2>
            </div>
            <div className="absolute bottom-3 right-3 p-3 bg-black/50 rounded-lg">
                <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    NiHowdy 2025! (w/ UT, UTD, and Rice)
                </p>
            </div>
        </div>
    );
}