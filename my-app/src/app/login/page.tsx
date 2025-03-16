import { Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import GoogleIcon from '../../../public/GoogleIcon.svg';


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

        <section className='w-full flex flex-col justify-center items-center'>
            <form className='border flex flex-col gap-4 border-neutral-800 rounded-lg bg-neutral-900 bg-opacity-30 max-w-[450px] min-w-[350px] w-full p-8'>
                {/* ---------- Email ---------- */}
                <div className='flex flex-col'>
                    <label htmlFor="Email" className='p-1 text-sm text-neutral-300'>Email adress</label>
                    <input placeholder='Enter your email' id='Email' type='email' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- Password ---------- */}
                <div className='flex flex-col'>
                    <span className='w-full p-1 text-sm flex items-center justify-between'>
                        <label htmlFor="Password" className='text-neutral-300'>Password</label>
                        <p className='text-blue-700 cursor-pointer underline'>Forget Password ?</p>
                    </span>
                    <input placeholder='••••••••' id='Password' type='password' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- CheckBox ---------- */}
                <div className='flex gap-1 px-1'>
                    <input id='CheckBox' type='checkbox' className='w-4'/>
                    <label htmlFor="CheckBox" className='text-sm'>Remember me</label>
                </div>
                {/* ---------- Submit Button ---------- */}
                <button className='py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 border border-indigo-400 font-semibold'>Login</button>
                {/* ---------- Submit with Providers ---------- */}
                <div>
                    <span className='w-full flex items-center gap-2 mb-2'>
                        <hr className='border-neutral-700 w-full' />
                        <p className='text-neutral-400'>or</p>
                        <hr className='border-neutral-700 w-full' />
                    </span>
                    {/* ---------- Providers Btns ---------- */}
                    <span className='w-full flex gap-2'>
                        <Github className='bg-indigo-500 bg-opacity-30 fill-white cursor-pointer h-10 p-2 rounded-lg grow' />
                        <Image src={GoogleIcon} alt='' className='bg-indigo-500 bg-opacity-30 fill-white cursor-pointer h-10 p-2 rounded-lg grow' />
                    </span>
                </div>
            <span className='w-full pt-4 flex gap-1 justify-center text-sm text-neutral-400'>
                <p>
                    Don't have an account ? 
                </p>
                <Link href='/register' className='text-indigo-600'>Register</Link>
            </span>
            </form>
        </section>
    </main>
  )
}
