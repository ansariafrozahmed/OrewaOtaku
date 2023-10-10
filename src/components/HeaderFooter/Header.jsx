import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
    const navMenu = [
        {
            id: 1,
            label: 'Anime',
            link: '/anime',
        },
        {
            id: 2,
            label: 'Manga',
            link: '/manga',
        },
        {
            id: 3,
            label: 'Genre',
            link: '/genre'
        },
        {
            id: 4,
            label: 'About Me',
            link: '/about',
        },
    ]
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between lg:px-20 lg:pb-0 text-[white] '>
            <div className='py-2'>
                <Link to={'/'}>
                    <h2 className='font-logoFont text-[2.5rem] text-[#FFDD95] tracking-wide '>OrewaOtaku</h2>
                </Link>
            </div>

            <nav>
                <ul className='flex gap-5 lg:gap-8'>
                    {
                        navMenu.map(item => (
                            <li key={item.id} className='upp text-[1rem] font-normal tracking-widest hover:text-[#FFDD95]'>
                                <Link to={item.link}>{item.label}</Link>
                            </li>
                        ))
                    }
                    <div className='flex items-center justify-center'>
                        <Link to={'/search'}>
                            <BiSearchAlt size={25} color='#FFDD95' />
                        </Link>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header