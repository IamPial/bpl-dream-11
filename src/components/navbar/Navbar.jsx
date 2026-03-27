import React from "react";
import dollarImg from "../../assets/DoubleDollar.png";
import headerLogoImg from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className=" bg-base-100  shadow-sm">
      <div className="navbar container mx-auto select-none ">
        {/* added the dropdown menu for small screen */}
        <div className="dropdown gap-5">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-neutral-900  text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="hover:bg-gray-600 rounded-xl">
              <a href="">Home</a>
            </li>
            <li className="hover:bg-gray-600 rounded-xl">
              <a href="">Fixture</a>
            </li>
            <li className="hover:bg-gray-600 rounded-xl">
              <a href="">Teams</a>
            </li>
            <li className="hover:bg-gray-600 rounded-xl">
              <a href="">Schedules</a>
            </li>
          </ul>
        </div>
        {/* added the dropdown menu for small screen */}

        <div className="flex-1">
          <a>
            <img src={headerLogoImg} alt="" />
          </a>
        </div>
        <div className="flex justify-between gap-10">
          <ul className="lg:flex items-center gap-5 text-[#131313] opacity-70 hidden">
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
            {coin} Coin
            <img src={dollarImg} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
