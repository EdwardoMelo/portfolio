import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { urlFor, client} from '../../client'
import  AppWrapp  from '../../wrapper/AppWrapp';


const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = "*[_type == 'abouts']";
    client.fetch(query).then((data) => setAbouts(data));
    console.log(abouts)
  }, []);
  

  return (
    <>
    <h2 className='head-text'> 
    About
    <span> Me</span>
    </h2>
    <p className='aboutMeText'>I'm a 21-year-old web developer passionate about creating stunning and functional websites. I love turning ideas into reality using technology. The fundamentals of a good project in my opinion are: </p>

    <div className='app__profiles'>
      { abouts.map((about, index) =>( 
        <motion.div 
        whileInView={{ opacity: 1}}
        whileHover={{scale: 1.1}}
        transition={{duration: 0.5, type: 'tween'}}
        className="app__profile-item"
        key={about.title + index}
        >
          <img src={urlFor(about.imgUrl)} alt={about.title} />
          <h2 className="bold-text">{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>
        </motion.div>
      ))}
    </div>
    </>
  )
}

export default AppWrapp(About, 'about');