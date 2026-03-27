import React from "react";
import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";

const Players = ({ playerPromise, setCoin, coin }) => {
  const playerData = use(playerPromise);
  const [selectedType, setSelectedType] = useState("available");
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <div className="container mx-auto py-14">
      <div className="py-5 flex justify-between items-center">
        {selectedType === "available" ? (
          <h2 className="text-3xl font-bold">Available Player</h2>
        ) : (
          <h2 className="text-3xl font-bold">
            Selected Player ({selectedPlayers.length}/{playerData.length})
          </h2>
        )}
        <div className="flex items-center">
          <button
            onClick={() => setSelectedType("available")}
            className={`btn ${selectedType === "available" ? "bg-[#E7FE29] font-bold" : "bg-base-100 font-normal"} rounded-r-none rounded-l-xl`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedType("selected")}
            className={`btn ${selectedType === "selected" ? "bg-[#E7FE29] font-bold" : "bg-base-100 font-normal"} rounded-l-none rounded-r-xl`}
          >
            Selected({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedType === "available" ? (
        <AvailablePlayers
          playerData={playerData}
          setCoin={setCoin}
          coin={coin}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        />
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
          setCoin={setCoin}
          coin={coin}
        />
      )}
    </div>
  );
};

export default Players;
