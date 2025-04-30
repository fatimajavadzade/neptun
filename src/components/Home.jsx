import React from "react";
import Main from "./Main";
import Slider from "./Slider";
import Cards from "./Cards";
import { useMatchMedia } from "./hooks/useMatchWidth";


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
