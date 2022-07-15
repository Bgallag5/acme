import React from 'react';
import Image from 'next/image';

export default function Article(props) {
  const {title} = props
  return (
    <div className='recent__article transform duration-300 absolute top-auto left-0 w-1/3 flex-1 m-auto h-auto flex flex-col text-left border border-slate-900 dark:bg-white rounded'>
        <Image className='rounded shadow-lg shadow-black' src={require('../../assets/images/blog-1.jpg')} alt="blog post" />
        <div className='p-2 flex flex-col'>
        <h2 className='blog-title'>{title} </h2>
        <p className='blog-text'>Article text about the stuff</p>
        <div className='text-tiny flex flex-row mt-3 gap-1'>
            <p>Oct 8</p>
            <p>5 min read</p>
        </div>
        </div>
    </div>
  )
}
