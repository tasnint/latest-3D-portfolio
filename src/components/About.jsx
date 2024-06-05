import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, iconStyle = { width: '50px', height: '50px'} }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          style = {iconStyle || { width: '50px', height: '50px' }}
          className='w-16 h-16 object-contain'
          
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        Currently pursuing Software and Biomedical Engineering at McMaster University, I strive to
        blend my academic learning with real-world applications. My technical skillset encompasses
        full stack development, machine learning, and object oriented programming. With experience 
        working across diverse technical teams, I bring a collaborative approach to each project, 
        aspiring to translate complex ideas into accessible solutions. Some of my favorite projects, 
        both past and present, include a Malaria Detection Model using Convolutional Neural Networks, 
        MyHealth — a comprehensive full-stack application I'm currently developing, and the very website
        you're viewing now. To learn more, continue scrolling or view my <a href="/latest_resume.pdf" target="_blank" style={{ color: '#8F00FF', fontWeight:'bold' }}>resume </a> 
         for a concise summary of my experiences.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
