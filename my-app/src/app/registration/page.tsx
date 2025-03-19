import React from 'react'
import { auth } from '@/auth'
import RegisterForm from './RegisterForm';
import { ChevronLeftCircle, Link, TriangleAlert } from 'lucide-react';


export default async function page() {
  const IsAuth = await auth();

  return (
    <main className='w-full min-h-[80vh] lg:px-20 px-6 py-8
        bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.15)_0%,_transparent_50%)]'>
      <RegisterForm />
    </main>
  )
}
