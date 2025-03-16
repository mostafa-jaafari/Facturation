import React from 'react'
import RegisterForm from './RegisterForm'

export default function page() {
  return (
    <main className='w-full min-h-[80vh] lg:px-20 px-6 py-8
        bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.15)_0%,_transparent_50%)]'>
      <span className='w-full flex flex-col justify-center items-center pb-8'>
        <h1 className='text-4xl bg-gradient-to-r from-indigo-700 to-blue-400 bg-clip-text text-transparent font-black'>
            Facturation
        </h1>
        <h2 className='text-xl font-semibold pt-2'>
            Create Your Account
        </h2>
        <p className='text-neutral-500'>
            Start transforming your financial workflow
        </p>
      </span>
        <RegisterForm />
        
    </main>
  )
}
