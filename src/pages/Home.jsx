import React from 'react'
import BannerSlides from '../components/BannerSlides'
import TopAiring from '../components/TopAiring/TopAiring'
import TopAnimeChar from '../components/TopAnimeCharacters/TopAnimeChar'

const Home = () => {
    return (
        <div className='pt-5 lg:pt-0 '>
            <BannerSlides />
            <TopAiring />
            <TopAnimeChar />
        </div>
    )
}

export default Home