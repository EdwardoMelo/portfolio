import React, { useState } from 'react';
import { client } from '../../client';
import AppWrapp from '../../wrapper/AppWrapp';
import MotionWrap from '../../wrapper/MotionWrapper';
import  images  from '../../constants/images.js';
import './Footer.scss';

const Footer = () => {
  const [FormData, setFormData] = useState({ name: '', email: ' ', message: ''});
  const [IsFormSubmitted, setIsFormSubmitted] = useState(false);
  const [Loading, setLoading] = useState(false);
  const { name, email, message } = FormData;

  const handleChangeInput = (e) =>{
    const { name, value } = e.target;
    setFormData({...FormData, [name] : value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact', 
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      }).catch((err) => console.log(err + '\n' + `${contact}`));
  }
  return (
    <>
    <h2 className="head-text">Talk to me!</h2>
    <div className="app__footer-cards" >
        <div className='app__footer-card'>
            <img src={images.email} alt="email"/>
            <a href='mailto:eduardo017melo@gmail.com' className='p-text'>eduardo017melo@gmail</a>
        </div>
        <div className='app__footer-card'>
            <img src={images.mobile} alt="email"/>
            <a href='tel: +55 51 998951079' className='p-text'>+55 51 99895-1079</a>
        </div>
    </div>

    { !IsFormSubmitted ?

    <div className='app__footer-form app__flex'>
        <div className='app__flex'>
              <input className='p-text' name='name' type="text" placeholder="Your Name" value={name} onChange={handleChangeInput}/>
        </div>
        <div className='app__flex'>
              <input className='p-text' name='email' type="email" placeholder="Your Email" value={email} onChange={handleChangeInput}/> 
        </div>
        <div>
          <textarea className='p-text'placeholder='Your Message' value={message} onChange={handleChangeInput} name="message"/>
        </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{Loading ? 'Sending': 'Send Message'}</button>
    </div>
    : <div>
        <h3 className='head-text'>
            Thank you for getting in touch!
        </h3>
      </div>}

    </>
  )
}

export default AppWrapp (
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);;