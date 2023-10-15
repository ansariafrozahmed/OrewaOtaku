import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/HeaderFooter/Header'
import About from './pages/About'
import Search from './pages/Search'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import Genre from './pages/Genre'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Header />
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </AnimatePresence>
  )
}

export default App