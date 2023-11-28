import React, { useEffect, useState } from "react";
import SearchAnimeCard from "../components/SearchCard/SearchAnimeCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import SearchSkeleton from "../components/Skeleton/SearchSkeleton";

const SearchAnime = () => {
    const [searchText, setSearchText] = useState("Seven Deadly Sins");
    const [searchData, setSearchData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const searchApiFunc = async (query) => {
        try {
            const searchUrl = await fetch(
                `https://api.jikan.moe/v4/anime?q=${query}&limit=10`
            );
            const searchResponse = await searchUrl.json();
            const finalData = searchResponse.data;
            setSearchData(finalData);
            setIsLoading(false);
            // console.log(query)
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const inputSearch = (e) => {
        if (e.key === "Enter") {
            searchApiFunc(e.target.value);
            setSearchText(e.target.value)
            e.target.value = "";
            setIsLoading(true)
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            searchApiFunc(searchText);
        }, 1000)
        return () => clearTimeout(timer)
    }, [searchText]);

    return (
        <motion.div className="h-auto w-full mt-2"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            <div className="h-auto w-full flex items-center justify-center py-4 ">
                <input
                    type="search"
                    name="search"
                    onKeyUp={inputSearch}
                    id="search"
                    placeholder="Search Your Anime Here..."
                    className="text-[#FFF] font-medium tracking-wide text-[1rem] outline-none h-10 lg:w-[40%] w-[80%] bg-transparent border-b-2 border-[#FFDD95]"
                />
            </div>
            <div className="h-auto w-full py-3 lg:py-10 px-5 lg:px-40">
                <p className="text-[1rem] text-center">Search Results For <span className="text-[#FFDD95] font-bold">{searchText}</span></p>
                <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    {
                        isLoading ? (
                            <SearchSkeleton />
                        )
                            :
                            (
                                <div className="flex flex-wrap justify-center gap-3 lg:gap-2 mt-5 w-full">
                                    {searchData.map((item, index) => (
                                        <SearchAnimeCard key={index} name={item.title} image={item.images.webp.large_image_url} type={item.type} id={item.mal_id} />
                                    ))}
                                </div>
                            )
                    }
                </SkeletonTheme>
            </div>
        </motion.div>
    );
};

export default SearchAnime;
