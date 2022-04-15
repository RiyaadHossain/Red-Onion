import React from "react";
import Logo2 from "../../Images/logo.png";

const Footer = () => {
  return (
    <div className="bg-black py-10 px-9 ">
      <div className="grid grid-cols-4 gap-4 mb-10">
        <div>
          <img className="w-40" src={Logo2} alt="" />
        </div>
        <div></div>
        <div className="flex flex-col text-white">
          <span className="mb-2">About Online Food</span>
          <span className="mb-2">Read Our Blog</span>
          <span className="mb-2">Sing Up Deliver</span>
          <span className="mb-2">Add Your Restuarant</span>
        </div>
        <div  className="flex flex-col text-white">
          <span className="mb-2">About Online Food</span>
          <span className="mb-2">Read Our Blog</span>
          <span className="mb-2">Sing Up Deliver</span>
          <span className="mb-2">Add Your Restuarant</span>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className=" text-slate-500">Copyright &copy; 2022 Online Food</p>
        </div>
        <div className="text-white text-lg">
          <span className="ml-6">Privacy Policy</span>
          <span className="ml-6">Terms of Use</span>
          <span className="ml-6">Pricing</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
