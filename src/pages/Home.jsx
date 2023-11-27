import React from "react";
import Banner01 from "../components/Banner01";
import { motion } from 'framer-motion'
import NewBannerSlide from '../components/NewBannerSlide'
import TopAnimeSection from "../components/TopAnime/TopAnimeSection";
import TopMangaSection from "../components/TopManga/TopMangaSection";

const Home = () => {
    return (
        <motion.div
            className="pt-5 lg:pt-0 "
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            {/* <SocialMedia /> */}
            <NewBannerSlide />
            <TopAnimeSection />
            <TopMangaSection />
            {/* <Banner01 /> */}
        </motion.div>
    );
};

export default Home;
