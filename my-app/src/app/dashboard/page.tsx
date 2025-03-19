import React from 'react'
import SideBar from './SideBar';
import Invoices from './Invoices';


export default function page({searchParams}: {searchParams: {navto: string}}) {
  const currentNav: string = searchParams.navto || 'dashboard';

  const RenderPageContent = () => {
    switch (currentNav) {
        case 'myinvoices':
        return (
          <Invoices />
        )
        case 'myprofile':
        return (
          <p>MYPROFILE</p>
        )
        case 'clients':
        return (
          <p>CLIENTS</p>
        )
        case 'settings':
        return (
          <p>SETTINGS</p>
        )
        case 'helpcenter':
        return (
          <p>HELPCENTER</p>
        )
      default:
        return (
          <p>DASHBOARD</p>
        )
    }
  }
  return (
    <main className='relative w-full flex lg:flex-row md:flex-row flex-col min-h-screen'>
      <section className='lg:w-1/5'>
        <SideBar InitialNav={currentNav}/>
      </section>
      <section className='grow'>
        {RenderPageContent(currentNav)}
      </section>
    </main>
  )
}
