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

const ContactForm: FC = () => {
    const {register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 w-full md:w-xl mx-auto font-secondary'>
        <h2 className=' text-sm md:text-xl font-secondary'>
            Fill out this form below and we'll get back to you as soon as possible!
        </h2>   
        <div className='flex flex-col gap-1'>
            <label htmlFor='formname' className='text-base md:text-lg'>Name</label>
            <input
                type="text"
                placeholder="Your name"
                id='formname'
                {...register("name", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 text-sm md:text-base"
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='formemail' className='text-base md:text-lg'>Email</label>
            <input
                type="email"
                placeholder="example@domain.com"
                id='formemail'
                {...register("email", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 text-sm md:text-base"
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='formsubject' className='text-base md:text-lg'>Subject</label>
            <input
                type="text"
                placeholder="How can we help?"
                id='formsubject'
                {...register("subject", { required: true })}
                className="px-3 py-2 border rounded-lg border-gray-400 text-sm md:text-base"
            />
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor='formmessage' className='text-base md:text-lg'>Message</label>
            <textarea
                rows={5}
                placeholder="Type your message here..."
                id='formmessage'
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
export default ContactForm;