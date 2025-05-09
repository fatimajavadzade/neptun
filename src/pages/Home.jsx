import React, { useEffect } from "react";
import Slider from "../components/Slider"
import Cards from "../components/Cards"
import Main from "../components/Main";
import { useMatchMedia } from "../components/hooks/useMatchWidth";


function Home() {


  return (
    <>
      <div className="n-container flex gap-3">
        <div className={useMatchMedia("(min-width:1024px)") ? " ml-[190px]  xl:ml-[250px]":"m-auto" }>
          <Slider />
          <Cards />
        </div>
      </div>
      <Main />
    </>
  );
}

export default Home;
