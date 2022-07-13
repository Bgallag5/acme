import React from 'react';
import Image from 'next/image';

export default function Header() {

    const handleToggleDarkMode = () => {
        const page = document.querySelector('.app__container');
        page.classList.toggle('dark');
        return;
    }


  return (
    <header className='main__header'>
        <div className='main__header-nav'>
            <a href='#' aria-label='home page'><Image width={75} height={40} alt='logo' src={require('../assets/images/logo.svg')} /></a>
            <nav>
                <ul className='flex flex-row gap-2 text-lg h-auto items-center'>
                    <li href="/home">Home</li>
                    <li href="/blog">Blog</li>
                    <button onClick={handleToggleDarkMode} className='ml-8 bg-white rounded-full p-2 w-24'>Dark</button>
            </ul>
            </nav>
        </div> 
    </header>
  )
}
