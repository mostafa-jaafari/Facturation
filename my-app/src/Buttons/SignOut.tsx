'use client';
import { signOut } from 'next-auth/react';
import React from 'react'

export default function SignOut() {
  return (
    <button 
        onClick={(e) => {
            e.preventDefault();
            signOut();
        }}
        className='w-full rounded-lg py-2 bg-neutral-900 hover:bg-opacity-60 border border-neutral-700'>Sign Out</button>
  )
}
