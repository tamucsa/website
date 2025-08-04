import LinkButton from "@/app/components/LinkButton";
import { Album } from "@/utils/types";

interface AlbumLinkButtonProps {
    album: Album;
    className?: string;
}

export default function AlbumLinkButton({ album, className }: AlbumLinkButtonProps) {
    return (
        <LinkButton
            href={album.url}
            newTab={true}
            className={`w-full md:w-md ${className}`}
            text={album.title}
        />
    );
}