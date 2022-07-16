import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "../pages/_app";

export default function Header(props) {
  const { darkMode, toggleDarkMode } = useContext(AppContext);

  const headerClass = props.className;

  const handleToggleDarkMode = () => {
    toggleDarkMode((prev) => !prev);
    const page = document.querySelector(".app__container");
    page.classList.toggle("dark");
    return;
  };

  return (
    <header className={`${headerClass}`}>
      <div className={`${headerClass}-nav`}>
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
            <label htmlFor="dark-mode" className="dark-mode-label"></label>
          </ul>
        </nav>
      </div>
    </header>
  );
}
