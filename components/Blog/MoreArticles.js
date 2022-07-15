import React from 'react';

import BlogArticle from './BlogArticle';

export default function MoreArticles() {
  return (
    <div className='h-auto w-5/6 m-auto flex flex-col gap-12 my-12 mb-36'>
        <div className='flex flex-row gap-6 justify-between w-auto '>
        <BlogArticle title={'Front End Dev'} />
        <BlogArticle title={'Back End Dev'}  />
        </div>
        <div className='flex flex-row gap-6 justify-between w-auto '>
        <BlogArticle title={'Design'} />
        <BlogArticle title={'Web'} className={''}  />
        <BlogArticle title={'App'}  />
        </div>
    </div>
  )
}
