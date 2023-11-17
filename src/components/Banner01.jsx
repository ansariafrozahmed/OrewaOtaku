import React from "react";

const Banner01 = () => {

    const imagelink = "https://sagartech.online/ansariafroz/wp-content/uploads/2023/11/Untitled-design.webp";

    return (
        <div
            className=" h-[130px] lg:h-[500px] overflow-hidden bg-no-repeat w-full bg-center-left bg-cover mt-5"
            style={{ backgroundImage: `url(${imagelink})` }}
        >
            {/* <div className="pb-5 h-full w-full bg-gradient-to-t from-slate-300 flex items-end justify-center">
                <span className="animatedtext uppercase text-[15vw] text-center lg:text-9xl font-black ">
                    Are You An Otaku ?
                </span>
            </div> */}
            <div className="h-full w-[35%] flex items-center justify-start px-2 lg:px-10">
                <p className=" text-[1.55rem] lg:text-[5.5rem] font-bold uppercase leading-none ">Orewa<br /><span className="text-[1.7rem] lg:text-[6rem]">Otaku</span></p>
            </div>
        </div>
    );
};

export default Banner01;
