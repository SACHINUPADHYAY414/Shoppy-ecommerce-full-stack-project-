import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
// import { IoIosArrowRoundDown } from "react-icons/io";
import { GrDeliver } from "react-icons/gr";
// import { TbBrandAmazon } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white mt-10 text-center">
      <u className="text-white font-bold flex justify-center items-center m-auto mb-6 py-4">
        <img
          src="https://blog.donexpress.com/assets/icons/cargando2.gif"
          alt="ecommecre"
          className="w-12 h-[14]  items-center"
        />
        <h2 className="font-bold text-4xl ">Shoppy</h2>
        {/* <TbBrandAmazon className="w-14 h-14 m-auto justify-center"/> */}
      </u>
      <div className="m-auto justify-center items-center">
        <div className="flex space-x-20 items-center justify-center m-auto">
          <div>
            <h3 className="text-2xl font-semibold">Great Selection</h3>
            <IoShieldCheckmark className="h-10 w-10 items-center justify-center m-auto mb-2 mt-2 text-blue-400 " />
          </div>

          <div className="flex flex-col ">
            <h3 className="text-2xl font-semibold "> Brand Of Trust </h3>
            <div className="flex w-14 h-14 items-center justify-center m-auto">
              <FaIndianRupeeSign className="h-10 w-10 items-center justify-center m-auto mb-2 mt-2 text-blue-400 " />
              {/* <IoIosArrowRoundDown className="items-center justify-center m-auto h-10 w-10 mt-2 text-blue-400 "/> */}
            </div>
            {/* <h3 className="text-2xl font-semibold text-center">low Price</h3> */}
          </div>
          <div className=" ">
            <h3 className="text-2xl font-semibold">Speedy Delivery</h3>
            <GrDeliver className=" m-auto h-10 w-10 mt-2 text-blue-400" />
          </div>
        </div>
        <footer className="bg-black text-white mt-10 text-center py-5">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="pb-5">
                <h6 className="text-lg font-semibold pb-3">Get to Know Us</h6>
                <ul className="text-sm">
                  <li className="pb-2">About Us</li>
                  <li className="pb-2">Careers</li>
                  <li className="pb-2">Press Releases</li>
                </ul>
              </div>

              <div className="pb-5">
                <h6 className="text-lg font-semibold pb-3">Contact with Us</h6>
                <ul className="text-sm">
                  <li className="pb-2">Facebook</li>
                  <li className="pb-2">Twitter</li>
                  <li className="pb-2">Instagram</li>
                </ul>
              </div>

              <div className="pb-5">
                <h6 className="text-lg font-semibold pb-3">
                  Make Money with Us
                </h6>
                <ul className="text-sm">
                  <li className="pb-2">Sell on Shopkeyy</li>
                  <li className="pb-2">Sell under Shopkeyy Accelerator</li>
                </ul>
              </div>

              <div className="pb-5">
                <h6 className="text-lg font-semibold pb-3">Let Us Help You</h6>
                <ul className="text-sm">
                  <li className="pb-2">Your Account</li>
                  <li className="pb-2">Return Center</li>
                  <li className="pb-2">100% Purchase Protection</li>
                  <li className="pb-2">Help</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
              <div className="flex justify-between space-x-5">
                <a
                  href="/condition-of-use"
                  className="text-white hover:underline"
                >
                  Condition of Use & Sale
                </a>
                <a href="/privacy-notice" className="hover:underline">
                  Privacy Notice
                </a>
                <a href="/interest-based-ads" className="hover:underline">
                  Interest-Based Ads
                </a>
              </div>
              <div className="opacity-80">
                <a href="home" ><p href="home" className="opacity-80">&copy; 2024, Shoppy.com</p></a>
                <a  href="https://portfoliosachinkumar.vercel.app/"><p className="hover:text-blue-400"> Created By <span> Sachin Upadhyay</span></p></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
