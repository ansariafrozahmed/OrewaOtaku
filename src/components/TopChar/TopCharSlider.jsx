import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopCharCard from './TopCharCard';

const TopCharSlider = () => {

    const [topCharData, setTopCharData] = useState()

    const topCharFetch = async () => {
        const res = await fetch('https://api.jikan.moe/v4/top/manga?filter=bypopularity&limit=20')
        const data = await res.json()
        const final = data.data
        // console.log(final);
        setTopCharData(final)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            topCharFetch()
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
                    topCharData?.map((item, index) => (
                        <TopCharCard key={index} image={item.images} name={item.title} type={item.type} />
                    ))
                }
            </Slider>
        </div>
    )
}

export default TopCharSlider