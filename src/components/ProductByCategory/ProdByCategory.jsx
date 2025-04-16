import React from "react";
import { useEffect } from "react";
import { getProdBySubId } from "../../services/api";
import { useState } from "react";
import Card from "../Card";
import { Pagination } from "antd";
import ProductFilter from "../ProductFilter";
import FilterSidebar from "../FilterSidebar";
import { useParams } from "react-router-dom";
import Error404 from "../Error404";

function ProdByCategory() {
  const [data, setData] = useState();
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const {id}=useParams()
  useEffect(() => {
    getProdBySubId(id, limit, page).then((meh) => setData(meh))
    .catch((err) => setError(true));;
  }, [id,limit, page]);

  if (error) return <Error404 />;
  if (!data) return  <div className="h-[60vh] w-full flex items-center justify-center">
  Yuklenirrr...
</div>
   
  if (data.totalProducts == 0) "axtaris uzre mehsul yoxdur";

  return (
    <main className="min-h-screen  n-container">
      <ProductFilter />

      <div className="flex justify-end px-[22px] my-3">
      <button
        onClick={() => setLimit(12)}
        className="p-2 border border-black cursor-pointer"
      >
        12
      </button>
      <button
        onClick={() => setLimit(25)}
        className="p-2 border border-black cursor-pointer"
      >
        25
      </button>
      <button
        onClick={() => setLimit(50)}
        className="p-2 border border-black cursor-pointer"
      >
        50
      </button>
      </div>
      <div className="flex">
        <div className="w-[400px]">
          <FilterSidebar />
        </div>
        <div className=" flex flex-wrap gap-4">
          {data.products.map((item) => {
            console.log(item);

            return <Card key={item.id} discounted={true} item={item} />;
          })}
        </div>
      </div>
      {data.totalProducts / limit > 1 && (
        <div className=" flex justify-center my-5">
        <Pagination
          onChange={(curPage, paginationSize) => {
            setPage(curPage);
            console.log(curPage);
          }}
          defaultCurrent={1}
          defaultPageSize={limit}
          total={data.totalProducts}
        /></div>
      )}
    </main>
  );
}

export default ProdByCategory;
