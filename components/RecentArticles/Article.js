import React from 'react';
import Image from 'next/image';

export default function Article() {
  return (
    <div className='w-1/3 h-auto flex flex-col text-left dark:bg-white rounded'>
        <Image className='rounded shadow-lg shadow-black' src={require('../../assets/images/blog-1.jpg')} alt="blog post" />
        <div className='p-2 flex flex-col'>
        <h2 className='blog-title'>Article Title</h2>
        <p className='blog-text'>Article text about the stuff</p>
        <div className='text-tiny flex flex-row mt-3 gap-1'>
            <p>Oct 8</p>
            <p>5 min read</p>
        </div>
        </div>
    </div>
  )
}
