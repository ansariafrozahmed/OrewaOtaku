import React from 'react'

const TopAiringCard = ({ image, name, type }) => {
    return (
        <div className=' w-[95%] lg:w-[220px] cursor-pointer active:cursor-grabbing '>
            <div className='w-full h-[250px] lg:h-[330px] bg-cover ' style={{ backgroundImage: `url(${image.webp.large_image_url})` }}>
            </div>
            <div className='py-1'>
                <h2 className='line-clamp-1'>{name}</h2>
                <p className='text-[0.9rem] text-[#8b8b8b]' >{type}</p>
            </div>
        </div>
    )
}

export default TopAiringCard