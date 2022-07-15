import React from 'react'

export default function BlogNav() {
  return (
    <div className='flex flex-row justify-between items-center pb-3 border-b border-black w-5/6 m-auto mb-12'>
        <nav>
            <ul className='blog__nav text-nav flex flex-row gap-3 cursor-pointer'>
                <li>Design</li>
                <li>Front-End</li>
                <li>Back-End</li>
                <li>Web</li>
                <li>Apps</li>
            </ul>
        </nav>
        <button className='btn p-2 rounded-full '>{"Subscribe >"}</button>
    </div>
  )
}
