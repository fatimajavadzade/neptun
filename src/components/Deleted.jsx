import React from 'react'

function Deleted({item,deleteItem}) {
  return (
    <div className="flex items-center"> <h2>{item.name}</h2> <button className="delete" onClick={()=>deleteItem(item.id)}>Sil</button></div>
  )
}

export default Deleted