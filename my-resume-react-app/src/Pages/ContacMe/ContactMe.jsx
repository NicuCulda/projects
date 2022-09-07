import './ContactMe.css'
import React from 'react'
import {useState} from "react"
import contactimg from '../../Images/contact.jpg'

const ContactMe = () => {
    const formInitialDetails = {
        firstName: '';
        lastName: '';
        email: '';
        phone: '';
        message: '';
    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const[buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit = () => {
        
    }

    return (
        <section className='contact' id='connect'>
            <container>
                <row className="align-items-center">
                    <col md={6}>
                        <img src={contactimg} alt="Contact Us" />
                    </col>
                    <col md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <row>
                                <col sm={6} className="px-1">
                                    <input type="text" value={formDetails, firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </col>
                                <col sm={6} className="px-1">
                                    <input type="text" value={formDetails, lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                                </col>
                                <col sm={6} className="px-1">
                                    <input type="email" value={formDetails, email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                                </col>
                                <col sm={6} className="px-1">
                                    <input type="tel" value={formDetails, phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                                </col>
                                <col>
                                    <textarea row="6" value={formDetails, message} placeholder="Message Me"  onChange={(e) => onFormUpdate('message', e.target.value)} />
                                    <button type='submit'><span>{buttonText}</span></button>
                                </col>
                                <col>
                                {
                                    status.message &&
                                    <col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}></p>
                                    </col>
                                }
                                </col>
                            </row>
                        </form>
                    </col>
                </row>
            </container>
        </section>
            
    )
}



export default ContactMe