import React, {useEffect} from "react";
import Article from "./Article";

export default function RecentArticles() {


  //position slides on load
  useEffect(() => {
positionSlides();

  }, []);

  const positionSlides = () => {
    const slides = Array.from(document.querySelectorAll('.recent__article')) ;
    console.log(slides);

    slides.forEach((slide, i) => {
      let offset = i * 34;
      slide.classList.remove(`left-0`);
      slide.style.left = `${offset}%`;
    })

  };

  const handleSliderBtn = (offset) => {

  }


  return (
    <section className="section flex-col text-left relative">
      <div className="flex flex-col text-left">
        <h1 className="text-header">Blog</h1>
        <p className="text-regular">Lastest thoughts, news and ideas</p>
      </div>
      <div className="flex mt-8 w-full flex-row gap-3 justify-center text-left ">
        <button>{"<"}</button>
        <div className="relative test  w-full h-80 flex overflow-x-scroll flex-row gap-1">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        </div>
        <button>{">"}</button>
      </div>
    </section>
  );
}
