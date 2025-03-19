'use client';
import { Trash } from 'lucide-react';
import React from 'react'

export default function UIInvoicePreview({
  COMPANYADDRESS,
  CITY,
  COUNTRY,
  PHONENUMBER,
  FULLNAME,
  ADDITIONALINPUT,
}: {
  COMPANYADDRESS?: string;
  CITY?: string;
  COUNTRY?: string;
  PHONENUMBER?: string;
  FULLNAME?: string;
  ADDITIONALINPUT?: any,
}) {
  const StoradeInvoiceData = JSON.parse(localStorage.getItem("InvoiceData") as string);
  const CustomerInfosStored = JSON.parse(localStorage.getItem('customerinfos') as string);
  const InvoiceDetailsData = JSON.parse(localStorage.getItem("storadinvoicedetails") || "[]");
  const HandleDeleteItem = (index) => {
    InvoiceDetailsData.splice(index, 1);
    localStorage.setItem("storadinvoicedetails", JSON.stringify(InvoiceDetailsData))
  }
  return (
    <main className='bg-neutral-100 rounded w-full h-[100vh] text-black p-8'>
      <h1 className='text-3xl font-semibold uppercase'>
        {StoradeInvoiceData?.companyname}
      </h1>
      <div className='w-full text-sm py-4 flex items-start justify-between'>
        <span className='w-full'>
          <p className='text-neutral-500 font-semibold'>Invoice issued by :</p>
          <h1 className=''>{StoradeInvoiceData?.fullname}</h1>
          <h2>{StoradeInvoiceData?.phonenumber}</h2>
          <h2>{StoradeInvoiceData?.country} / {StoradeInvoiceData?.city}</h2>
          <h2>{StoradeInvoiceData?.companyaddress}</h2>
        </span>
        <span className='w-full'>
          <p className='text-neutral-500 font-semibold'>Bill to :</p>
          <h1 className=''>{FULLNAME ? FULLNAME : CustomerInfosStored?.fullname}</h1>
          <h2>{PHONENUMBER ? PHONENUMBER : CustomerInfosStored?.phonenumber}</h2>
          <h2>{COUNTRY ? COUNTRY : CustomerInfosStored?.country}
             {COUNTRY && CITY || CustomerInfosStored?.country && CustomerInfosStored?.city ? ' / ' : ''} 
            {CITY ? CITY : CustomerInfosStored?.city}</h2>
          <h2>{COMPANYADDRESS ? COMPANYADDRESS : CustomerInfosStored?.companyaddress}</h2>
          <h2>{ADDITIONALINPUT ? ADDITIONALINPUT : CustomerInfosStored?.additionalinput}</h2>
        </span>
      </div>
      {/* <hr className='border-neutral-400 mb-2' /> */}
      <table className="w-full">
            <thead className="bg-neutral-800 text-neutral-100">
                <tr>
                    <th className="px-4 font-normal border border-neutral-400">N°</th>
                    <th className="px-4 font-normal border border-neutral-400">Description</th>
                    <th className="px-4 font-normal border border-neutral-400">Price</th>
                    <th className="px-4 font-normal border border-neutral-400">Quantity</th>
                    <th className="px-4 font-normal border border-neutral-400">Total</th>
                </tr>
            </thead>
            {InvoiceDetailsData.map((data, index) => {
              return (
            <tbody key={index} className="">
                <tr className='text-center relative group'>
                    <td className="px-4 border border-neutral-400 text-center">{index + 1}</td>
                    <td className="px-4 border border-neutral-400">{data.description}</td>
                    <td className="px-4 border border-neutral-400 text-center">{data.price}</td>
                    <td className="px-4 border border-neutral-400 text-center">{data.quantity}</td>
                    <td className="px-4 border border-neutral-400 text-center">{data?.price * data?.quantity ? data?.quantity : 1}</td>
                    <Trash onClick={() => HandleDeleteItem(index)} size={14} className='absolute top-2 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 cursor-pointer text-red-700'/>
                </tr>
            </tbody>
              )
            })}
        </table>
    </main>
  )
}
