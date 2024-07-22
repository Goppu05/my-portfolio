/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';



const herosection = () => {
  return (
    <section id='#home' className='lg:py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12'>
        <motion.div 
        initial={{ opacity: 0, scale:0.5}} 
        animate={{opacity: 1,  scale: 1}}
         transition={{duration: 0.5}} 
         className='col-span-8 place-self-center text-center sm:text-left justify-self-start'>
            
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg-leading-normal font-extrabold'>
           <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"> Hello, I'm {" "}</div>
           <TypeAnimation
      sequence={[
        'Gopendra Nirmalkar',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Developer',
        1000,
        'Graphics Designer',
        1000,
        'UI/UX Developer',
        1000,
        'Android Developer',
        1000,
        'IoT Developer',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
        </h1>
        <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
        I'm currently a dedicated student pursuing a Bachelor's degree in Computer Science and Engineering with a keen interest in blending technology with creativity. My academic journey has equipped me with a strong foundation in programming, problem-solving, and software development, while my passion for graphic design adds a unique dimension to my skill set.

🖥️ Computer Science & Engineering: Throughout my coursework, I've delved into various facets of computer science, from algorithms and data structures to software engineering principles. I thrive in environments that challenge me to think critically and innovate solutions, whether it's through coding projects, hackathons, or collaborative research endeavors.

🎨 Graphics Design: Beyond the realm of code, I'm deeply fascinated by the art of visual communication. I possess a proficient understanding of graphic design tools and techniques, allowing me to bring ideas to life through captivating visuals. Whether it's designing user interfaces, creating marketing materials, or crafting engaging presentations, I leverage my creativity to make impactful impressions.

🔍 Seeking Opportunities: I'm actively seeking opportunities to apply my skills and knowledge in real-world settings. Whether it's internships, co-op placements, or project collaborations, I'm eager to contribute to innovative projects where technology and design intersect. I'm particularly interested in roles that allow me to explore areas such as UI/UX design, front-end development, or software engineering in graphics-intensive applications.

        </p>
        <div>
            <button className='px-6 py-3 w-full sm:w-fit rounded-full  mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-200 text-white'>
              <a href='#contact'> Hire Me</a></button>
            <button className='px-1 py-1 w-full sm:w-fit rounded-full  mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'>
                <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' ><a href='https://drive.google.com/file/d/1maBGLx68BuyWGtWyEzFpA5w1qPWiyskJ/view?usp=drive_link'> Download CV </a></span>
            </button>
        </div>
        </motion.div>
        <motion.div 
        initial={{ opacity: 0, scale:0.5}} 
        animate={{opacity: 1,  scale: 1}}
         transition={{duration: 0.5}} 
        className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative">
                <Image
                src="/images/hero-image.png"
                alt="hero image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={200}
                height={200}
                />
         
            </div>

        </motion.div>
        
        </div>
    </section>
  );
};

export default herosection;