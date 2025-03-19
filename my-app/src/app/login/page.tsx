import { Github } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { SignInButton } from '@/Buttons/SignInButton';
import Google from '../../../public/GoogleIcon.svg'



export default function page() {
  return (
    <main className='w-full min-h-[80vh] lg:px-20 px-6 py-8
        bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.15)_0%,_transparent_50%)]'>
      <span className='w-full flex flex-col justify-center items-center pb-8'>
        <h1 className='text-4xl bg-gradient-to-r from-indigo-700 to-blue-400 bg-clip-text text-transparent font-black'>
            Facturation
        </h1>
        <h2 className='text-xl font-semibold pt-2'>
            Sign in to your account
        </h2>
        <p className='text-neutral-500'>
            Access your financial dashboard
        </p>
      </span>
      <section className='w-full flex flex-col items-center'>
        <div className='max-w-[450px] w-full'>
            <span className='w-full flex items-center gap-2 mb-2'>
                <hr className='border-neutral-700 w-full' />
                <p className='text-neutral-400'>or</p>
                <hr className='border-neutral-700 w-full' />
            </span>
            {/* ---------- Providers Btns ---------- */}
            <span className='w-full flex flex-col gap-2'>
            <SignInButton label={<Github />} provider="github" />
                <SignInButton label={<Image src={Google} width={30} alt='Google' />} provider="google" />
            </span>
        </div>
      </section>
    </main>
  )
}
