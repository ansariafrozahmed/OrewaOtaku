import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import '../index.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import SkeletonLoader from "../Skeleton/SkeletonLoader";
// import { Link } from "react-router-dom";

const TopAnimeSlider = () => {

    const [TopMangaData, setTopMangaData] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const TopAnime = async () => {
        const res = await fetch('https://api.jikan.moe/v4/top/manga?filter=bypopularity&limit=25')
        const data = await res.json()
        const final = data.data
        setTopMangaData(final)
        setIsLoading(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            TopAnime()
        }, 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {
                    isLoading ? (
                        <SkeletonLoader />
                    )
                        :
                        (
                            <Swiper
                                spaceBetween={10}
                                freeMode={true}
                                modules={[FreeMode, Navigation]}
                                className="mySwiper px-3 lg:px-5"
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    // prevEl: '.swiper-button-prev',
                                }}
                                breakpoints={{
                                    // when window width is >= 1200px (desktop)
                                    1200: {
                                        slidesPerView: 6,
                                    },
                                    1000: {
                                        slidesPerView: 5.5,
                                    },
                                    800: {
                                        slidesPerView: 4.5,
                                    },
                                    600: {
                                        slidesPerView: 3.5,
                                    },
                                    400: {
                                        slidesPerView: 2.1,
                                    },
                                    300: {
                                        slidesPerView: 2.1,
                                    },
                                }}
                            >
                                {TopMangaData?.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <Link to={`/manga/details/${item.mal_id}`} key={index}>
                                            <div className="w-full">
                                                <div className="aspect-[3/4.5]">
                                                    <img className="h-full w-full" src={item.images.webp.large_image_url} alt={item.title} />
                                                </div>
                                                <div className="py-1">
                                                    <h2 className="line-clamp-1">{item.title}</h2>
                                                    <p className="text-[0.9rem] text-[#8b8b8b]">{item.type}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </SwiperSlide>
                                ))}
                                <div className="swiper-button-next text-white"></div>
                                {/* <div className="swiper-button-prev text-white"></div> */}
                            </Swiper>
                        )
                }
            </SkeletonTheme>
        </div>
    );
}
export default TopAnimeSlider;