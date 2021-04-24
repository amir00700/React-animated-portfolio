import React from 'react';
import home1 from '../img/home1.png';
import {About,Description, Image,Hide} from "../styles";
//framer motion
import {motion} from "framer-motion";
import {titleAnim,fade,phtotAnim, photoAnim} from '../animation'
import Wave from "./Wave";

const AboutSection = () => {

    return (
        <About>
        <Description>
            <motion.div >
            <Hide>
                <motion.h2 variants={titleAnim}
                >We Work to make</motion.h2>
            </Hide>
            <Hide>
                <motion.h2 variants={titleAnim} >your <span>dreams</span> come</motion.h2>
            </Hide>
            <Hide>
                <motion.h2  variants={titleAnim}>true.</motion.h2>
            </Hide>
            </motion.div>
            <motion.p variants={fade}>Contact us for any photogrpahy ideas that you have.
                We have professionas with amazing skills to help you to achieve it.
            </motion.p>
            < motion.button variants={fade}>Contact us</motion.button>
            

            </Description>
            <Image>
                <motion.img 
                variants={photoAnim}  
                src={home1} alt="guy with a camera"/>
                
               </Image>
               <Wave/>
           
        </About>
    )
}




export default AboutSection
