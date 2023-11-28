import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/HeaderFooter/Header'
import About from './pages/About'
import Genre from './pages/Genre'
import { AnimatePresence } from 'framer-motion'
import Footer from './components/HeaderFooter/Footer'
import AnimeDetails from './components/DetailsPage/AnimeDetails'
import MangaDetails from './components/DetailsPage/MangaDetails'
import SearchAnime from './pages/SearchAnime'
import SearchManga from './pages/SearchManga'

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search/anime' element={<SearchAnime />} />
        <Route path='/search/manga' element={<SearchManga />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/anime/details/:animeId' element={<AnimeDetails />} />
        <Route path='/manga/details/:mangaId' element={<MangaDetails />} />
        <Route path='/*' element={<Home />} />
      </Routes>
      <Footer />
    </AnimatePresence>
  )
}

export default App