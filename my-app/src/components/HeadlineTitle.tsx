import React from 'react'

export default function HeadlineTitle({TITLE, DESCRIPTION}: {TITLE:string; DESCRIPTION: string;}) {
  return (
    <div className='w-full text-center'>
        <h1 className='lg:text-[2.5vw] md:text-[2.5vw] text-2xl'>
          {TITLE}
        </h1>
        <p className='text-neutral-500'>
            {DESCRIPTION}
        </p>
    </div>
  )
}
