"use client";
import React, {useTransition, useState}from 'react';
import Image from 'next/image';
import TabButton from "./TabButton";
import { Content } from 'next/font/google';

const TAB_DATA =[
    {
        title:'Skills',
        id:"skills",
        content: (
            <ul className='list-disc pt-2'>
                <li>ReactJs</li>
                <li>NodeJs</li> <li>Python</li>
                <li>SQL</li> <li>RasberryPi</li>
                <li>Express</li> <li>PHP</li>
                <li>MongoDB</li>
                <li>Golang</li>
                <li>Java</li>
                <li>Kotlin</li>
                <li>XML</li>
            </ul>
        )
    },
    {
        title:'Education',
        id:"education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Maharishi Vidya Mandir</li>
                <li>Shri Shankaracharya Technical Campus</li>
                <li>National Education Alliance for Technology</li>
            </ul>
        )
    },
    {
        title:'Certifications',
        id:"certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>FreeCodeCamp</li>
                <li>Coursera</li>
                <li>EduSkills</li>
            </ul>
        )
    }
    
]

const AboutSection = () => {
    const [tab , setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() =>{
            setTab(id);
        });
    };
  return (
    <section id="#about" className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:-16'>
            <Image src='/images/about-section.jpg' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                I am a Full Stack web developer, graphics designer, and UI/UX designer committed to crafting seamless digital experiences. My expertise includes HTML, CSS, JavaScript, React, Adobe Creative Suite, Figma. I specialize in responsive web design, branding, and interactive prototypes. My work transforms ideas into visually stunning and user-friendly interfaces. Explore my projects to see how I blend creativity with technical prowess. Let's collaborate to bring your vision to life!  
                </p>
                <div className='flex flex-row justify-start mt-8'>
                    <TabButton 
                    selectTab={()=> handleTabChange('skills')}
                    active={tab === 'skills'}>
                       {""} Skills {""}
                    </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange('education')}
                    active={tab === 'education'}>
                       {""} Education {""}
                    </TabButton>
                    <TabButton 
                    selectTab={()=> handleTabChange('certifications')}
                    active={tab === 'certifications'}>
                       {""} Certifications {""}
                    </TabButton>
                   
                </div>
                <div className='mt-8'>{TAB_DATA.find((t)=> t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection
