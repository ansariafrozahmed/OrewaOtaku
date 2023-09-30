import React from 'react'
import TopCharSlider from './TopCharSlider'

const TopChar = () => {
    return (
        <div className='py-10 px-10 lg:px-8 bg-gradient-to-b from-[#181408]'>
            <div className='flex'>
                <h2 className='text-[2.3rem] font-bold animate-bounce'>Popular</h2>
                <h2 className='text-[2.3rem] font-bold text-[#FFDD95]'>Manga</h2>
            </div>
            <p className='text-[1rem] text-[#FFDD95] -mt-2'>Check Out Some Popular Manga!</p>
            <div className='mt-8'>
                <TopCharSlider />
            </div>
        </div>
    )
}

export default TopChar