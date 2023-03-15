import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'
const Contact = () => {
 
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_y4dsq8h', 'template_p2he9j5', form.current, 'bBG2gTTBHnS6Udd2M')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className='contact-form' id='Contact'>
            <div className="w-left">
                <div className="awesome">
                    <span style={{color
            : darkMode? 'white':''}}> Get in touch</span>
                    <span>Contact me</span>
                    <div
                        className="blur s-blurl"
                        style={{ background: '#ABF1FF94' }}
                    ></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} action="">
                    <input type='text' name='name' className='user' placeholder='Name' />
                    <input type='email' name='email' className='user' placeholder='Email' />
                    <textarea type='message' name='message' className='user' placeholder='Message' />
                    <input type='submit' value='Send' className='button' />
                    <span>{done && "thanke for contacting me..."}</span>
                    <div
                        className="blur1"
                        style={{ background: "Var(--purple)" }}
                    ></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
