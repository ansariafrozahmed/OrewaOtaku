import React, { useEffect, useState } from 'react'
import TopAiringCard from './TopAiringCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopAiringSlider = () => {

    const [topAiringData, setTopAiringData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const topAiringFetch = async () => {
        const res = await fetch('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=20')
        const data = await res.json()
        const final = data.data
        setTopAiringData(final)
        setIsLoading(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            topAiringFetch()
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 5,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };


    return (
        <div className='w-full'>
            {isLoading && <img className='h-[100px]' src='src\assets\loading.svg'></img>}
            <Slider {...settings} >
                {
                    topAiringData?.map((item, index) => (
                        <TopAiringCard key={index} image={item.images} name={item.title} type={item.type} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default TopAiringSlider