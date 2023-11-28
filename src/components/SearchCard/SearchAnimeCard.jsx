import React from 'react'
import { Link } from 'react-router-dom'

const SearchAnimeCard = ({ name, image, type, id }) => {
    return (
        <div className='aspect-[3/4.3] max-w-[48%] md:max-w-[18%] mb-10 transition-all ease-in-out duration-500 hover:scale-105 cursor-pointer active:cursor-grab active:scale-90'>
            <Link to={`/anime/details/${id}`}>
                <img src={image} className='object-cover h-full w-full' alt="" />
                <div className="py-1">
                    <h2 className="line-clamp-1">{name}</h2>
                    <p className="text-[0.9rem] text-[#8b8b8b]">{type}</p>
                </div>
            </Link>
        </div>
    )
}

export default SearchAnimeCard