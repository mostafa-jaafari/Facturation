import { TriangleAlert } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Invoices() {  
  return (
    <main>
      <section className='w-full flex items-center justify-between py-2 px-6 border-b border-neutral-700'>
        <p className='uppercase'>Invoices</p>
        <Link href='/add-invoice' className='py-1 px-2 text-sm rounded font-semibold bg-indigo-600'>New</Link>
      </section>

      <section className='w-full min-h-[80vh] px-4 space-y-4 flex flex-col justify-center items-center text-center'>
        <TriangleAlert size={60} />
        <h2>No Invoices yet !</h2>
        <p className='text-neutral-500'>
            You haven't created any invoices yet. 
            Start by creating your first invoice.
        </p>
        <Link href='/add-invoice' className="bg-indigo-600 py-2 px-4 rounded">Create New Invoice</Link>
      </section>
    </main>
  )
}
