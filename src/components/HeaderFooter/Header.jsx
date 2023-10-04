import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const navMenu = [
        {
            id: 1,
            label: 'Home',
            link: '/'
        },
        {
            id: 2,
            label: 'AboutMe',
            link: '/about'
        },
        {
            id: 3,
            label: 'Github',
            link: 'https://github.com/ansariafrozahmed?tab=repositories',
            tar: '_blank'
        },
        {
            id: 4,
            label: 'LinkedIn',
            link: 'https://github.com/ansariafrozahmed?tab=repositories',
            tar: '_blank'
        }
    ]
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between lg:px-20 lg:pb-0 text-[white]'>
            <div className='py-2'>
                <h2 className='font-logoFont text-[2.5rem] text-[#FFDD95] tracking-wide '>OrewaOtaku</h2>
            </div>
            <nav>
                <ul className='flex gap-5'>
                    {
                        navMenu.map(item => (
                            <li key={item.id} className='text-[1rem] font-normal tracking-widest hover:text-[#FFDD95]'>
                                <Link to={item.link} target={item.tar ? item.tar : ""}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Header