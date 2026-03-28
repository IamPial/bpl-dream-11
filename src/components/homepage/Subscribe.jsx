import React from "react";
import bgShadow from "../../assets/bg-shadow.png";

const Subscribe = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto p-6 border border-gray-500 rounded-xl bg-transparent ">
        <div
          className="flex justify-center  items-center flex-col rounded-xl py-20 border border-gray-500 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgShadow})` }}
        >
          <h2 className="text-[32px] font-bold text-slate-900">
            Subscribe to our Newsletter
          </h2>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex w-145 items-center gap-3 mt-6">
            <input
              className="flex-1 px-6 py-4 rounded-xl border border-gray-300"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn btn-xl rounded-xl text-[16px] bg-linear-to-r from-pink-500 to-yellow-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
