import React from "react";
import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  const [selectedType, setSelectedType] = useState("available");
  return (
    <div className="container mx-auto py-14">
      <div className="py-5 flex justify-between items-center">
        <h2 className="text-3xl font-bold">Available Player</h2>
        <div className="flex items-center">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29]" : "bg-base-100"} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29]" : "bg-base-100"} rounded-l-none rounded-r-xl`}
          >
            Selected(0)
          </button>
        </div>
      </div>

      <AvailablePlayers playerData={playerData} />
    </div>
  );
};

export default Players;
