import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/app/components/contact/ContactForm";


const ContactPage = () => {
    return (
        <div className='flex flex-col items-center gap-5 md:gap-7'>
            <h1 className="container text-center font-primary tracking-wider text-3xl md:text-4xl mt-10 md:mt-15">Contact Us</h1>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 md:gap-25 pb-15">
                {/* Left/Top - Contact Form */}
                <div className="px-0 md:px-0">
                    <ContactForm />
                </div>
                {/* Right - Images, Hidden on smaller screens */}
                <div className="hidden xl:flex xl:flex-col xl:gap-5">
                    <div className="relative w-sm hover:scale-102 transition-transform duration-300">
                        <Image
                            src="/stockImages/MarshalPumpkin-1.JPG"
                            alt=""
                            width={6000}
                            height={4000}
                            className="object-cover rounded-lg shadow-md"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                    <div className="relative w-sm hover:scale-102 transition-transform duration-300">
                        <Image
                            src="/stockImages/Informational-7.jpg"
                            alt=""
                            width={6040}
                            height={4032}
                            className="object-cover rounded-lg shadow-md"
                            style={{ width: "100=%", height: "auto" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const metadata: Metadata = {
  title: "TAMU CSA - Contact Us",
  description: "Get in touch with the Chinese Student Association at Texas A&M University. We would love to hear from you!",
};

export default ContactPage;