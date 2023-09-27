import React from 'react'
import TopAiringSlider from "./TopAiringSlider"

const TopAiring = () => {

    return (
        <div className='py-16 px-10 lg:px-8 bg-gradient-to-b lg:bg-gradient-to-r from-[#000]'>
            <div className='flex'>
                <h2 className='text-[2.3rem] font-bold animate-bounce'>Top</h2>
                <h2 className='text-[2.3rem] font-bold text-[#FFDD95]'>Airing</h2>
            </div>
            <p className='text-[1rem] text-[#FFDD95] -mt-2'>Check Out This Top Airing Anime!</p>
            <div className='mt-8'>
                <TopAiringSlider />
            </div>
        </div>
    )
}

export default TopAiring