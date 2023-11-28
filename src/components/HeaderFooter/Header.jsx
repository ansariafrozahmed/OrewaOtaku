import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const toggleOff = () => {
        setIsOpen(!isOpen)
    }

    const DropdownMenu = [
        {
            id: 1,
            label: "Anime",
            link: "/search/anime",
        },
        {
            id: 2,
            label: "Manga",
            link: "/search/manga",
        },
    ]

    const navMenu = [
        {
            id: 1,
            label: 'Genre',
            link: '/genre'
        },
        {
            id: 2,
            label: 'AboutMe',
            link: '/about',
        },
    ]
    return (
        <div className='sticky top-0 left-0 z-[999] pb-2 flex flex-col lg:flex-row items-center justify-between lg:px-20 lg:pb-0 text-[white] bg-[#25200c]'>
            <div className='py-2'>
                <Link to={'/'}>
                    <h2 className='font-logoFont text-[2.5rem] text-[#FFDD95] tracking-wide '>OrewaOtaku</h2>
                </Link>
            </div>

            <nav>
                <ul className='flex items-center justify-center gap-5 lg:gap-5'>
                    <div className="relative inline-block">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center gap-1 group hover:text-[#FFDD95] text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                        >
                            <FaChevronDown size={15} className={!isOpen ? 'rotate-0 transition-all ease-in-out' : 'rotate-180 transition-all ease-in-out '} color='#FFDD95' />Browse
                        </button>

                        {isOpen && (
                            <div className="absolute mt-2 w-48 bg-[#212121] border border-[#000] rounded shadow-lg">
                                <ul>
                                    {
                                        DropdownMenu?.map((item) => (
                                            <Link to={item.link} key={item.id}>
                                                <li onClick={toggleOff} className="px-4 py-2 hover:bg-[#FFDD95] hover:text-black cursor-pointer">{item.label}</li>
                                            </Link>
                                        ))
                                    }
                                </ul>
                            </div>
                        )}
                    </div>
                    {
                        navMenu.map(item => (
                            <li key={item.id} className='upp text-[0.9rem] font-normal tracking-widest hover:text-[#FFDD95] hover:border-b-2 border-b-2 border-[#212121] hover:border-white transition-all ease-in-out duration-100'>
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