import React from 'react'

export default function Intro() {
  return (
    <div className='intro section'>
        <h1 className='text-header'>Introduction</h1>
        <div>
            <p className='intro__paragraph text-regular'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          <button className='btn btn-connect'><a href='#CTA'>Connect {">"}</a></button>  
        </div>
    </div>
  )
}
