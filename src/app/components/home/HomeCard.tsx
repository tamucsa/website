import Image from "next/image";

type HomeCardProps = {
    className?: string;
};

export default function HomeCard({ className }: HomeCardProps) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src="/stockImages/NiHowdy-1.jpg"
                alt=""
                width={2048}
                height={1365}
                className="object-cover"
                style={{ width: "100%", height: "auto" }}
            />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 font-primary tracking-wider text-center text-white text-nowrap">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                    Chinese Student Association
                </h1>
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl">
                    Texas A&M University | EST. 1963
                </h2>
            </div>
        </div>
    );
}