import Link from "next/link";

interface LinkButtonProps {
    /** The text to display for the link button */
    text: string;
    /** The URL to link to */
    href: string;
    /** Whether to open the link in a new tab */
    newTab?: boolean;
    /** Additional Tailwind CSS classes to apply to the link button */
    className?: string;
}

export default function LinkButton({ text, newTab = false, href, className }: LinkButtonProps) {
    return (
        <Link target={newTab ? '_blank' : '_self'} href={href}
            className={`p-3 outline outline-black border-2 rounded-lg text-center font-primary tracking-wider transition-colors hover:text-primary hover:outline-primary ${className}`}>
            {text}
        </Link>
    );
}