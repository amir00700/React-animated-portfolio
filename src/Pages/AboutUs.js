import React from 'react'
//page Components
import AboutSection from '../Components/AboutSection';
import ServicesSection from '../Components/ServicesSection';
import  FaqSection from '../Components/FaqSection'
import{motion} from 'framer-motion';
import {pageAnimation} from '../animation';

import ScrollTop from '../Components/ScrollTop';


const Aboutus = () => {
    return (
        <motion.div  exit="exit" variants={pageAnimation} 
        initial='hidden'
        animate='show'>
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
            <ScrollTop/>
           
        </motion.div>
    )
}

export default Aboutus

