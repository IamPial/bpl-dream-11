import React from "react";
import dollarImg from "../../assets/DoubleDollar.png";
import headerLogoImg from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="flex-1">
        <a>
          <img src={headerLogoImg} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <button className="flex justify-between items-center gap-2 font-bold text-xl">
          0 Coin
          <img src={dollarImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
