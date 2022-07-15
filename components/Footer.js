import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="relative flex md:flex-row  sm:flex-col gap-5 md:!h-96 sm:!h-full pb-12 mt-12 border-grey border-t-[2px]">
      <div className=" w-1/2 mt-12  flex justify-center sm:pl-0 sm:w-full">
        <a href="#" aria-label="home page" className="bg-white h-12 rounded-full p-2 text-center flex items-center">
          <Image
            width={75}
            height={40}
            alt="logo"
            src={require("../assets/images/logo.svg")}
          />
        </a>
      </div>

      <div className="w-1/2 sm:w-full sm:my-12 sm:py-6 md:py-0 flex flex-row gap-24 justify-center border-slate-900 dark:border-white sm:border-t-[1px] sm:border-l-0 md:border-l-[1px] md:border-t-0">
        <ul className="flex flex-col gap-4 text-footer">
          <p className="text-light">More</p>
          <li>Blog</li>
          <li>Privacy</li>
        </ul>
        <ul className="flex flex-col gap-4 text-footer">
          <p className="text-light">Resources</p>
          <li>Courses</li>
          <li>Hacks</li>
          <li>Free Stuff</li>
        </ul>
      </div>
      <div className="sm:w-full md:absolute sm:relative dark:bg-slate-900  bottom-0 left-0 flex flex-row pb-12">
          <p className="text-tiny dark:text-slate-100 m-auto">@copywrite 2020 All rights reserved</p>
          <div className="flex flex-row gap-6 text-gray-600 m-auto dark:text-slate-100">
              <p>Li</p>
              <p>Fb</p>
              <p>Tw</p>
          </div>
      </div>
    </div>
  );
}
