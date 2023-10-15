import React from "react";
import BannerSlides from "../components/BannerSlides";
import TopAiring from "../components/TopAiring/TopAiring";
import TopChar from "../components/TopChar/TopChar";
import Banner01 from "../components/Banner01";
import Footer from "../components/HeaderFooter/Footer";

const Home = () => {
    return (
        <div className="pt-5 lg:pt-0 overflow-hidden">
            {/* <SocialMedia /> */}
            <BannerSlides />
            <TopAiring />
            <TopChar />
            <Banner01 />
            <Footer />
        </div>
    );
};

export default Home;
