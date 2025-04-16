import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ProdByCategory from './components/ProductByCategory/ProdByCategory'
import Detail from './components/Details/Detail'
import SearchDetails from './components/searchDetails'
import Error404 from './components/Error404'
import Landing from './Layout/Landing'

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Landing/>}>
         <Route path='/' element={<Home />} />
        <Route path='/product' element={<ProdByCategory />} />
        <Route path='/products/:id' element={<Detail />} />
        <Route path='/category/:id' element={<ProdByCategory />} />
        <Route path='/searchDetails' element={<SearchDetails />} />
      </Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default App