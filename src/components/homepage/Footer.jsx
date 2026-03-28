import React from "react";
import footerLogo from "../../assets/logo-footer.png";

const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="container mx-auto pt-40">
        <div className="flex justify-center pb-12">
          <img src={footerLogo} alt="BPL LOGO" />
        </div>
        {/* TODO: work with footer design */}
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col space-y-3">
            <h2 className="font-semibold text-lg text-white">About Us</h2>
            <p className="leading-6 text-white ">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h2>Subscribe</h2>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div>
              <input type="text" placeholder="Enter your email" />
              <button className="btn ">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
