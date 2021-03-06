import React from 'react';
import Image from 'next/image';

export default function Article(props) {
  const {title} = props
  return (
    <div className='recent__article bg-cover transform duration-300 absolute top-auto left-0 md:w-1/3 lg:w-1/4 m-auto !h-full flex flex-col text-left border border-slate-900 dark:bg-white rounded'>
        <Image className='bg-cover h-full' src={require('../../assets/images/blog-1.jpg')} alt="blog post" />
        <div className='p-2 h-auto flex flex-col'>
        <h2 className='blog-title-card'>{title} </h2>
        <p className='blog-text-card'>Article text about the stuff</p>
        <div className='text-tiny flex flex-row mt-3 gap-1'>
            <p>Oct 8</p>
            <p>5 min read</p>
        </div>
        </div>
    </div>
  )
}
