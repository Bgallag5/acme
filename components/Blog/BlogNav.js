import React from 'react'

export default function BlogNav() {
  return (
    <div className='flex flex-row justify-between w-5/6 m-auto mb-12'>
        <nav>
            <ul className='blog__nav text-nav flex flex-row gap-3'>
                <li>Design</li>
                <li>Front-End</li>
                <li>Back-End</li>
                <li>Web</li>
                <li>Apps</li>
            </ul>
        </nav>
        <h3>{"Subscribe >"}</h3>
    </div>
  )
}
