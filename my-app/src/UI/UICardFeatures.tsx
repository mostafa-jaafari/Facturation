import React from 'react'


export interface UICardFeaturesType {
    ICON: React.ComponentType<{ size?: number, className?: string }>, 
    TITLE: string,
    DESCRIPTION: string,
}

export default function CardTest({TITLE, DESCRIPTION, ICON}: UICardFeaturesType) {
  return (
    <div className='lg:w-1/4 w-[400px] min-h-[32vh] grow flex-shrink-0 flex flex-col gap-2 py-4 px-6 
      rounded-lg border border-neutral-700 bg-neutral-800 hover:border-neutral-500 shadow-lg 
      hover:shadow-gray-900 transition-all duration-300'>
      <ICON size={50} className='bg-indigo-500 bg-opacity-30 text-indigo-500 mb-4 p-2.5 rounded-lg'/>
      <h1 className='text-xl'>
        {TITLE}
      </h1>
      <p className='text-neutral-500'>
        {DESCRIPTION}
      </p>
    </div>
  )
}
