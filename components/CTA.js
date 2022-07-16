import React from "react";
import Image from "next/image";

export default function CTA() {
  return (
    <div
      id="CTA"
      className="section h-screen w-full m-auto flex flex-col text-left "
    >
      <h2 className="text-header mx-[10%]">Inbox</h2>
      <p className="text-regular mx-[10%]">Knowledge Letters</p>
      <div className=" flex flex-row justify-end  m-auto w-4/5 h-auto bg-cover mt-10">
        <div className="relative flex flex-col bg-slate-700  dark:bg-slate-100  w-4/5 h-[60vh] mr-10 rounded-2xl">
          <div className="absolute bg-cover top-24 -left-[30%] w-2/5 h-full  my-auto  rounded-2xl">
            <Image
              className="rounded-2xl bg-cover"
              src={require("../assets/images/newsletter.jpg")}
              alt="newsletter"
              // layout="fill"
            />
          </div>
          <div className="w-3/4 self-start h-full flex flex-col justify-center mx-[15%]">

          <h1 className="mons text-3xl text-white dark:text-slate-900 font-bold tracking-wide mb-1">Join Our News Letter</h1>
          <p className="mons text-white dark:text-slate-900">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}</p>
          <input className='cta__input w-72 mt-[10%] dark:text-slate-900 dark:placeholder:text-black'  placeholder='Email' />
          <button className="w-48 p-2 shadow-sm shadow-gray-900  text-white rounded bg-indigo-400 dark:bg-indigo-600 mt-1 active:translate-y-[1px]">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <form className='flex flex-row justify-between gap-1 py-6'>
<input className='cta__input' placeholder='Name' />
<input className='cta__input'  placeholder='Email' />
<button className='btn  btn-subscribe'>Subscribe</button>
</form> */
}
