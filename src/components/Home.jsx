import React from 'react'
import Main from './Main'
import Slider from './Slider'
import Cards from './Cards'
import Categories from './Categories'

function Home() {
    return (
        <>
            <div className='n-container flex gap-3'>
                <div className='ml-[300px]'>
                    <Slider />
                    <Cards />
                </div>
            </div>
            <Main />
        </>
    )
}

export default Home