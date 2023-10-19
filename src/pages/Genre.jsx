import React from "react";
import { motion } from "framer-motion";
import {
    GiPunchBlast,
    GiDramaMasks,
    GiSelfLove,
    GiMaterialsScience,
    GiLoveMystery,
    GiPowerLightning,
} from "react-icons/gi";
import { RiTreasureMapLine } from "react-icons/ri";
import { FaRegLaughSquint } from "react-icons/fa";

const Genre = () => {
    const category = [
        {
            id: 1,
            icon: <GiPunchBlast size={30} />,
            label: "Action",
            image:
                "https://wallpapers.com/images/high/action-anime-cd1acx54k1gly3qj.webp",
        },
        {
            id: 2,
            icon: <RiTreasureMapLine size={30} />,
            label: "Adventure",
            image:
                "https://wallpapers.com/images/high/digimon-background-atdsmlsttaro9n69.webp",
        },
        {
            id: 3,
            icon: <FaRegLaughSquint size={30} />,
            label: "Comedy",
            image:
                "https://wallpapers.com/images/high/funny-anime-one-piece-artwork-xutitmdmtgfzwhpl.webp",
        },
        {
            id: 4,
            icon: <GiDramaMasks size={30} />,
            label: "Drama",
            image:
                "https://wallpapers.com/images/high/k-on-background-spmp1zaxd4dm10ve.webp",
        },
        {
            id: 5,
            icon: <GiSelfLove size={30} />,
            label: "Fantasy",
            image:
                "https://wallpapers.com/images/high/anime-love-city-night-lights-4ld79mel973e9plp.webp",
        },
        {
            id: 6,
            icon: <GiMaterialsScience size={30} />,
            label: "Sci-fi",
            image:
                "https://wallpapers.com/images/high/gundam-1920-x-1080-background-5fnt5kmwwfs3quxc.webp",
        },
        {
            id: 7,
            icon: <GiLoveMystery size={30} />,
            label: "Romance",
            image:
                "https://wallpapers.com/images/high/student-couple-with-sunlight-romance-anime-4c2a3s7adq0vjvun.webp",
        },
        {
            id: 8,
            icon: <GiPowerLightning size={30} />,
            label: "Shounen",
            image:
                "https://wallpapers.com/images/hd/one-piece-luffy-holding-hat-nazsl5hmss8bfb9n.webp",
        },
    ];

    return (
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-[100%] mt-8 lg:mt-12 px-2 lg:px-20"
        >
            <div className="leading-tight pb-8 lg:pb-10">
                <h1 className="text-[1.6rem] lg:text-[2.2rem] font-bold tracking-wide uppercase text-[#FFDD95]">
                    Popular Categories
                </h1>
                <p className="text-[0.9rem] lg:text-[1rem] tracking-wider">
                    Check Out Some Popular Categories Among Anime Fans
                </p>
            </div>

            <div className="flex flex-wrap justify-start gap-[2%] ">
                {category?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="aspect-[6/4] mb-[2%] w-[48%] lg:w-[23%] bg-cover rounded-lg overflow-hidden transition-all ease-in-out duration-500 active:scale-90 cursor-pointer hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                        >
                            <div className="bg-gradient-to-t from-[#212121] h-full w-full flex flex-col items-center justify-center ">
                                {item.icon}
                                <p className="text-[1rem] tracking-wider font-bold uppercase">
                                    {item.label}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Genre;
