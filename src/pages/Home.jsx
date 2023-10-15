import React from "react";
import BannerSlides from "../components/BannerSlides";
import TopAiring from "../components/TopAiring/TopAiring";
import TopChar from "../components/TopChar/TopChar";
import Banner01 from "../components/Banner01";
import { motion } from 'framer-motion'
import Footer from "../components/HeaderFooter/Footer";

const Home = () => {
    return (
        <motion.div
            className="pt-5 lg:pt-0 overflow-hidden"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
        >
            {/* <SocialMedia /> */}
            <BannerSlides />
            <TopAiring />
            <TopChar />
            <Banner01 />
            <Footer />
        </motion.div>
    );
};

export default Home;
