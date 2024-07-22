"use client";

import React from 'react';
import GithubIcon from "../../public/social logo/github_png.png";
import LinkedinIcon from "../../public/social logo/linkedin_png.png";
import Link from "next/link";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

const contact = () => {

    const [state, handleSubmit] = useForm("mpwaqdpa");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }


  return (
    <section id="contact" className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
      <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2'>

      </div>
      <div className='z-10'>
        <h5 className='text-xl font-bold text-white my-2'>
            Let's Connect
        </h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            {""}
            I'm currently looking for new opportunities, my inbox is always open,
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
        </p>
        <div className='socials flex flex-row gap-2 h-30 w-20'>
            <Link href='https://github.com/Goppu05'>
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href='https://www.linkedin.com/in/gopendranirmalkar05'>
              <Image src={LinkedinIcon} alt="LinkedIn Icon"/>
            </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label htmlFor='name' type='name' className='text-white block mb-2 text-sm font-medium'>
              Name
            </label>
            <input
            name='name' 
            type='text'
            id='name'
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Your Name'
            />
            </div>
            <div className='mb-6'>
            <label htmlFor='email' type='email' className='text-white block mb-2 text-sm font-medium'>
              Your Email
            </label>
            <input 
            name='email'
            type='email'
            id='email'
            required
            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
            placeholder='Just saying hi'
            />
             <ValidationError 
              prefix="Email" 
              field="email"
             errors={state.errors}
             />
            </div>
            <div className='mb-6 '>
              <label
              htmlFor='message'
              className='text-white block text-sm mb-2 font-medium'
              >
                Message
              </label>
              <textarea
              name='message'
              id='message'
              className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
              placeholder="Let's talk about..."
              />
              <ValidationError 
               prefix="Message" 
               field="message"
               errors={state.errors}
      />

            </div>
            <button
            type='submit'
            disabled={state.submitting}
            className='bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            >
             Send Message
            </button>
            </form>
      </div>
    </section>
  )
}

export default contact
