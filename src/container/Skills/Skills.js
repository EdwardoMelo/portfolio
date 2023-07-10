import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import  AppWrapp  from '../../wrapper/AppWrapp';
import MotionWrap from '../../wrapper/MotionWrapper';
import { urlFor, client } from '../../client';
import ReactTooltip from 'react-tooltip';

import './Skills.scss'

const Skills = () => {
  const [Skills, setSkills] = useState([])
  useEffect(()=>{
    const SkillsQuery = "*[_type == 'skills' ]";
    client.fetch(SkillsQuery).then((data)=> { setSkills(data); })
  })

  return (
    <>
    <h2 className='head-text'>Skills</h2>

    <div className='app__skills-container'>
    <motion.div className='app__skills-list'>
      { Skills.map((skill)=>(
        <motion.div whileInView={{opacitity: [0,1]}}transition={{duration:  0.5}}
        className="app__skills-item app__flex"
        key={skill.name}
        >
          <div className='app__flex' style={{backgroundColor: skill.bgColor}}>
              <img src={urlFor(skill.icon)} alt={skill.name}/>
          </div>
          <p className='p-text'>{skill.name}</p>
          </motion.div>
      ))}
    </motion.div>
    </div>
    </>
  )
}

export default AppWrapp(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);