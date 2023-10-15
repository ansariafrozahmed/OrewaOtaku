import React from 'react'

const SearchCardSection = ({ name, image, type }) => {
    return (
        <div className='aspect-[3/4] max-w-[170px] lg:max-w-[210px] mb-10 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer active:cursor-grab active:scale-90'>
            <img src={image} className='object-cover h-full w-full' alt="" />
            <div className="py-1">
                <h2 className="line-clamp-1">{name}</h2>
                <p className="text-[0.9rem] text-[#8b8b8b]">{type}</p>
            </div>
        </div>
    )
}

export default SearchCardSection