import React from "react";
import { FaUser, FaFlag } from "react-icons/fa";
import { useState } from "react";
import SelectedPlayers from "./../../players/SelectedPlayers/SelectedPlayers";

const Card = ({
  player,
  setCoin,
  coin,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleChoosePlayer = () => {
    const newCoin = coin - player.playerPrice;
    if (newCoin >= 0) {
      alert(`${player.playerName} is selected`);
      setCoin(coin - player.playerPrice);
      setIsSelected(true);
    } else {
      alert("Not enough coin to selected this player");
    }
    setSelectedPlayers([...selectedPlayers, player]);
  };
  return (
    <div>
      <div className="p-4 border border-gray-200 rounded-xl">
        <div className="card bg-base-100 ">
          <figure>
            <img
              className="h-60 w-full rounded-xl"
              src={player.playerImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body px-0">
            <h2 className="card-title">
              <FaUser /> {player.playerName}
            </h2>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex items-center gap-2">
                <FaFlag />
                <p className="">{player.playerCountry}</p>
              </div>
              <button className="btn">{player.playerType}</button>
            </div>
            <div className="divider"></div>
            <p className="font-semibold">Rating - {player.playerRating}</p>
            <div className="flex justify-between">
              <p className="font-semibold">{player.battingStyle}</p>
              <p className="text-right">{player.bowlingStyle}</p>
            </div>
            <div className="card-actions justify-end">
              <p className="font-semibold">Price : ${player.playerPrice} </p>
              <button
                className="btn "
                onClick={handleChoosePlayer}
                disabled={isSelected}
              >
                {isSelected ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
