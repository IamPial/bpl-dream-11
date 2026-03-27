import React from "react";
import Card from "../../ui/Cards/Card";

const AvailablePlayers = ({ playerData }) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {playerData.map((player, index) => {
          return <Card key={index} player={player} />;
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
