import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialMedia = () => {
    return (
        <div className='fixed top-[50%] right-1 z-50 space-y-1 text-[2rem] text-[#FFDD95]'>
            <AiFillGithub className=' cursor-crosshair active:text-[#FFF] active:scale-75 transition-all ease-in-out hover:scale-110' />
            <AiFillLinkedin className='cursor-crosshair active:text-[#FFF] active:scale-75 transition-all ease-in-out hover:scale-110' />
        </div>
    )
}

export default SocialMedia