import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import ProdByCategory from "./components/ProductByCategory/ProdByCategory";
import Detail from "./components/Details/Detail";
import SearchDetails from "./components/searchDetails";
import Error404 from "./components/Error404";
import Landing from "./Layout/Landing";
import { useEffect } from "react";
import scrollToTop from "./utils/scrollToTop";
import Basket from "./components/Basket";
import WishList from "./components/WishList";
import { Toaster } from "react-hot-toast";

function App() {
  const { pathname } = useLocation();
  useEffect(() => scrollToTop(), [pathname]);
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProdByCategory />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/category/:id" element={<ProdByCategory />} />
          <Route path="/searchDetails" element={<SearchDetails />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/basket" element={<Basket />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
