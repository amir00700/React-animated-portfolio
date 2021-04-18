import React from 'react'
import home1 from '../img/home1.png'
import {About,Description, Image,Hide} from "../styles"

const AboutSection = () => {
    return (
        <About>
        <Description>
            <div className="title">
            <Hide>
                <h2>We Work to make</h2>
            </Hide>
            <Hide>
                <h2>your <span>dreams</span> come</h2>
            </Hide>
            <Hide>
                <h2>true.</h2>
            </Hide>
            </div>
            <p>Contact us for any photogrpahy ideas that you have.
                We have professionas with amazing skills to help you to achieve it.
            </p>
            <button>Contact us</button>
            

            </Description>
            <Image>
                <img src={home1} alt="guy with a camera"/>
                
               </Image>
           
        </About>
    )
}


export default AboutSection
