"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    name: string;
    email: string;
    message: string;
    subject: string;
}

const Contact: FC = () => {
    const {register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-sm md:max-w-3xl md:w-xl mx-auto font-secondary'>
        <h2 className=' text-sm md:text-xl font-secondary'>
            Fill out this form below and we'll get back to you as soon as possible!
        </h2>   
        <div className='flex flex-col gap-1'>
            <label htmlFor='name' className='text-base md:text-lg'>Name</label>
            <input
                type="text"
                placeholder="Your name"
                {...register("name", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 text-sm md:text-base"
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-base md:text-lg'>Email</label>
            <input
                type="email"
                placeholder="example@domain.com"
                {...register("email", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 text-sm md:text-base"
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='subject' className='text-base md:text-lg'>Subject</label>
            <input
                type="text"
                placeholder="How can we help?"
                {...register("subject", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 text-sm md:text-base"
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='message' className='text-base md:text-lg'>Message</label>
            <textarea
                rows={5}
                placeholder="Type your message here..."
                {...register("message", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 h-32 text-sm md:text-base"
            />
        </div>
        <div>
            <button type="submit" className="w-full p-2 outline outline-gray-400 border-2 rounded-lg text-center font-primary tracking-wider transition-colors text-lg md:text-xl hover:text-primary hover:outline-primary">
            Submit
            </button>
        </div>
    </form>
  )
}
export default Contact;