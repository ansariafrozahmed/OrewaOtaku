import React from 'react'

const SearchCardSection = ({ name, image, type }) => {
    return (
        <div className='w-[49%] lg:w-[19%] mb-10 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer active:cursor-grab active:scale-90'>
            <div className='h-[300px] lg:h-[300px] bg-cover bg-center '
                style={{ backgroundImage: `url(${image})` }}
            >
            </div>
            <div className="py-1">
                <h2 className="line-clamp-1">{name}</h2>
                <p className="text-[0.9rem] text-[#8b8b8b]">{type}</p>
            </div>
        </div>
    )
}

export default SearchCardSection