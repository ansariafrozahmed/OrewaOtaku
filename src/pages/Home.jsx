import React from 'react'
import BannerSlides from '../components/BannerSlides'
import TopAiring from '../components/TopAiring/TopAiring'
import TopChar from '../components/TopChar/TopChar'
import AnimatedName from '../components/AnimatedName'

const Home = () => {
    return (
        <div className='pt-5 lg:pt-0 '>
            <BannerSlides />
            <TopAiring />
            <TopChar />
            <AnimatedName />
        </div>
    )
}

export default Home