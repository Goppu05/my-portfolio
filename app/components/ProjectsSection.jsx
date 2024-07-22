"use client"
import React, {useState, useRef} from 'react';
import ProjectCard from './ProjectCard';
import Image from 'next/image';
import ProjectTag from "./ProjectTag"
import {motion, useInView} from 'framer-motion';


const projectsData = [
    {
        id:0,
        title: "Fashion ecommerce Website",
        description:"Developed a responsive and user-friendly e-commerce website using HTML, CSS, and JavaScript. The project involved creating a dynamic front-end interface that allows users to browse products, add items to a shopping cart, and complete purchases through a secure checkout process.",
        image: "/images/projects/Fashion-website.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/Goppu05/Fashion-website",
        previewUrl:"https://github.com/Goppu05/Fashion-website",
    },
    {
        id:1,
        title: "Online Education Website",
        description:"Developed a comprehensive online education platform using HTML, CSS, and JavaScript. The project involved creating an interactive and engaging interface for students to access courses, participate in discussions, and track their progress.",
        image: "/images/projects/Online-education.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/Goppu05/online-education",
        previewUrl:"https://github.com/Goppu05/online-education",
    },
    {
        id:2,
        title: "Food ecommerce Website using HTML",
        description:"Developed a feature-rich food e-commerce website using HTML, CSS, and JavaScript. The project involved creating an intuitive and visually appealing interface for users to browse and purchase a variety of food items online.",
        image: "/images/projects/Food-website.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/Goppu05/food-website",
        previewUrl:"https://github.com/Goppu05/food-website",
    },
    {
        id:3,
        title: "Iot based Surviellance Car",
        description:"IoT-based Surveillance Car (Using Esp32 Cam module) Developed an advanced surveillance vehicle with IoT integration for real-time monitoring and remote access capabilities, ensuring effective security solutions for diverse environments",
        image: "/images/projects/camcar.jpg",
        tag: ["All","IOT"],
        gitUrl:"https://github.com/Goppu05/IOT-based-Surveillance-Car",
        previewUrl:"https://github.com/Goppu05/IOT-based-Surveillance-Car",
    },
    {
        id:4,
        title: "Desktop Assistant",
        description:"Sahayak (Python Based Desktop AI) Developed a Python-based desktop AI application utilizing machine learning and natural language processing for intelligent task automation and personalized assistance.",
        image: "/images/projects/Desktop-ai.png",
        tag: ["All","Python"],
        gitUrl:"https://github.com/Goppu05/projects/tree/main/assistant",
        previewUrl:"https://github.com/Goppu05/projects/tree/main/assistant",
    },
    {
        id:5,
        title: "Wifi Password Generator",
        description:"Developed a user-friendly WiFi Password Generator using HTML, CSS, and JavaScript. This project focuses on creating a secure and customizable tool for generating strong and random WiFi passwords, enhancing network security.",
        image: "/images/projects/wifi-pass.png",
        tag: ["All","Python"],
        gitUrl:"https://github.com/Goppu05/projects/blob/main/wifi%20password.py",
        previewUrl:"https://github.com/Goppu05/projects/blob/main/wifi%20password.py",
    },
    {
      id:6,
      title: "Flappy Bird",
      description:"Developed a fully functional Flappy Bird game clone using Python and the Pygame library. This project focused on recreating the popular mobile game, providing an engaging and interactive user experience while demonstrating proficiency in game development using Python.",
      image: "/images/projects/flappy-bird.png",
      tag: ["All","Python"],
      gitUrl:"https://github.com/Goppu05/projects/tree/main/flappy%20bird/flappy_bird",
      previewUrl:"https://github.com/Goppu05/projects/tree/main/flappy%20bird/flappy_bird",
    },
    {
      id:7,
      title: "Online-Food-Order-Website using PHP",
      description:"Developed a robust food ordering system using PHP, designed to streamline the process of ordering food online. The project involved creating a dynamic web application that allows users to browse menus, place orders, and manage their accounts, while providing restaurant administrators with tools to manage orders and menu items efficiently.",
      image: "/images/projects/php-food-ordering.png",
      tag: ["All","Python"],
      gitUrl:"https://github.com/Goppu05/Online-Food-Order-Website",
      previewUrl:"https://github.com/Goppu05/Online-Food-Order-Website",
    },
];

const ProjectsSection = () => {
  const[tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const handleTagChange = (newTag) =>{
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project)=>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial:{y:50, opacity:0 },
    animate:{ y:0, opacity: 1},
  };


  return (
    <section>
      <h2 id="projects" className='text-center text-4xl font-bold text-white mt-4'>
        My Projects
      </h2>
      <div className='text-white flex felx-row justify-center items-center gap-2 py-6'>
      <ProjectTag 
      onClick={handleTagChange} 
      name="All" 
      isSelected={tag === "All"}
      />
      <ProjectTag 
      onClick={handleTagChange} 
      name="Web" 
      isSelected={tag === "Web"}
      />
      <ProjectTag 
      onClick={handleTagChange} 
      name="Python" 
      isSelected={tag === "Python"}
      />
      <ProjectTag 
      onClick={handleTagChange} 
      name="IOT" 
      isSelected={tag === "IOT"}
      />
      <ProjectTag 
      onClick={handleTagChange} 
      name="Java" 
      isSelected={tag === "Java"}
      />
      <ProjectTag 
      onClick={handleTagChange} 
      name="Mobile" 
      isSelected={tag === "Mobile"}
      />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) =>( 
            <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate': "initial"}
            transition={{ duration: 0.3, delay: index * 0.4}}
            >
            <ProjectCard 
            key={project.id}
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            tags={project}
            gitUrl={project.gitUrl}
            previewurl={project.previewUrl}
            />
            </motion.li>
        ))}

      </ul>
    </section>
  );
};

export default ProjectsSection;
