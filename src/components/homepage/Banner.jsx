import React from "react";
import bannerImg from "../../assets/banner-main.png";
import bgShadow from "../../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div className="container mx-auto bg-neutral rounded-3xl mt-6">
      <div
        className="min-h-[80vh] bg-cover bg-no-repeat rounded-3xl"
        style={{ backgroundImage: `url(${bgShadow})` }}
      >
        <div className="flex flex-col justify-center items-center py-14">
          <div className="mb-6">
            <img src={bannerImg} alt="" />
          </div>
          <div className="space-y-4 text-center">
            <h2 className=" text-4xl  md:text-5xl font-bold text-white">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h2>
            <p className="font-inter font-medium text-white opacity-70 text-2xl">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="claim-btn">
              <button className="btn btn-warning shadow-none">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
