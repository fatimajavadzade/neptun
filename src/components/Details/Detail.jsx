import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../services/api';

function Detail() {
    const { id } = useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
      
      getProductsById(id).then(res=>setProduct(res))
      
    },[product])
    
  return (
    <div className='n-container' >

      <img  className='ps-7' src={product.img[0]} alt={product.name} />
    </div>
  )
}

export default Detail