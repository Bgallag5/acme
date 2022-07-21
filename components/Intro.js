import React from 'react'

export default function Intro() {
  return (
    <div className='intro section mt-[6rem]'>
        <h1 className='text-header flex self-end w-[90%]'>Introduction</h1>
        <div className='flex items-center flex-col'>
            <p className='text-regular text-clamp'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <button className='btn btn-connect self-start ml-[10%]'><a href='#CTA'>Connect {">"}</a></button>  
        </div>
    </div>
  )
}
