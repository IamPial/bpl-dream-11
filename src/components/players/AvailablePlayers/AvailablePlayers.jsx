import React from "react";
import { FaUser, FaFlag } from "react-icons/fa";

// {
//     "playerName": "Shakib Al Hasan",
//     "playerCountry": "Bangladesh",
//     "playerType": "All-rounder",
//     "playerImg": "https://i.ibb.co.com/PZ5HwCGm/Shakib-Al-Hasan.jpg",
//     "battingStyle": "Left-hand bat",
//     "playerRating": 9.4,
//     "playerPrice": 1200000,
//     "bowlingStyle": "Left-arm orthodox"
//   }

const AvailablePlayers = ({ playerData }) => {
  console.log(playerData);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <FaUser /> Card Title
          </h2>
          <div className="flex items-center gap-2 justify-between">
            <div className="flex items-center gap-2">
              <FaFlag />
              <p className="">Country</p>
            </div>
            <button className="btn">All Rounder</button>
          </div>
          <div className="divider"></div>
          <p className="font-semibold">Rating</p>
          <div className="flex justify-between">
            <p className="font-semibold">Left Handed Bating</p>
            <p className="text-right">Left Handed Bowler</p>
          </div>
          <div className="card-actions justify-end">
            <p className="font-semibold">Price</p>
            <button className="btn ">Choose Player</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailablePlayers;
