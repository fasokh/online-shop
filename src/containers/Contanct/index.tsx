import { NextPage } from "next";
import React from "react";
import HomeNav from "./HomeNav";

const Contact: NextPage = () => {
  return (
    <div className="relative flex flex-col">
      <div className="absolute right-0 mr-8 mt-4">
        <HomeNav />
      </div>
      <div className="absolute bg-white right-0 text-blue-800 font-bold text-lg sm:w-2/3 md:w-1/3 my-44 mr-5 text-right border border-gray-300 rounded-lg">
        <div className="px-6 py-4">
          <p className="py-4">تلفن: 989363363326</p>
          <p className="py-4">فکس: 987654321</p>
          <p className="py-4">fatemeh.sokhandan@gmail.com :آدرس الکترونیکی</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
