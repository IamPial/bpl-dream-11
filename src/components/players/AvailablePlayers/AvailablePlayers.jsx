import React from "react";
import Card from "../../ui/Card/Card";
import SelectedPlayers from "./../SelectedPlayers/SelectedPlayers";

const AvailablePlayers = ({
  playerData,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {playerData.map((player, index) => {
          return (
            <Card
              key={index}
              player={player}
              setCoin={setCoin}
              coin={coin}
              selectedPlayers={selectedPlayers}
              setSelectedPlayers={setSelectedPlayers}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AvailablePlayers;
