import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopCharCard from "./TopCharCard";

const TopCharSlider = () => {
  const [topCharData, setTopCharData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const topCharFetch = async () => {
    const res = await fetch(
      "https://api.jikan.moe/v4/top/manga?filter=bypopularity&limit=20"
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
    slidesToScroll: 5,
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
      {isLoading && (
        <img className="h-[100px]" src="https://svgshare.com/i/y72.svg"></img>
      )}
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
    </div>
  );
};

export default TopCharSlider;
