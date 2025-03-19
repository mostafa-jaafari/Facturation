'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { SideBarLinks } from '@/Links/NavigationLinks';


export default function SideBar({InitialNav}: {InitialNav: string}) {
    const [currentNav, setCurrentNav] = useState<string>(InitialNav);
  return (
    <main className='w-full h-full'>
        <section className='w-full space-y-1 h-full border-r border-neutral-700 py-6 px-4 lg:inline-block md:inline-block hidden'>
            {SideBarLinks.map((nav, index) => {
                const NavigationLink = nav.label.replace(' ', "").toLowerCase();
                return (
                    <Link key={index} href={NavigationLink === 'dashboard' ? '/dashboard' : `/dashboard?navto=${NavigationLink}`}
                    onClick={() => setCurrentNav(NavigationLink)}
                    className={`flex text-nowrap w-full hover:bg-neutral-800 rounded-lg text-xl gap-4 p-2 capitalize 
                        ${InitialNav === nav.label.replace(' ', '').toLowerCase() && 'bg-neutral-800'}`}>
                    <nav.icon size={30}/>
                    <p>
                    {nav.label}
                    </p>
                </Link>
            )
            })}
            <p className='text-neutral-700 text-sm py-2'>Invoices</p>
            hellooooo uzus
        </section>
    </main>
  )
}
