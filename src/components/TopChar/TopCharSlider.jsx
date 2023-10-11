import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopCharCard from "./TopCharCard";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonLoader from "../SkeletonLoader";

const TopCharSlider = () => {
  const [topCharData, setTopCharData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const topCharFetch = async () => {
    const res = await fetch(
      "https://api.jikan.moe/v4/top/manga?filter=bypopularity&limit=24"
    );
    const data = await res.json();
    const final = data.data;
    setTopCharData(final);
    setIsLoading(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      topCharFetch();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    draggable: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        {isLoading ? (
          <SkeletonLoader />
        ) : (
          <Slider {...settings}>
            {topCharData?.map((item, index) => (
              <TopCharCard
                key={index}
                rank={index + 1}
                image={item.images}
                name={item.title}
                type={item.type}
              />
            ))}
          </Slider>
        )}
      </SkeletonTheme>
    </div>
  );
};

export default TopCharSlider;
