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
import { FreeMode } from "swiper/modules";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
// import { Link } from "react-router-dom";

const SkeletonLoader = () => {

    const skeletonslides = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
        {
            id: 8,
        },
    ]


    return (
        <div>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">

                <Swiper
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper px-3 lg:px-5"
                    slidesPerView={2}
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
                    {
                        skeletonslides?.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="w-full">
                                    <Skeleton className="aspect-[3/4.5]" />
                                    <Skeleton />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </SkeletonTheme>
        </div>
    );
}
export default SkeletonLoader;