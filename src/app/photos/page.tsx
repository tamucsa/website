import { Metadata } from "next";
import AlbumLinkButton from "@/app/components/photos/AlbumLinkButton";
import { AlbumList2022_23 } from "@/content/albums/2022-23";
import { AlbumList2023_24 } from "@/content/albums/2023-24";
import { AlbumList2024_25 } from "@/content/albums/2024-25";
import { AlbumList2025_26 } from "@/content/albums/2025-26";

const PhotosPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-10 px-20 md:px-0'>
          <header className="flex flex-col text-center mt-10 md:mt-15 gap-3">
            <h1 className="font-primary tracking-wider text-3xl md:text-4xl">Photos</h1>
            <p className="font-secondary tracking-wider text-base md:text-xl">Check out some of the photos from our events this year! (As they get added!)</p>
          </header>

          {/* Button list of photo albums */} {/* Replace 'hidden' with 'flex' to show any section */}
          <main className="flex flex-col w-full md:w-lg items-center justify-center gap-5 md:gap-10 mb-10 md:mb-15">
            {/* 2025-2026 Albums */}
            <div className="flex flex-col items-center gap-2">
              <h2 className="font-primary tracking-wider text-2xl md:text-3xl">2025-2026</h2>
              <p className="font-secondary tracking-wider text-base md:text-lg">Check out our latest events!</p>
              <div className="flex flex-col gap-3">
                {AlbumList2025_26.map((album) => (
                  <AlbumLinkButton key={album.url} album={album} className="w-full text-lg md:text-xl" />
                ))}
              </div>

            </div>  
            {/* Past Album Section */}
            <div className="flex flex-col items-center gap-10">
              {/* Title */}
              <div className="flex flex-col items-center gap-2">
                <h2 className="font-primary tracking-wider text-2xl md:text-3xl">Past Albums</h2>
                <p className="font-secondary tracking-wider text-base md:text-lg">Check out our past events!</p>
              </div>
              {/* 2024-2025 Albums */}
              <div className="flex flex-col items-center gap-3">
                <h3 className="font-primary tracking-wider text-xl md:text-2xl">2024-2025</h3>
                <div className="flex flex-col gap-3">
                  {AlbumList2024_25.map((album) => (
                    <AlbumLinkButton key={album.url} album={album} className="w-full text-lg md:text-xl" />
                  ))}
                </div>
              </div>
              {/* 2023-2024 Albums */}
              <div className="flex flex-col items-center gap-3">
                <h3 className="font-primary tracking-wider text-xl md:text-2xl">2023-2024</h3>
                <div className="flex flex-col gap-3">
                  {AlbumList2023_24.map((album) => (
                    <AlbumLinkButton key={album.url} album={album} className="w-full text-lg md:text-xl" />
                  ))}
                </div>
              </div>
              {/* 2022-2023 Albums */}
              <div className="flex flex-col items-center gap-3">
                <h3 className="font-primary tracking-wider text-xl md:text-2xl">2022-2023</h3>
                <div className="flex flex-col gap-3">
                  {AlbumList2022_23.map((album) => (
                    <AlbumLinkButton key={album.url} album={album} className="w-full text-lg md:text-xl" />
                  ))}
                </div>
              </div>
            </div>
            {/* <AlbumLinkButton album={{ title: "Event Name (MM/DD/YYYY)", url: "" }} className="w-full text-lg md:text-xl" /> */}
          </main>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Photos",
  description: "Photo albums and galleries of the Chinese Student Association at Texas A&M University.",
};

export default PhotosPage;