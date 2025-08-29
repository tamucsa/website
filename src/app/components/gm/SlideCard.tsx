import Link from "next/link";

interface SlideCardProps {
    title: string;
    embedLink: string;
    slideLink: string
}

export default function SlideCard({ title, embedLink, slideLink }: SlideCardProps) {
    return (
        <div className="flex flex-col items-center gap-3">
            <h1 className="font-primary tracking-wider text-2xl lg:text-4xl">{title}</h1>
            <iframe className="rounded-xl w-[400px] h-[261px] lg:w-[949px] lg:h-[569px]" src={embedLink} width="960" height="569" allowFullScreen={true}></iframe>
            <Link href={slideLink} className="font-primary tracking-wider text-lg lg:text-2xl underline hover:text-primary transition-colors">View Slides</Link>
        </div>
    );
}