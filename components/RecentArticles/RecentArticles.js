import React from "react";
import Article from "./Article";

export default function RecentArticles() {
  return (
    <section className="section flex-col text-left relative">
      <div className="flex flex-col text-left">
        <h1 className="text-header">Blog</h1>
        <p className="text-regular">Lastest thoughts, news and ideas</p>
      </div>
      <div className="flex mt-8 flex-row gap-3 justify-center text-left">
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
}
