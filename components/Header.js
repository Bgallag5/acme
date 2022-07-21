import React, { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "../pages/_app";

export default function Header(props) {
  const { darkMode, toggleDarkMode } = useContext(AppContext);
  const headerRef = useRef();

  const headerClass = props.className;

  const handleToggleDarkMode = () => {
    toggleDarkMode((prev) => !prev);
    const page = document.querySelector(".app__container");
    page.classList.toggle("dark");
    return;
  };

  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY);
      if (window.scrollY >= 5){
        headerRef.current.classList.add('header__blue')
      }
      if (window.scrollY < 5){
        headerRef.current.classList.remove('header__blue')
      }

      if (window.scrollY >= 300){
        headerRef.current.classList.add('header-scroll')
      }
    else if (window.scrollY < 300){
        headerRef.current.classList.remove('header-scroll')
      }
    });


  })

  return (
    <header className={`${headerClass}`}>
      <div ref={headerRef} data-scroll={"0"} className={`${headerClass}-nav header`}>
        <a href="#" aria-label="home page">
          <Image 
            width={75}
            height={40}
            alt="logo"
            src={require("../assets/images/logo.svg")}
          />
        </a>
        <nav>
          <ul className="flex flex-row gap-2 text-lg h-auto items-center">
            <li>
              <Link href="/home"> Home </Link>
            </li>
            <li>
              <Link href="/blog"> Blog </Link>
            </li>
            <input
              id="dark-mode"
              type={"checkbox"}
              onChange={handleToggleDarkMode}
              className={"dark-mode-input"}
            ></input>
            <label htmlFor="dark-mode" className="dark-mode-label"><div className="dot"></div></label>
          </ul>
        </nav>
      </div>
    </header>
  );
}
