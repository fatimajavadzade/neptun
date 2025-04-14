import axios from "axios";
import React, { useEffect, useState } from "react";
import TestCard from "./TestCard";


function Test() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setData(res.data.products));
  }, []);
  
  console.log(data);
  function deleteItem(id){
    setData( data.filter(item=>item.id!==id))
  }
  return (
    <div className="cards">
      {data.length>0 && data.map((item, i) => {
        return <TestCard item={item} key={i} func={()=>deleteItem(item.id)} />;
      })}
    </div>
  );
}

export default Test;
