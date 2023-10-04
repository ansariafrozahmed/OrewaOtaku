import React from 'react'
import TopAiringSlider from "./TopAiringSlider"

const TopAiring = () => {

    return (
        <div className='py-10 px-8 lg:px-14 bg-gradient-to-t from-[#181408]'>
            <div className='flex'>
                <h2 className='text-[2.3rem] font-bold'>Popular</h2>
                <h2 className='text-[2.3rem] font-bold text-[#FFDD95]'>Anime</h2>
            </div>
            <p className='text-[1rem] text-[#FFDD95] -mt-2'>Check Out Some Popular Anime!</p>
            <div className='mt-8'>
                <TopAiringSlider />
            </div>
        </div>
    )
}

export default TopAiring