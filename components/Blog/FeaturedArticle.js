import React from "react";
import Image from "next/image";
import Blog1 from "../../assets/images/blog-1.jpg";
import { useRouter } from "next/router";

export default function FeaturedArticle() {
  const router = useRouter()
  return (
    <div onClick={() => router.push('article')} className="h-64 hover:outline outline-1 hover:dark:outline-white cursor-pointer  hover:shadow-lg rounded-md border-black relative flex flex-row gap-4 m-auto w-5/6 justify-center my-12 mb-24">
      <div className="h-full relative w-2/5 rounded shadow-md">
        <Image className="rounded-md" src={Blog1} alt={"blog"} layout={'fill'} />
      </div>
      <div className='p-2 flex flex-col gap-1 flex-1 justify-center'>
        <h2 className='blog-title'>Featured Article</h2>
        <p className='blog-text'>Article text about the stuff</p>
        <div className='text-tiny dark:text-white flex flex-row mt-10 gap-1'>
            <p>Oct 8</p>
            <p>5 min read</p>
        </div>
        </div>
    </div>
  );
}

