import React from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'

const Header = () => {
    const navMenu = [
        // {
        //     id: 1,
        //     label: 'Anime',
        //     link: '/anime',
        // },
        // {
        //     id: 2,
        //     label: 'Manga',
        //     link: '/manga',
        // },
        {
            id: 3,
            label: 'Genre',
            link: '/genre'
        },
        {
            id: 4,
            label: 'AboutMe',
            link: '/about',
        },
    ]
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between lg:px-20 lg:pb-0 text-[white] bg-gradient-to-b from-[#181408]'>
            <div className='py-2'>
                <Link to={'/'}>
                    <h2 className='font-logoFont text-[2.5rem] text-[#FFDD95] tracking-wide '>OrewaOtaku</h2>
                </Link>
            </div>

            <nav>
                <ul className='flex items-center justify-center gap-5 lg:gap-5'>
                    <div className='flex items-center justify-center'>
                        <Link to={'/search'}>
                            {/* <BiSearchAlt size={30} color='#FFDD95' className='transition-all ease-in-out duration-200 hover:scale-125' /> */}
                            Search
                        </Link>
                    </div>
                    {
                        navMenu.map(item => (
                            <li key={item.id} className='upp text-[0.9rem] font-normal tracking-widest hover:text-[#FFDD95] hover:border-b-2 border-transparent hover:border-white transition-all ease-in-out duration-100'>
                                <Link to={item.link}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header