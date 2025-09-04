import PastYearSection from "@/app/components/photos/PastYearSection";
import YearAlbumSection from "@/app/components/photos/YearAlbumSection";
import { AlbumList2025_26 } from "@/content/albums/2025-26";

import { Metadata } from "next";

const PhotosPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-10 mx-10 md:mx-5'>
          <header className="flex flex-col text-center mt-10 md:mt-15 gap-3">
            <h1 className="font-primary tracking-wider text-3xl md:text-4xl">Photos</h1>
            {/* <p className="font-secondary tracking-wider text-base md:text-xl">Check out some of the photos from our events this year! (As they get added!)</p> */}
          </header>

          {/* Button list of photo albums */}
          <main className="w-full max-w-5xl flex flex-col md:flex-row gap-8 mb-10 md:mb-16">
            <YearAlbumSection
              year="2025-2026"
              thisYear={true}
              albumList={AlbumList2025_26}
              className="flex-1"
            />
            <PastYearSection className="flex-1" toggable={false}/>
          </main>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Photos",
  description: "Photo albums and galleries of the Chinese Student Association at Texas A&M University.",
};

export default PhotosPage;