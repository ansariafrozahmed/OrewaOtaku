import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <div className='fixed top-[50%] right-1 z-50 space-y-2 text-[#FFDD95]'>
            <AiFillGithub size={30} />
            <AiFillLinkedin size={30} />
        </div>
    )
}

export default SocialMedia