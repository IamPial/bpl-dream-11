import React from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

const SelectedPlayers = ({
  selectedPlayers,
  setSelectedPlayers,
  coin,
  setCoin,
}) => {
  console.log(selectedPlayers);

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
          selectedPlayers.map((player) => {
            return (
              <div className="border border-gray-200 p-4 rounded-xl">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <img
                      src={player.playerImg}
                      className="h-20 w-25 rounded-xl"
                      alt={player.playerName}
                    />
                    <div>
                      <h2 className="font-bold text-lg">{player.playerName}</h2>
                      <p className="font-semibold text-gray-500">
                        {player.playerType}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(player)}
                    className="btn text-error"
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default SelectedPlayers;
