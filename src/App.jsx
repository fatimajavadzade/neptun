import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Categories from './components/Categories'
import Slider from './components/Slider'
import Cards from './components/Cards'

function App() {
  return (
    <>
      <Header />
      <div className='n-container flex gap-3'>
        <Categories />
       <div>
        <Slider />
        <Cards />
       </div>
      </div>
      <Main/>
      <Footer/>
    </>
  )
}

export default App