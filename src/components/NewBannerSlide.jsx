import React from "react";
import { useState, useEffect } from "react";
import BannerSkeleton from "./Skeleton/BannerSkeleton";
import { BsCollectionPlay } from "react-icons/bs";
import { SkeletonTheme } from "react-loading-skeleton";
import { Carousel, IconButton } from "@material-tailwind/react";

const NewBannerSlide = () => {
    const [bannerImageData, setBannerImageData] = useState();
    const [isBannerLoading, setIsBannerLoading] = useState(true);

    const BannerImageFetchFunc = async () => {
        const url = await fetch(
            "https://sagartech.online/ansariafroz/wp-json/wp/v2/bannerslide?acf_format=standard&_fields=id,title,acf"
        );
        const res = await url.json();
        // console.log(res)
        setBannerImageData(res);
        setIsBannerLoading(false);
        // console.log(bannerImageData)
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            BannerImageFetchFunc();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {isBannerLoading ? (
                    <BannerSkeleton />
                ) : (
                    <div className="h-[80vh] w-full">
                        <Carousel
                            autoplay={true}
                            loop={true}
                            autoplayDelay={5000}
                            navigation={({ setActiveIndex, activeIndex, length }) => (
                                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                                    {new Array(length).fill("").map((_, i) => (
                                        <span
                                            key={i}
                                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                                }`}
                                            onClick={() => setActiveIndex(i)}
                                        />
                                    ))}
                                </div>
                            )}
                        >
                            {bannerImageData?.map((item) => (
                                <div className="relative h-full w-full" key={item.id}>
                                    <img
                                        src={item.acf.image}
                                        alt="image 1"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-black">
                                        <div className="h-full w-full lg:w-[35%] flex flex-col items-center lg:items-start justify-end lg:justify-center px-10 pb-10 lg:pl-20">
                                            <img
                                                src={item.acf.logo}
                                                alt={item.title.rendered}
                                                className="h-[70px]"
                                            />
                                            <p className="line-clamp-3 opacity-80 text-center lg:text-left text-[1rem] lg:text-[1.1rem] font-medium ">
                                                {item.acf.summary}
                                            </p>
                                            <a
                                                className="border-2 border-[#FFDD95] bg-transparent text-[#FFDD95] transition-all ease-in-out duration-500 font-semibold mt-2 lg:mt-5 px-5 py-2 rounded-xl flex items-center gap-3 hover:bg-[#FFDD95] hover:text-[#000] hover:scale-110 "
                                                href={item.acf.trailer}
                                                target="_blank"
                                            >
                                                Watch <BsCollectionPlay />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </SkeletonTheme>
        </div>
    );
};

export default NewBannerSlide;
