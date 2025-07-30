import Link from "next/link";

export default function LinkButton({ children, newTab = false, href, className}) {
    return (
        <Link target={newTab ? '_blank' : '_self'} href={href}
            className={`p-3 outline outline-black border-2 rounded-lg text-center font-primary tracking-wider transition-colors hover:text-primary hover:outline-primary ${className}`}>
            {children}
        </Link>
    );
}