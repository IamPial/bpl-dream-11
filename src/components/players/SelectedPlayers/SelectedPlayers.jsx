import React from "react";

import { toast } from "react-toastify";
import SelectedCard from "../../ui/Card/SelectedCard";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  const handleDelete = (player) => {
    const filteredPlayers = selectedPlayers.filter(
      (p) => p.playerName !== player.playerName,
    );
    setSelectedPlayers(filteredPlayers);
    setCoin(coin + player.playerPrice);
    toast.success(`${player.playerName} is deleted!`);
  };

  return (
    <div>
      <div className=" space-y-5">
        {selectedPlayers.length === 0 ? (
          <div className="h-60 flex flex-col justify-center items-center gap-4">
            <h2 className="font-bold text-4xl text-neutral-700">
              No Players Selected Yet
            </h2>
            <p className="font-medium text-lg text-gray-500">
              Go to available tab to selected players
            </p>
          </div>
        ) : (
          selectedPlayers.map((player, index) => {
            return (
              <SelectedCard
                key={index}
                player={player}
                handleDelete={handleDelete}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
