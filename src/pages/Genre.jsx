import React from 'react'
import { motion } from 'framer-motion'
import { GiPunchBlast } from 'react-icons/gi'

const Genre = () => {

    const category = [
        {
            id: 1,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 2,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 3,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 4,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 5,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 6,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 7,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },
        {
            id: 8,
            icon: '',
            label: 'Action',
            image: 'https://wallpapers.com/images/hd/action-anime-1gwafa8zya1v1tsz.jpg',
        },

    ]

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className='w-[100%] mt-12 px-2 lg:px-20'
        >

            <div className='leading-tight pb-5 lg:pb-10'>
                <h1 className='text-[1.6rem] lg:text-[2.2rem] font-bold tracking-wide uppercase text-[#FFDD95]'>Popular Categories</h1>
                <p className='text-[0.9rem] lg:text-[1rem] tracking-wider'>Check Out Some Popular Categories Among Anime Fans</p>
            </div>

            <div className='flex flex-wrap justify-start gap-[2%] '>
                {
                    category?.map((item, index) => {
                        return (
                            <div key={index} className='aspect-[6/3.5] mb-[2%] w-[48%] lg:w-[23%] bg-cover rounded-lg overflow-hidden transition-all ease-in-out duration-500 active:scale-90 cursor-pointer hover:scale-105' style={{ backgroundImage: `url(${item.image})` }}>
                                <div className='bg-gradient-to-t from-[#212121] h-full w-full flex flex-col items-center justify-center '>
                                    <GiPunchBlast size={40} />
                                    <img src="" alt="" />
                                    <p className='text-[1.1rem] tracking-wider font-bold uppercase'>{item.label}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default Genre