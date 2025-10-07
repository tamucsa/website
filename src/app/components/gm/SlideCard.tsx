import Link from "next/link";

interface SlideCardProps {
    title: string;
    baseUrl: string;
    slug: string;
}
``
export default function SlideCard({ title, baseUrl, slug }: SlideCardProps) {
    const finalProps = "?start=true&loop=true&delayms=10000"
    return (
        <div className="flex flex-col items-center gap-3 w-full" id={slug}>
            <h1 className="font-primary tracking-wider text-2xl lg:text-4xl">{title}</h1>
            <iframe className="rounded-xl w-full lg:w-3xl h-auto" style={{ aspectRatio: "960/569" }} src={baseUrl + "pubembed" + finalProps} width="960" height="569" allowFullScreen={true}></iframe>
            <Link href={baseUrl + "pub" + finalProps} target="_blank" className="font-primary tracking-wider text-lg lg:text-2xl underline hover:text-primary transition-colors">View Slides</Link>
        </div>
    );
}