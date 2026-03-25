import React from "react";
import dollarImg from "../../assets/DoubleDollar.png";
import headerLogoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className=" bg-base-100  shadow-sm">
      <div className="navbar container mx-auto ">
        <div className="flex-1">
          <a>
            <img src={headerLogoImg} alt="" />
          </a>
        </div>
        <div className="flex justify-between gap-10">
          <ul className="flex items-center gap-5 text-[#131313] opacity-70">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
          <button className="flex justify-between items-center gap-2 font-bold text-xl">
            0 Coin
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
