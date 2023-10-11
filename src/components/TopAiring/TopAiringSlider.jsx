import React, { useEffect, useState } from "react";
import TopAiringCard from "./TopAiringCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoader from "../SkeletonLoader";

const TopAiringSlider = () => {
    const [topAiringData, setTopAiringData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const topAiringFetch = async () => {
        const res = await fetch(
            "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=24"
        );
        const data = await res.json();
        const final = data.data;
        setTopAiringData(final);
        // console.log(topAiringData)
        setIsLoading(false);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            topAiringFetch();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        draggable: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <div className="w-full">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {isLoading ? (
                    <SkeletonLoader />
                ) : (
                    <Slider {...settings}>
                        {topAiringData?.map((item, index) => (
                            <TopAiringCard
                                key={index}
                                rank={index + 1}
                                image={item.images}
                                name={item.title}
                                type={item.type}
                            />
                        ))}
                    </Slider>
                )}
            </SkeletonTheme>
        </div>
    );
};

export default TopAiringSlider;
