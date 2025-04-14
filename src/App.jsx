import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProdByCategory from './components/ProductByCategory/ProdByCategory'
import Detail from './components/Details/Detail'
import SearchDetails from './components/searchDetails'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProdByCategory />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/searchDetails' element={<SearchDetails />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App