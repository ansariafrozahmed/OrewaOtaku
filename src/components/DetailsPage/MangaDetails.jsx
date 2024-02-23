import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaStar, FaRankingStar} from "react-icons/fa6";
import { BsCollectionPlay } from "react-icons/bs";



const MangaDetails = () => {
    const { mangaId } = useParams();
    const [mangaDetails, setMangaDetails] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [genre, setGenre] = useState();
    const [theme, setTheme] = useState();

    const TempText =
    "A distinctive style of animation originating from Japan, has captivated audiences worldwide with its diverse genres, vibrant characters, and imaginative storytelling. Boasting a rich cultural heritage and artistic expression, anime transcends age boundaries, appealing to both the young and the young at heart.";


    useEffect(() => {
        const fetchMangaDetails = async () => {
            try {
                const response = await fetch(`https://api.jikan.moe/v4/manga/${mangaId}`);
                const data = await response.json();
                setMangaDetails(data.data);
                setIsLoading(false);
                setGenre(data.data.genres);
                setTheme(data.data.themes);
                // console.log(data.data.genres);
                // console.log(data.data.themes);
            } catch (error) {
                console.error("Error fetching anime details:", error);
                // Handle errors as needed
            }
        };

        fetchMangaDetails();
    }, [mangaId]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                  <div className="w-full px-5 md:px-5 lg:px-40 md:flex gap-5 py-2 md:py-10 bg-gradient-to-b from-[#25200c]">
                    <div className="w-[70%]  md:px-0 mb-5 md:mb-0 md:w-[50%] lg:w-[30%]">
                      <img
                        className="asepct-[3/4] object-cover"
                        src={mangaDetails.images.webp.large_image_url}
                        alt=""
                      />
                    </div>
                    <div className="w-full">
                      <div className="md:flex gap-2 mb-3">
                        <h1 className="text-4xl font-semibold">{mangaDetails.title}</h1>
                        <h2 className="text-xl text-gray-400">
                          {mangaDetails.title_japanese}
                        </h2>
                      </div>
                      <span className="text-gray-400">
                        Genre <br className="md:hidden" />[
                        {genre?.map((item) => (
                          <span key={item.id} className="px-2 text-[0.9rem] text-[#FFDD95]">
                            {item.name}
                          </span>
                        ))}
                        ]
                      </span>
                      <div className="flex flex-col gap-1 py-2 font-sans text-base text-[#fff]">
                        <span className="flex items-center gap-2 font-sans">
                          <MdFavorite size={20} color="#FFDD95" />
                          {mangaDetails.favorites}
                        </span>
                        {/* <RxDividerVertical size={30} color="gray" /> */}
                        <span className="flex items-center gap-2 font-sans">
                          <FaStar size={20} color="#FFDD95" />
                          {mangaDetails.score}
                        </span>
                        {/* <RxDividerVertical size={30} color="gray" /> */}
                        <span className="flex items-center gap-2 font-sans">
                          <FaRankingStar size={20} color="#FFDD95" />
                          {mangaDetails.score}
                        </span>
                      </div>
                      <span className="text-gray-400">
                        Theme <br className="md:hidden" />[
                        {theme?.map((item) => (
                          <span key={item.id} className="px-2 text-[0.9rem] text-[#FFDD95]">
                            {item.name}
                          </span>
                        ))}
                        ]
                      </span>
                      <h2 className="font-sans text-[0.9rem] tracking-wide mt-2 text-gray-400 uppercase">
                        {mangaDetails.rating}
                      </h2>
                      <p className=" text-[1rem] tracking-wider lg:pr-40 leading-relaxed line-clamp-5">
                        {!mangaDetails.background ? TempText : mangaDetails.background}
                      </p>
                      <div className="flex">
                      {mangaDetails.trailer && (
                    <Link
                         className="border-2 border-[#FFDD95] bg-transparent text-[#FFDD95] transition-all ease-in-out duration-500 font-semibold mt-5 px-5 py-2 rounded-xl flex items-center gap-3 hover:bg-[#FFDD95] hover:text-[#000] hover:scale-110"
                        to={mangaDetails.trailer.url}
                        target="_blank"
                         >
                           Watch Trailer
                           <BsCollectionPlay />
                         </Link>
                        )}
                      </div>
                    </div>
                  </div>
                  {/* 
                            <div className="w-full flex py-5 items-center justify-center text-center">
                            </div> */}
        
                  <div className="w-full px-5 lg:px-40 mt-5 pb-[60px]">
                    <h2 className="text-[#FFDD95] text-4xl uppercase font-semibold mb-2">
                      Summary
                    </h2>
                    <hr className="my-5 w-[100%]" />
                    <p className="text-[1rem] text-gray-400 tracking-wider leading-loose">
                      {mangaDetails.synopsis}
                    </p>
                  </div>
                </>
              )}
            </div>
          );
        };

export default MangaDetails;
