import React from 'react'
import BannerSlides from '../components/BannerSlides'
import TopAiring from '../components/TopAiring/TopAiring'
import TopChar from '../components/TopChar/TopChar'
import AnimatedName from '../components/AnimatedName'
import Banner01 from '../components/Banner01'

const Home = () => {
    return (
        <div className='pt-5 lg:pt-0 '>
            <BannerSlides />
            <TopAiring />
            <TopChar />
            <Banner01 />
            {/* <AnimatedName /> */}
        </div>
    )
}

export default Home