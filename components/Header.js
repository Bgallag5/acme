import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header(props) {
  const headerClass = props.className;
  const [darkMode, toggleDarkMode] = useState('Dark')

  const handleToggleDarkMode = () => {
    // let newMode = darkMode === 'Dark' ? 'Light' : 'Dark';
    // toggleDarkMode(newMode);
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
            {/* <button
              onClick={handleToggleDarkMode}
              className="btn-dark-mode"
            >

            </button> */}
            <input id="dark-mode" type={'checkbox'} onChange={handleToggleDarkMode} className={'dark-mode-input'}></input>
            <label htmlFor="dark-mode" className="dark-mode-label">
            </label>
            {/* <label htmlFor='dark-mode' ></label > */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
