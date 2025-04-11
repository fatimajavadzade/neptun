import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProductsById } from '../../services/api';

function Detail() {
    const { id } = useParams();
    const [product,setProduct]=useState({})
    useEffect(()=>{
      
      getProductsById(id).then(res=>setProduct(res))
      
    },[id])
    
     if (Object.keys(product).length === 0) return <div className='h-[60vh] w-full flex items-center justify-center' >Yuklenirrr...</div>
  return (
    <div className='n-container h-[60vh]' >

      <img  className='ps-7' src={product.img} alt={product.name} />
    </div>
  )
}

export default Detail