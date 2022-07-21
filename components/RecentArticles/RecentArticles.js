import React, { useEffect, useRef } from "react";
import Article from "./Article";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar,faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function RecentArticles() {
  const currentSlide = useRef(0);

  //position slides on load
  useEffect(() => {
    positionSlides();
  }, []);

  const positionSlides = () => {
    const slides = Array.from(document.querySelectorAll(".recent__article"));
    // console.dir(slides);

    slides.forEach((slide, i) => {
      //calc offset for each slide based on current slide
      let offset = (i - currentSlide.current) * 100;

      if (currentSlide.current > i) {
        slide.style.transform = `translateX(${offset}%)`;
      } else if (currentSlide.current === i) {
        slide.style.transform = `translateX(${offset}%)`;
      } else {
        slide.style.transform = `translateX(${offset}%)`;
      }
    });
  };

  const handleSliderBtn = (direction) => {
    const slides = Array.from(document.querySelectorAll(".recent__article"));
    const offset = direction === "left" ? -1 : 1;

    //bookend slider functionality
    if (currentSlide.current + offset >= slides.length - 3) return;
    if (currentSlide.current + offset < 0) return;

    currentSlide.current = currentSlide.current + offset;
    positionSlides();
  };

  return (
    <section className="section flex-col text-left relative mb-[8rem]">
      <div className="flex flex-col text-left w-[90%] mb-[1rem]">
        <h1 className="text-header">Blog</h1>
        <p className="text-regular">Lastest thoughts, news, and ideas</p>
      </div>
      <div className="flex mt-8 w-full flex-row  gap-3 justify-center text-left ">
        <button className="slider__btn" onClick={() => handleSliderBtn("left")}><FontAwesomeIcon icon={faAngleLeft} /> </button>
        <div className="relative w-[95%] h-64 flex overflow-x-hidden items-center flex-row sm:flex-col ">
          <Article title={"Article 1"} />
          <Article title={"Article 2"} />
          <Article title={"Article 3"} />
          <Article title={"Article 4"} />
          <Article title={"Article 5"} />
          <Article title={"Article 6"} />
        </div>
        <button className="slider__btn" onClick={() => handleSliderBtn("right")}> <FontAwesomeIcon icon={faAngleRight} /> </button>
      </div>
    </section>
  );
}
