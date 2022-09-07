import './ContactMe.css'
import React from 'react'
import {useState} from "react"
import contactimg from '../../Images/contact.jpg'
import phone from '../../Images/telephone-fill.svg'
import envelope from '../../Images/envelope-fill.svg'
import map from '../../Images/geo-alt-fill.svg'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


const ContactMe = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_wkksfdn', 
            'template_qbc4xf8', 
            formRef.current, 'PiaIztszjHLVWDArf')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }



    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className='contact-wrapper'>
                <div className="contact-left">
                    <h1 className='contact-title'>Contact Me</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img className='contact-icon' src={phone} alt="" /> +4 0753 046 160
                        </div>
                        <div className="contact-info-item">
                            <img className='contact-icon' src={envelope} alt="" /> culda_nicu@yahoo.com
                        </div>
                        <div className="contact-info-item">
                            <img className='contact-icon' src={map} alt="" /> Cluj Napoca, Romania
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name' name='user_name' />
                        <input type="text" placeholder='Subject' name='user_subject'/>
                        <input type="email" placeholder='Email' name='user_email' />
                        <textarea rows="5" placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactMe