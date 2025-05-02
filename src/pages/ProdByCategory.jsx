import React from "react";
import { useEffect } from "react";
import { getProdBySubId } from "../services/api";
import { useState } from "react";
import Card from "../components/Card";
import { Pagination } from "antd";
import ProductFilter from "../components/ProductFilter";
import FilterSidebar from "../components/FilterSidebar";
import { useParams } from "react-router-dom";
import Error404 from "./error/Error404";


function ProdByCategory() {
  const [data, setData] = useState();
  const [filtered, setFiltered] = useState([]);
  const [limit, setLimit] = useState(12);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const [value, setValue] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getProdBySubId(id, limit, page)
      .then((meh) => {
        setData(meh);
        setFiltered(meh);
      })
      .catch((err) => setError(true));
  }, [id, limit, page]);

  useEffect(() => {
    const sorted = data?.products?.sort(
      (a, b) =>
        b.price -
        b.price * (b.discount / 100) -
        (a.price - a.price * (a.discount / 100))
    );

    if (sorted) {
      setValue([sorted.at(-1).price, sorted[0].price]);
      setPrice([sorted.at(-1).price, sorted[0].price]);
    }
  }, [data, limit]);

  useEffect(() => {
    const min = price?.[0] ?? value[0];
    const max = price?.[1] ?? value[1];

    if (!data?.products) return;

    const filtered = data.products.filter(
      (item) => item.price >= min && item.price <= max
    );

    setFiltered({
      ...data,
      products: filtered,
    });
  }, [price, value, data]);

  if (error) return <Error404 />;
  
  if (!data)
    return (
      <div className="h-[60vh] w-full flex items-center justify-center">
        Yuklenirrr...
      </div>
    );

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
          <FilterSidebar value={value} setPrice={setPrice} />
        </div>
        <div className=" flex flex-wrap gap-4">
          {filtered?.products?.map((item) => {
            return (
              <Card
                key={item.id}
                discounted={item.discount > 0 ? false : true}
                item={item}
              />
            );
          })}
        </div>
      </div>
      {data.totalProducts / limit > 1 && (
        <div className=" flex justify-center my-5">
          <Pagination
            onChange={(curPage, paginationSize) => {
              setPage(curPage);
            }}
            defaultCurrent={1}
            defaultPageSize={limit}
            total={data.totalProducts}
          />
        </div>
      )}
    </main>
  );
}

export default ProdByCategory;
