import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import { AiFillStar } from "react-icons/ai";
import { BsCollectionPlay } from "react-icons/bs";
import { useState, useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// import SkeletonLoader from "../Skeleton/SkeletonLoader";
import BannerSkeleton from "./Skeleton/BannerSkeleton";

const BannerSlides = () => {

    const [bannerImageData, setBannerImageData] = useState()
    const [isBannerLoading, setIsBannerLoading] = useState(true);

    const BannerImageFetchFunc = async () => {
        const url = await fetch('https://sagartech.online/ansariafroz/wp-json/wp/v2/bannerslide?acf_format=standard&_fields=id,title,acf')
        const res = await url.json()
        // console.log(res)
        setBannerImageData(res)
        setIsBannerLoading(false);
        // console.log(bannerImageData)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            BannerImageFetchFunc();
        }, 1000);
        return () => clearTimeout(timer);
    }, [])

    // const images = [
    //     {
    //         url: "https://wallpapercave.com/wp/wp6722900.jpg",
    //         title: "Naruto",
    //         logo: "https://i.ibb.co/KLLF6g6/naruto.png",
    //         rating: 7.99,
    //         desc: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
    //     },
    //     {
    //         url: "https://wallpapercave.com/wp/wp9995103.jpg",
    //         title: "One Piece",
    //         logo: "https://i.ibb.co/K68bG36/op.png",
    //         rating: 8.7,
    //         desc: "Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.",
    //     },
    //     {
    //         url: "https://wallpapercave.com/wp/wp4404264.jpg",
    //         title: "Dragon Ball Z",
    //         logo: "https://i.ibb.co/Vp24R3V/dbz.png",
    //         rating: 8.17,
    //         desc: "Five years after winning the World Martial Arts tournament, Gokuu is now living a peaceful life with his wife and son. This changes, however, with the arrival of a mysterious enemy named Raditz who presents himself as Gokuu's long-lost brother. He reveals that Gokuu is a warrior from the once powerful but now virtually extinct Saiyan race, whose homeworld was completely annihilated. When he was sent to Earth as a baby, Gokuu's sole purpose was to conquer and destroy the planet; but after suffering amnesia from a head injury, his violent and savage nature changed, and instead was raised as a kind and well-mannered boy, now fighting to protect others.",
    //     },
    //     {
    //         url: "https://images.alphacoders.com/667/667209.jpg",
    //         title: "Death Note",
    //         logo: "https://i.ibb.co/4pqxhrS/death-note.png",
    //         rating: 8.62,
    //         desc: "Brutal murders, petty thefts, and senseless violence pollute the human world. In contrast, the realm of death gods is a humdrum, unchanging gambling den. The ingenious 17-year-old Japanese student Light Yagami and sadistic god of death Ryuk share one belief: their worlds are rotten.",
    //     },
    //     {
    //         url: "https://wallpapercave.com/wp/yuKEcOl.jpg",
    //         title: "Bleach",
    //         logo: "https://i.ibb.co/chVr5M1/bleach.png",
    //         rating: 7.93,
    //         desc: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant. To save his family, Ichigo accepts Rukia's offer of taking her powers and becomes a Soul Reaper as a result.",
    //     },
    // ];

    return (
        <div className="">
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                {isBannerLoading ? (
                    <BannerSkeleton />
                ) : (
                    <Fade arrows={false} duration={2000} autoplay={true} infinite={true}>
                        {bannerImageData?.map((item, index) => (
                            <div key={index}>
                                <div
                                    className="bg-top h-[70vh] bg-cover"
                                    style={{ backgroundImage: `url(${item.acf.image})` }}
                                >
                                    <div className="h-full lg:w-[70%] bg-gradient-to-t from-black md:bg-gradient-to-r md:from-black lg:bg-gradient-to-r lg:from-black">
                                        <div className="h-full lg:w-[70%] lg:pr-80 w-full flex flex-col items-center lg:items-start lg:justify-center justify-end px-10 pb-5">
                                            {/* <h2 className=" text-[2.5rem] lg:text-[3rem] font-bold text-[#FFDD95] lg:mb-2">
                                        {item.title}
                                    </h2> */}
                                            <img src={item.acf.logo} alt={item.title.rendered} className="h-[80px] lg:h-[100px]" />
                                            {/* <div className="hidden lg:flex items-center gap-1 lg:mb-1">
                                        <AiFillStar size={25} color="gold" />
                                        <span className="text-[1.1rem] font-sans ">
                                            {item.rating}
                                        </span>
                                    </div> */}
                                            <p className="leading-snug text-center lg:text-left text-[1rem] lg:text-[1rem] line-clamp-4">
                                                {item.acf.summary}
                                            </p>
                                            <a
                                                className="border-2 border-[#FFDD95] bg-transparent text-[#FFDD95] transition-all ease-in-out duration-500 font-semibold mt-2 lg:mt-5 px-5 py-2 rounded-xl flex items-center gap-3 hover:bg-[#FFDD95] hover:text-[#000] hover:scale-110 "
                                                href=""
                                                target="_blank"
                                            >
                                                Watch <BsCollectionPlay />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fade>
                )}
            </SkeletonTheme>
        </div>
    );
};

export default BannerSlides;
