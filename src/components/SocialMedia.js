import React from 'react'
import { BsGithub, BsLinkedin} from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a target='blank' href="https://github.com/EdwardoMelo"><BsGithub /></a>
        </div>
        <div>
            <a target='blank' href="https://www.linkedin.com/in/eduardo-melo-4025bb202/"><BsLinkedin /> </a>
        </div>
    </div>
  )
}

export default SocialMedia