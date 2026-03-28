import React from "react";
import { MdDelete } from "react-icons/md";

const SelectedCard = ({ player, handleDelete }) => {
  return (
    <div>
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
              <p className="font-semibold text-gray-500">{player.playerType}</p>
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
    </div>
  );
};

export default SelectedCard;
