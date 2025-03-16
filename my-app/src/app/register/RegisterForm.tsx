'use client'
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import GoogleIcon from '../../../public/GoogleIcon.svg';



export default function RegisterForm(){
    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <form className='border flex flex-col gap-2 border-neutral-800 rounded-lg bg-neutral-900 bg-opacity-30 max-w-[450px] min-w-[350px] w-full p-8'>
                {/* ---------- First Name ---------- */}
                <div className='flex flex-col mt-'>
                    <label htmlFor="FirstName" className='p-1 text-sm text-neutral-300'>First name</label>
                    <input placeholder='First Name' id='FirstName' type='text' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- Last Name ---------- */}
                <div className='flex flex-col'>
                    <label htmlFor="LastName" className='p-1 text-sm text-neutral-300'>Last name</label>
                    <input placeholder='Last Name' id='LastName' type='text' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- Email ---------- */}
                <div className='flex flex-col'>
                    <label htmlFor="Email" className='p-1 text-sm text-neutral-300'>Email adress</label>
                    <input placeholder='Enter your email' id='Email' type='email' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- Password ---------- */}
                <div className='flex flex-col'>
                    <span className='w-full p-1 text-sm flex items-center justify-between'>
                        <label htmlFor="Password" className='text-neutral-300'>Password</label>
                    </span>
                    <input placeholder='••••••••' id='Password' type='password' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- Confirm Password ---------- */}
                <div className='flex flex-col'>
                    <span className='w-full p-1 text-sm flex items-center justify-between'>
                        <label htmlFor="ConfirmPassword" className='text-neutral-300'>Confirm Password</label>
                    </span>
                    <input placeholder='••••••••' id='ConfirmPassword' type='password' className='focus:border-indigo-500 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' required/>
                </div>
                {/* ---------- CheckBox ---------- */}
                <div className='flex gap-1 px-1 py-2'>
                    <input id='CheckBox' type='checkbox' className='w-4'/>
                    <label htmlFor="CheckBox" className='text-sm'>Remember me</label>
                </div>
                {/* ---------- Submit Button ---------- */}
                <button className='py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 border border-indigo-400 font-semibold'>Register</button>
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
                        <button onClick={(e) => {
                            e.preventDefault()
                            signIn('google')}
                            } className='bg-indigo-500 bg-opacity-30 cursor-pointer p-1 rounded-lg grow flex justify-center'>
                            <Image src={GoogleIcon} alt='' className="w-7" />
                        </button>
                    </span>
                </div>
            <span className='w-full pt-4 flex gap-1 justify-center text-sm text-neutral-400'>
                <p>
                    Already have an account ? 
                </p>
                <Link href='/login' className='text-indigo-600'>Login</Link>
            </span>
            </form>
        </section>
    )
}