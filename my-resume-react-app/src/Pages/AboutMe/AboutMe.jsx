import './AboutMe.css'
import React from 'react';
import myPic from '../../Images/img-intro.jpg'

const AboutMe = () => {


    return ( 
        <div className='about'>
            <div className='about-left'>
                <div className='about-left-wrapper'>
                    <h2 className='about-aboutduction'>Hello, My Name Is</h2>
                    <h2 className='about-name'>Nicolae Culda</h2>
                    <img className='img-about' src={myPic} alt="" />
                </div>
            </div>
            <div className='about-right'>
                <div className='about-p'>
                    <p>I’ve been working in hospitality industry in the past 12 years, from which 5 years as team leader. This help me to improve my communication and teamwork skills into becoming a better version of me.</p>
                    <p>Being passionate about computers and new technology, I’ve developed an interest for programming, starting to learn web development(Javascript) made a strong impact for me to change my career path.</p>
                    <p>Programing helps me develop better creativity, critical thinking, reasoning and problem solving skills. Becoming an programmer I will be responsible for developing new ways to solve problems, which requires the ability to essentially “think-outside-the-box” to develop solutions.</p>
                </div>
                
            </div>
        </div>
        
    )
}


export default AboutMe;