import React, {useEffect, useState} from "react";
import Article from "./Article";

export default function RecentArticles() {
const [currentSlide, setCurrentSlide] = useState(0)

  //position slides on load
  useEffect(() => {
positionSlides();

  }, []);

  const positionSlides = () => {
    const slides = Array.from(document.querySelectorAll('.recent__article')) ;
    console.log(slides);

    slides.forEach((slide, i) => {
      let offset = (i - currentSlide) * 100;
      // slide.classList.remove(`left-0`);
      if (currentSlide > i) {
        slide.style.transform = `translateX(-${offset}%)`;
      } else if (currentSlide === i ){
        slide.style.transform = `translateX(-${offset}%)`;
      }
       else {
        // slide.style.left = `${offset}%`;
        slide.style.transform = `translateX(${offset}%)`;
      }
    })

  };

  const handleSliderBtn = (direction) => {
    const offset = direction === 'left' ? -1 : 1;
    setCurrentSlide(prev => prev + offset);
    positionSlides();
  }


  return (
    <section className="section flex-col text-left relative">
      <div className="flex flex-col text-left">
        <h1 className="text-header">Blog</h1>
        <p className="text-regular">Lastest thoughts, news and ideas</p>
      </div>
      <div className="flex mt-8 w-full flex-row gap-3 justify-center text-left ">
        <button onClick={() => handleSliderBtn('left')}>{"<"}</button>
        <div className="relative test w-full h-80 flex overflow-x-hidden items-center justify-center flex-row gap-3">
        <Article title={'Article 1'} />
        <Article title={'Article 2'} />
        <Article title={'Article 3'} />
        <Article title={'Article 4'} />
        <Article title={'Article 5'} />
        <Article title={'Article 6'} />
        </div>
        <button onClick={() => handleSliderBtn('right')}>{">"}</button>
      </div>
    </section>
  );
}
