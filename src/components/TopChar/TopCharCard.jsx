import React from "react";

const TopCharCard = ({ image, name, type, rank }) => {
    return (
        <div className="relative w-[95%] cursor-pointer active:cursor-grabbing mr-10 overflow-hidden">
            <div
                className="w-full h-[250px] lg:h-[330px] bg-cover "
                style={{ backgroundImage: `url(${image.webp.large_image_url})` }}
            >
                <div class="absolute -left-8 -top-8 h-16 w-16">
                    <div class="absolute transform -rotate-45 font-sans border-b-4 border-black bg-[#FF0000] text-center shadow-xl text-[1.3rem] text-white font-semibold left-[-34px] top-[32px] w-[170px]">
                        {'#' + rank}
                    </div>
                </div>
            </div>
            <div className="py-1">
                <h2 className="line-clamp-1">{name}</h2>
                <p className="text-[0.9rem] text-[#8b8b8b]">{type}</p>
            </div>
        </div>
    );
};

export default TopCharCard;
