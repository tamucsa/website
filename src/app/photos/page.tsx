import { Metadata } from "next";
import LinkButton from "@/app/components/LinkButton";

const PhotosPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-10 px-20 md:px-0'>
          <header className="flex flex-col text-center mt-10 md:mt-15 gap-3">
            <h1 className="font-primary tracking-wider text-3xl md:text-4xl">Photos</h1>
            <p className="font-secondary tracking-wider text-base md:text-xl">Check out some of the photos from our events this year!</p>
          </header>
          <main className="flex flex-col w-full md:w-lg border items-center justify-center gap-4">
            {/* Button list of photo albums */}
            <LinkButton href="" newTab={true}
              className="w-full text-lg md:text-xl">
              Event Name (MM/DD/YYYY)
            </LinkButton>
            <LinkButton href="/jiatings" newTab={true}
              className="w-full text-lg md:text-xl">
              Event Name (MM/DD/YYYY)
            </LinkButton>
            <LinkButton href="/jiatings" newTab={true}
              className="w-full text-lg md:text-xl">
              Event Name (MM/DD/YYYY)
            </LinkButton>
          </main>
        </div>
    );
}

export const metadata: Metadata = {
  title: "TAMU CSA - Photos",
  description: "Photo albums and galleries of the Chinese Student Association at Texas A&M University.",
};

export default PhotosPage;