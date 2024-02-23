import React from "react";
import { useState, useEffect } from "react";
import BannerSkeleton from "./Skeleton/BannerSkeleton";
import { BsCollectionPlay } from "react-icons/bs";
import { SkeletonTheme } from "react-loading-skeleton";
import { Carousel, IconButton } from "@material-tailwind/react";

const NewBannerSlide = () => {
    const [isBannerLoading, setIsBannerLoading] = useState(true);

    const bannerData = [
        {   
            id:1,
            image:"https://assets-prd.ignimgs.com/2022/08/17/top25animecharacters-blogroll-1660777571580.jpg",
            title: "Death Note",
            desc: "Ever since the release of the innovative NerveGear, gamers from all around the globe have been given the opportunity to experience a completely immersive virtual reality. Sword Art Online (SAO), one of the most recent games on the console, offers a gateway into the wondrous world of Aincrad, a vivid, medieval landscape where users can do anything within the limits of imagination. With the release of this worldwide sensation, gaming has never felt more lifelike.",
            url: "https://www.youtube.com/watch?v=-tviZNY6CSw",
            logo: "https://static.vecteezy.com/system/resources/thumbnails/023/632/943/small/anime-boy-black-and-white-logo-vector.jpg"


        },
        {
            id:2,
            image:"https://img.youtube.com/vi/-tviZNY6CSw/maxresdefault.jpg",
            title: "デスノート",
            desc: "the idyllic fantasy rapidly becomes a brutal nightmare when SAO's creator traps thousands of players inside the game. The \"log-out\" function has been removed, with the only method of escape involving beating all of Aincrad's one hundred increasingly difficult levels. Adding to the struggle, any in-game death becomes permanent, ending the player's life in the real world.",
            url: "https://www.youtube.com/watch?v=fV7nGIUuyzA",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIG-pCpaHErAkVyoOV4yJehFF60mzwymvd5QffjPqXxlGrgcVn5k_z2a0P82enmrLbDV8&usqp=CAU"

        },
        {
            id:3,
            image:"https://img.youtube.com/vi/XBNWo25izJ8/maxresdefault.jpg",
            title: "Sword Art Online",
            desc: "Kirigaya was fortunate enough to be a beta-tester for the game, he quickly finds that despite his advantages, he cannot overcome SAO's challenges alone. Teaming up with Asuna Yuuki and other talented players, Kirito makes an effort to face the seemingly insurmountable trials head-on. But with difficult bosses and threatening dark cults impeding his progress,",
            url: "https://www.youtube.com/watch?v=1dy2zPPrKD0",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wRX_ySbsfPZdPRKsuVIfkPEl33x4xD_D-xzvg8igBrSuvis9scwMBjWb4Qm9J3VBlQI&usqp=CAU"

        }

    ]

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBannerLoading();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {isBannerLoading ? (
                    <BannerSkeleton />
                ) : (
                    <div className="h-[60vh] lg:h-[80vh] w-full">
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
                            {bannerData.map((item, index) => (
                                <div className="relative h-full w-full" key={index}>
                                     <img
                                        src={item.image}
                                        alt="image 1"
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t lg:bg-gradient-to-r from-black">
                                        <div className="h-full w-full lg:w-[35%] flex flex-col items-center lg:items-start justify-end lg:justify-center px-10 pb-10 lg:pl-20">
                                            <img
                                                src={item.logo}
                                                alt={item.title.rendered}
                                                className="h-[70px]"
                                            />
                                            <p className="line-clamp-3 opacity-80 text-center lg:text-left text-[1rem] lg:text-[1.1rem] font-medium ">
                                                {item.desc}
                                            </p>
                                            <a
                                                className="border-2 border-[#FFDD95] bg-transparent text-[#FFDD95] transition-all ease-in-out duration-500 font-semibold mt-2 lg:mt-5 px-5 py-2 rounded-xl flex items-center gap-3 hover:bg-[#FFDD95] hover:text-[#000] hover:scale-110 "
                                                href={item.url}
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
