import React from "react";
import Image from "next/image";

export default function BlogArticle(props) {
  const { title, className, img, id } = props;
  return (
    <div id={id} className={`bg-slate-100 relative w-auto h-auto flex flex-col text-left dark:bg-white rounded ${className} cursor-pointer hover:bg-slate-300`}>
      <Image
        className="rounded shadow-lg shadow-black"
        src={require(`../../assets/images/${img}`)}
        alt="blog post"
      />
      <div className="p-2 flex flex-col">
        <h2 className="blog-title-card">{title} </h2>
        <p className="blog-text-card">Article text about the stuff</p>
        <div className="text-tiny flex flex-row mt-3 gap-1">
          <p>Oct 8</p>
          <p>5 min read</p>
        </div>
      </div>
    </div>
  );
}
