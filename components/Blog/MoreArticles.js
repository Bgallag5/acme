import React from 'react';

import BlogArticle from './BlogArticle';

export default function MoreArticles() {
  return (
    <div className='h-auto  w-5/6 relative m-auto flex flex-col gap-12 my-12 mb-36'>
        <div className='flex flex-row gap-6 justify-between w-auto'>
        <BlogArticle title={'Front End Dev'} img={'blog-2.jpg'} />
        <BlogArticle title={'Back End Dev'} img={'blog-3.jpg'}  />
        </div>
        <div className='flex flex-row gap-6 justify-between w-auto '>
        <BlogArticle title={'Design'} id={"design"} img={'blog-1.jpg'} />
        <BlogArticle title={'Web'} img={'blog-4.jpg'}  className={''}  />
        <BlogArticle title={'App'} img={'blog-5.jpg'}   />
        </div>
    </div>
  )
}
