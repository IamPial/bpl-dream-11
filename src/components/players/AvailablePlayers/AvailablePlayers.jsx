import React from "react";
import Card from "../../ui/Card/Card";

const AvailablePlayers = ({ playerData, setCoin }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {playerData.map((player, index) => {
          return <Card key={index} player={player} setCoin={setCoin} />;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
