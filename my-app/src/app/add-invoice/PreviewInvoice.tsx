'use client';
import UIInvoicePreview from '@/UI/UIInvoicePreview'
import { ArrowUpToLine, DiamondPlus, Save } from 'lucide-react';
import React, { useState } from 'react'

export default function PreviewInvoice() {
    const [customerInputs, setCustomerInputs] = useState<{ [key: string]: string }>({
        fullname: '',
        phonenumber: '',
        country: '',
        city: '',
        companyaddress: '',
        additionalinput: '',
    });
    const [invoiceDetails, setInvoiceDetails] = useState<{ [key: string]: string }>({
        description: '',
        price: '',
        quantity: '',
        total: '',
    });
    const HandleCustomerInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerInputs({...customerInputs, [name]: value});
    }
    const HandleInvoiceDetailsInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setInvoiceDetails({...invoiceDetails, [name]: value});
    }
    const HandleSaveCustomerInfos = () => {
        try{
            const updatedInputs = Object.keys(customerInputs).reduce((acc, key) => {
                // تحويل 'key' إلى 'keyof typeof inputs' لكي نتأكد من أنها واحدة من المفاتيح الفعلية لـ 'inputs'
                const typedKey = key as keyof typeof customerInputs;
                acc[typedKey] = customerInputs[typedKey] || '';  // إذا كانت القيمة فارغة، سيتم تخزين سلسلة فارغة
                return acc;
            }, {} as { [key in keyof typeof customerInputs]: string });  // هنا يتم تحديد نوع الـ accumulator ليكون مطابقًا لنوع inputs            

        // Save the updated object to localStorage
        localStorage.setItem('customerinfos', JSON.stringify(updatedInputs));
        setCustomerInputs({
            fullname: '',
            phonenumber: '',
            country: '',
            city: '',
            companyaddress: '',
            additionalinput: '',
        })
        }catch(err){
                console.log(err);
            }
        }
    const InvoiceDetailsData = JSON.parse(localStorage.getItem("storadinvoicedetails") || "[]");
    const HandleSaveInvoiceDetails = () => {
        try{
            const updatedInputs = Object.keys(invoiceDetails).reduce((acc, key) => {
                // تحويل 'key' إلى 'keyof typeof inputs' لكي نتأكد من أنها واحدة من المفاتيح الفعلية لـ 'inputs'
                const typedKey = key as keyof typeof invoiceDetails;
                acc[typedKey] = invoiceDetails[typedKey] || '';  // إذا كانت القيمة فارغة، سيتم تخزين سلسلة فارغة
                return acc;
            }, {} as { [key in keyof typeof invoiceDetails]: string });  // هنا يتم تحديد نوع الـ accumulator ليكون مطابقًا لنوع inputs            

            // Retrieve existing data or initialize an empty array

        // Ensure it's an array before pushing
        if (Array.isArray(InvoiceDetailsData)) {
            InvoiceDetailsData.push(updatedInputs);
        } else {
            console.error("Existing data is not an array!");
            return;
        }

        // Save the updated array back to localStorage
        localStorage.setItem("storadinvoicedetails", JSON.stringify(InvoiceDetailsData));
        
        setInvoiceDetails({
            description: '',
            price: '',
            quantity: '',
            total: '',
        })
        
        }catch(err){
                console.log(err);
            }
    }
  return (
    <main className='w-full min-h-screen flex'>
        <section className='lg:w-1/2 bg-neutral-800 p-12'>
            <UIInvoicePreview 
                CITY={customerInputs.city}
                COMPANYADDRESS={customerInputs.companyaddress}
                COUNTRY={customerInputs.country}
                FULLNAME={customerInputs.fullname}
                PHONENUMBER={customerInputs.phonenumber}
                ADDITIONALINPUT={customerInputs?.additionalinput}
            />
        </section>
        <section className='w-1/2 h-full sticky top-16'>
            <div className='p-2 border-b border-neutral-700 flex items-center justify-between'>
                <h1>Invoice</h1>
                <button className='bg-indigo-700 py-1 px-2 rounded flex items-start gap-2'>Export <ArrowUpToLine size={20} /></button>
            </div>
            <span className='relative w-full'>
                <p className='absolute -top-3 px-2 rounded-r-lg text-sm text-neutral-500 bg-neutral-900'>Customer Informations</p>
                <button onClick={HandleSaveCustomerInfos} className='absolute right-4 -top-4 border border-indigo-700 text-indigo-700 p-1 rounded-full'><Save size={22} /></button>
                <hr className='border-neutral-900 mt-8 mb-2'/>
            </span>
                <section className='w-full grid grid-cols-3 gap-2 p-2 '>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="FullName" className='px-1 text-sm'>Full name</label>
                        <input onChange={HandleCustomerInputsChange} name='fullname' id='FullName' value={customerInputs.fullname} type="text" placeholder='Full Name' className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="PhoneNumber" className='px-1 text-sm'>Phone Number</label>
                        <input onChange={HandleCustomerInputsChange} name='phonenumber' id='PhoneNumber' value={customerInputs.phonenumber}  placeholder='Phone Number' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Country" className='px-1 text-sm'>Country</label>
                        <input onChange={HandleCustomerInputsChange} name='country' id='Country' value={customerInputs.country}  placeholder='Country' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="City" className='px-1 text-sm'>City</label>
                        <input onChange={HandleCustomerInputsChange} name='city' id='City' value={customerInputs.city}  placeholder='City' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="CompanyAdress" className='px-1 text-sm'>Company Address</label>
                        <input onChange={HandleCustomerInputsChange} name='companyaddress' id='CompanyAdress' value={customerInputs.companyaddress}  placeholder='Company Address' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="AdditioanlInput" className='px-1 text-sm'>Additional</label>
                        <input onChange={HandleCustomerInputsChange} name='additionalinput' id='AdditioanlInput' value={customerInputs.additionalinput}  placeholder='Company Address' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                    </div>
                </section>
            <span className='relative w-full'>
                <p className='absolute -top-3 px-2 rounded-r-lg text-sm text-neutral-500 bg-neutral-900'>Invoice Details</p>
                <button onClick={HandleSaveInvoiceDetails} className='absolute right-4 -top-4 border border-indigo-700 text-indigo-700 p-1 rounded-full'><DiamondPlus size={22} /></button>
                <hr className='border-neutral-900 mt-8 mb-2'/>
            </span>
            <section className='w-full flex gap-2 p-2 flex-wrap'>
                <div className='flex flex-col grow min-w-1/2'>
                    <label htmlFor="Description" className='px-1 text-sm'>Description</label>
                    <input onChange={HandleInvoiceDetailsInputsChange} name='description' id='Description' value={invoiceDetails.description} type="text" placeholder='Description' className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                </div>
                <div className='flex flex-col grow min-w-1/2'>
                    <label htmlFor="Price" className='px-1 text-sm'>Price</label>
                    <input onChange={HandleInvoiceDetailsInputsChange} name='price' id='Price' value={invoiceDetails.price}  placeholder='Price' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                </div>
                <div className='flex flex-col grow min-w-1/2'>
                    <label htmlFor="Quantity" className='px-1 text-sm'>Quantity</label>
                    <input onChange={HandleInvoiceDetailsInputsChange} name='quantity' id='Quantity' value={invoiceDetails.quantity}  placeholder='Quantity' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                </div>
                <div className='flex flex-col grow min-w-1/2'>
                    <label htmlFor="Total" className='px-1 text-sm'>Total</label>
                    <input onChange={HandleInvoiceDetailsInputsChange} name='total' id='Total' value={invoiceDetails.total}  placeholder='Total' type="text" className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'/>
                </div>
            </section>
        </section>
    </main>
  )
}
