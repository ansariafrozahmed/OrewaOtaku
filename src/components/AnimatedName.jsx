import React from 'react'

const AnimatedName = () => {

    const imagelink = "https://static.crunchyroll.com/fms/landscape_large/94/png/a5bac8ac-8bf6-4a78-9674-4730fac66ab6.webp"

    return (
        <div className='lg:py-10 flex items-center justify-center'>
            {/* <div className=' h-[500px] overflow-hidden w-full flex items-center justify-center'>
                <img className=' w-[100%]' src={imagelink} alt="One Piece" />
            </div> */}
            <span className='maintext uppercase text-[12vw] lg:text-9xl font-black '>Orewa Otaku</span>
        </div>
    )
}

export default AnimatedName