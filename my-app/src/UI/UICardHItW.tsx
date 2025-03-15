import React from 'react'

export default function UICardHItW({TITLE, DESCRIPTION, NUMBER}: {TITLE:string; DESCRIPTION: string; NUMBER: number}) {
  return (
    <div className='lg:w-1/4 w-[400px] min-h-[32vh] grow flex-shrink-0 flex flex-col gap-2 py-4 px-6 
      rounded-lg border border-neutral-700 bg-neutral-800 hover:border-neutral-500 shadow-lg 
      hover:shadow-gray-900 transition-all duration-300'>
      <b className='px-4 py-2 rounded-full bg-indigo-500 w-max bg-opacity-30 text-indigo-500'>
        {NUMBER}
      </b>
      <h1 className='text-xl'>
        {TITLE}
      </h1>
      <p className='text-neutral-500'>
        {DESCRIPTION}
      </p>
    </div>
  )
}
