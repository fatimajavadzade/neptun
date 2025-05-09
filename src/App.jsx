import React from "react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import scrollToTop from "./utils/scrollToTop";

// Pages
import Landing from "./Layout/Landing";
import Home from "./pages/Home";
import ProdByCategory from "./pages/ProdByCategory";
import Detail from "./pages/Detail";
import SearchDetails from "./pages/SearchDetails";
import Error404 from "./pages/error/Error404";
import Basket from "./pages/Basket";
import WishList from "./pages/WishList";
import Login from "./auth/Login";
import Register from "./auth/Register";
import UserPage from "./user/userPage";
import VerifyUser from "./auth/VerifyUser";

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
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Register />} />
        </Route>
        <Route path="/user" element={<VerifyUser/>}> 
          <Route index element={<UserPage />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
}

export default App;
