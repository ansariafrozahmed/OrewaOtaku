import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image'
import { AiFillStar } from 'react-icons/ai'

const BannerSlides = () => {

    const images = [
        {
            url: 'https://wallpapercave.com/wp/wp6722900.jpg',
            title: 'Naruto',
            rating: 7.99,
            desc: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto."
        },
        {
            url: 'https://wallpapercave.com/wp/wp9995103.jpg',
            title: 'One Piece',
            rating: 8.70,
            desc: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it."
        },
        {
            url: 'https://wallpapercave.com/wp/wVXtMTn.jpg',
            title: 'Dragon Ball Z',
            rating: 8.17,
            desc: "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others."
        },
        {
            url: 'https://images.alphacoders.com/667/667209.jpg',
            title: 'Death Note',
            rating: 8.62,
            desc: "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten."
        },
        {
            url: 'https://wallpapercave.com/wp/yuKEcOl.jpg',
            title: 'Bleach',
            rating: 7.93,
            desc: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result."
        },
    ];

    return (
        <div className=''>
            <Fade arrows={false} duration={3000} autoplay={true} infinite={true}>
                {
                    images.map((item, index) => (
                        <div key={index}>
                            <div className='bg-center h-[60vh] lg:h-[75vh] bg-cover' style={{ backgroundImage: `url(${item.url})` }}>
                                <div className='h-full lg:w-[70%] bg-gradient-to-t from-black md:bg-gradient-to-r md:from-black lg:bg-gradient-to-r lg:from-black'>
                                    <div className='h-full lg:w-[70%] lg:pr-72 w-full flex flex-col items-center lg:items-start lg:justify-center justify-end leading-tight px-10 pb-5'>
                                        <h2 className=' text-[2.5rem] lg:text-[3rem] font-bold text-[#FFDD95] lg:mb-2'>{item.title}</h2>
                                        <div className='hidden lg:block lg:flex items-center gap-1 lg:mb-1 animate-bounce'>
                                            <AiFillStar size={25} color='gold' />
                                            <span className='text-[1.1rem] font-sans '>{item.rating}</span>
                                        </div>
                                        <p className='leading-snug text-center lg:text-left text-[1rem] lg:text-[1.2rem] line-clamp-3 lg:line-clamp-4'>{item.desc}</p>
                                        <a className='border-2 border-[#FFDD95] bg-[#FFDD95] text-black font-semibold mt-2 lg:mt-5 px-5 py-2 rounded-xl ' href="" target='_blank'>Know More..</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Fade>
        </div>
    )
}

export default BannerSlides