import React from "react";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A] pt-20">
      <div className="container mx-auto pt-30">
        <div className="flex justify-center pb-12">
          <img src={footerLogo} alt="BPL LOGO" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3 px-4 md:px-0  justify-between">
          <div className="flex flex-col space-y-3 ">
            <h2 className="font-semibold text-lg text-white">About Us</h2>
            <p className="leading-6 text-white opacity-60 ">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </div>
          <div>
            <h2 className="font-semibold text-lg text-white mb-4">
              Quick Links
            </h2>
            <ul className="list-disc text-white opacity-60 ml-8 space-y-2">
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="">
            <h2 className="font-semibold text-lg text-white">Subscribe</h2>
            <p className="leading-6 text-white opacity-60 my-5">
              Subscribe to our newsletter for the <br /> latest updates.
            </p>
            <div className="flex items-center ">
              <input
                className="py-3 px-5 bg-white rounded-r-none rounded-xl border-none"
                type="text"
                placeholder="Enter your email"
              />
              <button className="btn shadow-none btn-lg rounded-l-none rounded-xl bg-linear-to-r from-yellow-500 to-pink-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-18">
        <div className="divider"></div>
        <p className="py-5 text-center leading-6 text-white opacity-60">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
