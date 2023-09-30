import React from "react";

const Banner01 = () => {
    const imagelink = "https://images7.alphacoders.com/132/1325984.jpeg";

    return (
        <div
            className=" h-[500px] lg:h-[500px] overflow-hidden w-full bg-center bg-cover"
            style={{ backgroundImage: `url(${imagelink})` }}
        >
            <div className="pb-5 h-full w-full bg-gradient-to-t from-slate-300 flex items-end justify-center">
                <span className="animatedtext uppercase text-[15vw] text-center lg:text-9xl font-black ">
                    Are You An Otaku ?
                </span>
            </div>
        </div>
    );
};

export default Banner01;
