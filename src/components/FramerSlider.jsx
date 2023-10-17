// import React from "react";
// import { motion } from "framer-motion";
// import { useRef, useState, useEffect } from "react";

// const FramerSlider = () => {
//     const [width, setWidth] = useState(0);
//     const carousel = useRef();
//     useEffect(() => {
//         setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
//     }, []);

//     const [topAiringData, setTopAiringData] = useState();
//     // const [isLoading, setIsLoading] = useState(true);

//     const topAiringFetch = async () => {
//         const res = await fetch(
//             "https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=24"
//         );
//         const data = await res.json();
//         const final = data.data;
//         setTopAiringData(final);
//         // console.log(topAiringData)
//         setIsLoading(false);
//     };

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             topAiringFetch();
//         }, 1000);
//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <div>
//             <motion.div ref={carousel} className="p-5 overflow-hidden">
//                 <motion.div
//                     drag="x"
//                     dragConstraints={{ right: 0, left: -width }}
//                     className="flex gap-3"
//                 >
//                     {topAiringData?.map((item) => {
//                         return (
//                             <motion.div className="min-w-[180px]">
//                                 <img
//                                     src={item.images.webp.large_image_url}
//                                     className="aspect-[3/4.5] h-full w-full pointer-events-none"
//                                     key={item}
//                                     alt=""
//                                 />
//                             </motion.div>
//                         );
//                     })}
//                 </motion.div>
//             </motion.div>
//         </div>
//     );
// };

// export default FramerSlider;
