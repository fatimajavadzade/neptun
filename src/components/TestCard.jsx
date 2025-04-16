import React from 'react'
import { MdDelete } from 'react-icons/md'

function TestCard({item,func}) {
   
  return (
    <div className='card'>
        <img src={item?.images[0]}  /> 
        <h2>{item.title}</h2>
        <p>{item.description}</p>
       <div> <span>{item.price}$</span></div>
        <button onClick={func}>
            <MdDelete />
        </button>
    </div>
  )
}

export default TestCard