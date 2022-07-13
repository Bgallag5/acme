import React from 'react';
import Image from 'next/image';

export default function CTA() {
  return (
    <div className='h-auto w-2/3 m-auto flex flex-col text-left my-12'>
        <h2 className='text-header'>Inbox</h2>
        <p className='text-regular'>Knowledge Letters</p>
        <div className=' flex h-auto bg-cover mt-10'>
            <Image className='rounded' src={require("../assets/images/newsletter.jpg")} alt="newsletter" />
        </div>
        <form className='flex flex-row justify-between gap-1 py-6'>
            <input className='cta__input' placeholder='Name' />
            <input className='cta__input'  placeholder='Email' />
            <button className='btn  btn-dark'>Subscribe</button>
        </form>
    </div>
  )
}
