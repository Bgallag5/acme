import React from "react";
import Image from "next/image";
import Blog1 from "../../assets/images/blog-1.jpg";

export default function FeaturedArticle() {
  return (
    <div className="h-64 relative flex flex-row gap-4 m-auto w-5/6 justify-center my-12 mb-24">
      <div className="h-full relative w-2/5 rounded">
        <Image className="rounded-md" src={Blog1} alt={"blog"} layout={'fill'} />
      </div>
      <div className='p-2 flex flex-col gap-1 flex-1 justify-center'>
        <h2 className='blog-title'>Title</h2>
        <p className='blog-text'>Article text about the stuff</p>
        <div className='text-tiny dark:text-white flex flex-row mt-10 gap-1'>
            <p>Oct 8</p>
            <p>5 min read</p>
        </div>
        </div>
    </div>
  );
}
