import React from "react";
import { Suspense, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/homepage/Banner";
import Players from "./components/players/Players";

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

const App = () => {
  const playerPromise = fetchPlayer();
  const [coin, setCoin] = useState(50000);
  return (
    <div>
      <Navbar coin={coin} />
      <Banner />
      <Suspense
        fallback={
          <div className="  flex items-center justify-center py-30">
            <span className=" loading loading-bars loading-xl "></span>
          </div>
        }
      >
        <Players playerPromise={playerPromise} />
      </Suspense>
    </div>
  );
};

export default App;
