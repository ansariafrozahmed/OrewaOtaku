import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/HeaderFooter/Header'
import About from './pages/About'
import Search from './pages/Search'
import Anime from './pages/Anime'
import Manga from './pages/Manga'
import Genre from './pages/Genre'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/anime' element={<Anime />} />
        <Route path='/manga' element={<Manga />} />
        <Route path='/genre' element={<Genre />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </>
  )
}

export default App