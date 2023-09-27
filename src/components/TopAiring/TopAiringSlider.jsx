import React, { useEffect, useState } from 'react'
import TopAiringCard from './TopAiringCard'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopAiringSlider = () => {

    const [topAiringData, setTopAiringData] = useState()

    const topAiringFetch = async () => {
        const res = await fetch('https://api.jikan.moe/v4/top/anime?filter=airing&limit=20')
        const data = await res.json()
        const final = data.data
        setTopAiringData(final)
    }

    useEffect(() => {
        topAiringFetch()
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <div className='w-full'>
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