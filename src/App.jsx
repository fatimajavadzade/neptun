import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Slider from './components/Slider'
import Cards from './components/Cards'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProdByCategory from './components/ProductByCategory/ProdByCategory'
import Detail from './components/Details/Detail'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProdByCategory />} />
        <Route path='/products/:id' element={<Detail />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App