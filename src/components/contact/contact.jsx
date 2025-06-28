import './contact.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_6phm4ar',
            'template_zcxds5a',
            form.current,
            'blaHt_5KIJ711DfGH'
        ).then(
            (result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>
                    Please fill out the form below to discuss any work opportunities.
                </span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your name' name='from_name' />
                    <input type='text' className='email' placeholder='Your Email' name='from_email' />
                    <textarea name='message' placeholder='Your Message' rows={5} className='msg'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>
                </form>

                <div className='social-icons'>
                    <a href='https://www.linkedin.com/in/amolo-hillary-118b3b371/' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a href='https://github.com/HillaryOnyango' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-github'></i>
                    </a>
                    <a href='https://x.com/amolo_hillary' target='_blank' rel='noopener noreferrer'>
                        <i className='fab fa-x-twitter'></i>
                    </a>
                    <a
                        href='https://mail.google.com/mail/?view=cm&fs=1&to=hillaryonyango19@gmail.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <i className='fas fa-envelope'></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
