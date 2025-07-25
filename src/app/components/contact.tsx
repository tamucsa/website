"use client";

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

export type FormData = {
    name: string;
    email: string;
    message: string;
}

const Contact: FC = () => {
    const {register, handleSubmit} = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 max-w-md mx-auto font-secondary'>
        <div className='flex flex-col gap-0'>
            <label htmlFor='name' className='text-md'>Full Name</label>
            <input
                type="text"
                placeholder="Full Name"
                {...register("name", { required: true })}
                className="p-3 border rounded-lg border-gray-400 text-md"
            />
        </div>
        <div className='flex flex-col gap-0'>
            <label htmlFor='email'>Email</label>
            <input
                type="email"
                placeholder="example@domain.com"
                {...register("email", { required: true })}
                className="p-3 border rounded-lg border-gray-400 text-md"
            />
        </div>
        <div className='flex flex-col gap-0'>
            <label htmlFor='message'>Message</label>
            <textarea
                rows={5}
                placeholder="Type your message here..."
                {...register("message", { required: true })}
                className="p-3 border rounded-lg border-gray-400 text-md h-32"
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