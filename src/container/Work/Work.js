import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { filterProps, motion } from 'framer-motion';
import  AppWrapp  from '../../wrapper/AppWrapp';
import { urlFor, client } from '../../client'
import './Work.scss'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [AnimateCard, setAnimateCard] = useState({y : 0, opacity: 1});
  const [Works, setWorks] = useState([]);
  const [FilterWork, setFilterWork] = useState([])

  useEffect(()=>{
    const query = "*[_type == 'works' ]";
    client.fetch(query).then((data)=> { setWorks(data); setFilterWork(data)})
  }, [])

  const handleWorkFilter = (item) =>{
      setActiveFilter(item);
      setAnimateCard([{ y: 100, opacity: 0}]);
      setTimeout(() =>{
        setAnimateCard([{y:0, opacity: 1}]);

        if(item === 'All'){
          setFilterWork(Works);
        }else{
          const filteredWorks = Works.filter((work)=> work.tags.includes(item));
          setFilterWork(filteredWorks);
          console.log(filteredWorks)
        }
        
      }, 500);
  };
  
  return (
    <>
    <h2 className='head-text'> 
    My Personal 
    <span> Projects</span>  
    </h2>
    <div className='app__work-filter'> 
    { ['React JS', 'Node JS', 'All'].map((item, index) =>(
      <div 
      key={index}
      onClick={()=> handleWorkFilter(item)}
      className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : '' }`}
      >
        {item}
      </div>
    ))}
    </div>
    <motion.div
    animate={AnimateCard}
    transition={{ duration: 0.5, delayChildren: 0.5}}
    className="app__work-portfolio">
      {FilterWork.length > 0? FilterWork.map((work, index)=>(
        <div className='app__work-item app__flex' key={index}>
          <div className='app__work-img app__flex'>
            
              <img src={urlFor(work.imgUrl)} alt={work.name}/>
          
              <motion.div 
              whileHover={{opacity: [0,1]}}
              transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
              className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blanck" rel="norefffer">
                  <motion.div
                   whileInView={{scale: [0,1]}}
                   whileHover={{scale: [1,0.9]}}
                   transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                   className="app__flex">
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target="_blanck" rel="norefffer">
                  <motion.div
                   whileInView={{scale: [0,1]}}
                   whileHover={{scale: [1,0.9]}}
                   transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                   className="app__flex">
                    <AiFillGithub />
                  </motion.div>

                </a>
              </motion.div>
          </div>
          <div className='app__work-content app__flex'>
            <h4 className='bold-text'>{work.title}</h4>
            <p className='p-text' style={{marginTop: 10}}>{work.description}</p>

            <div className='app__work-tag app__flex'>
                  {work.tags.map((tag)=> (
                    tag+"/ "
                  ))}
            </div>
          </div>
        </div>
      )): <h1> No Projects Yet</h1>}

    </motion.div>
    </>
  )
}

export default AppWrapp(Work, 'work');