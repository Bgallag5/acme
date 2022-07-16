import React from 'react'

export default function BlogNav() {
  return (
    <div className='flex flex-row justify-between items-center pb-3 border-b border-black dark:border-slate-100 w-5/6 m-auto mb-12'>
        <nav>
            <ul className='blog__nav blog-nav-text  flex flex-row gap-3 cursor-pointer'>
                <li><a href='#design'>Design</a></li>
                <li><p>Front-End</p> </li>
                <li>Back-End</li>
                <li>Web</li>
                <li>Apps</li>
            </ul>
        </nav>
        <button className='btn p-2 rounded-full '><a href={'#CTA'}>{"Subscribe >"}</a></button>
    </div>
  )
}
