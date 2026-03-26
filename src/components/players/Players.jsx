import React from "react";
import { use } from "react";
import AvailablePlayers from "./AvailablePlayers/AvailablePlayers";

const Players = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  // console.log(data);
  return (
    <div className="container mx-auto pt-20">
      <AvailablePlayers playerData={playerData} />
    </div>
  );
};

export default Players;
