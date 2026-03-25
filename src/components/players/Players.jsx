import React from "react";
import { use } from "react";

const Players = ({ playerPromise }) => {
  const data = use(playerPromise);

  return (
    <div>
      {data.map((player) => {
        <h2>player: {player.playerName}</h2>;
      })}
    </div>
  );
};

export default Players;
