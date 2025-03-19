'use client';
import UIInvoicePreview from '@/UI/UIInvoicePreview'
import { ArrowUpToLine, DiamondPlus, Save } from 'lucide-react';
import React, { useEffect, useState } from 'react'

export default function PreviewInvoice() {
    // Customer information state
    const [customerInputs, setCustomerInputs] = useState<{ [key: string]: string }>({
        fullname: '',
        phonenumber: '',
        country: '',
        city: '',
        companyaddress: '',
        additionalinput: '',
    });

    // Handle customer input changes
    const HandleCustomerInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCustomerInputs({...customerInputs, [name]: value});
    }

    // Save customer information to localStorage
    const HandleSaveCustomerInfos = () => {
        try {
            localStorage.setItem('customerinfos', JSON.stringify(customerInputs));
            // Clear form after saving
            setCustomerInputs({
                fullname: '',
                phonenumber: '',
                country: '',
                city: '',
                companyaddress: '',
                additionalinput: '',
            });
            // Notify other components
            window.dispatchEvent(new Event('storageUpdated'));
        } catch(err) {
            console.log(err);
        }
    }
        
    // Invoice details state
    const [invoiceDetails, setInvoiceDetails] = useState<{ [key: string]: string }>({
        description: '',
        price: '',
        quantity: '',
        total: '',
    });

    // Handle invoice detail input changes
    const HandleInvoiceDetailsInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;
        setInvoiceDetails({...invoiceDetails, [name]: value});
    }

    // Invoice data state from localStorage
    const [InvoicedData, setInvoicedData] = useState<any[]>(
        () => JSON.parse(localStorage.getItem('storadinvoicedetails') || '[]')
    );

    // Save invoice details to localStorage
    const HandleSaveInvoiceDetails = () => {
        // Get current data to ensure we have the latest
        const currentData = JSON.parse(localStorage.getItem('storadinvoicedetails') || '[]');
        
        // Create new invoice item
        const newItem = {
            description: invoiceDetails.description || '',
            price: invoiceDetails.price || '',
            quantity: invoiceDetails.quantity || '',
            total: invoiceDetails.total || '',
        };
        
        // Add new item to current data
        const updatedData = [...currentData, newItem];
        
        // Save to localStorage
        localStorage.setItem('storadinvoicedetails', JSON.stringify(updatedData));
        
        // Update state
        setInvoicedData(updatedData);
        
        // Clear form fields
        setInvoiceDetails({
            description: '',
            price: '',
            quantity: '',
            total: '',
        });

        // Notify other components
        window.dispatchEvent(new Event('storageUpdated'));
    }

    // Listen for storage updates from other components
    useEffect(() => {
        const refreshData = () => {
            const currentData = JSON.parse(localStorage.getItem('storadinvoicedetails') || '[]');
            setInvoicedData(currentData);
        };
        
        window.addEventListener('storageUpdated', refreshData);
        
        return () => {
            window.removeEventListener('storageUpdated', refreshData);
        };
    }, []);
    
    return (
        <main className='w-full min-h-screen flex'>
            {/* Invoice Preview Section */}
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
            
            {/* Input Forms Section */}
            <section className='w-1/2 h-full sticky top-16'>
                {/* Header */}
                <div className='p-2 border-b border-neutral-700 flex items-center justify-between'>
                    <h1>Invoice</h1>
                    <button className='bg-indigo-700 py-1 px-2 rounded flex items-start gap-2'>
                        Export <ArrowUpToLine size={20} />
                    </button>
                </div>

                {/* Customer Information Form */}
                <span className='relative w-full'>
                    <p className='absolute -top-3 px-2 rounded-r-lg text-sm text-neutral-500 bg-neutral-900'>
                        Customer Information
                    </p>
                    <button onClick={HandleSaveCustomerInfos} className='absolute right-4 -top-4 border border-indigo-700 text-indigo-700 p-1 rounded-full'>
                        <Save size={22} />
                    </button>
                    <hr className='border-neutral-900 mt-8 mb-2'/>
                </span>
                
                <section className='w-full grid grid-cols-3 gap-2 p-2'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="FullName" className='px-1 text-sm'>Full name</label>
                        <input 
                            onChange={HandleCustomerInputsChange} 
                            name='fullname' 
                            id='FullName' 
                            value={customerInputs.fullname} 
                            type="text" 
                            placeholder='Full Name' 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="PhoneNumber" className='px-1 text-sm'>Phone Number</label>
                        <input 
                            onChange={HandleCustomerInputsChange} 
                            name='phonenumber' 
                            id='PhoneNumber' 
                            value={customerInputs.phonenumber} 
                            placeholder='Phone Number' 
                            type="text" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="Country" className='px-1 text-sm'>Country</label>
                        <input 
                            onChange={HandleCustomerInputsChange} 
                            name='country' 
                            id='Country' 
                            value={customerInputs.country} 
                            placeholder='Country' 
                            type="text" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="City" className='px-1 text-sm'>City</label>
                        <input 
                            onChange={HandleCustomerInputsChange} 
                            name='city' 
                            id='City' 
                            value={customerInputs.city} 
                            placeholder='City' 
                            type="text" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="CompanyAdress" className='px-1 text-sm'>Company Address</label>
                        <input 
                            onChange={HandleCustomerInputsChange} 
                            name='companyaddress' 
                            id='CompanyAdress' 
                            value={customerInputs.companyaddress} 
                            placeholder='Company Address' 
                            type="text" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="AdditionalInput" className='px-1 text-sm'>Additional</label>
                        <input 
                            onChange={HandleCustomerInputsChange} 
                            name='additionalinput' 
                            id='AdditionalInput' 
                            value={customerInputs.additionalinput} 
                            placeholder='Additional Information' 
                            type="text" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                </section>

                {/* Invoice Details Form */}
                <span className='relative w-full'>
                    <p className='absolute -top-3 px-2 rounded-r-lg text-sm text-neutral-500 bg-neutral-900'>
                        Invoice Details
                    </p>
                    <button onClick={HandleSaveInvoiceDetails} className='absolute right-4 -top-4 border border-indigo-700 text-indigo-700 p-1 rounded-full'>
                        <DiamondPlus size={22} />
                    </button>
                    <hr className='border-neutral-900 mt-8 mb-2'/>
                </span>

                <section className='w-full flex gap-2 p-2 flex-wrap'>
                    <div className='flex flex-col grow min-w-1/2'>
                        <label htmlFor="Description" className='px-1 text-sm'>Description</label>
                        <input 
                            onChange={HandleInvoiceDetailsInputsChange} 
                            name='description' 
                            id='Description' 
                            value={invoiceDetails.description} 
                            type="text" 
                            placeholder='Description' 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col grow min-w-1/2'>
                        <label htmlFor="Price" className='px-1 text-sm'>Price</label>
                        <input 
                            onChange={HandleInvoiceDetailsInputsChange} 
                            name='price' 
                            id='Price' 
                            value={invoiceDetails.price} 
                            placeholder='Price' 
                            type="number" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col grow min-w-1/2'>
                        <label htmlFor="Quantity" className='px-1 text-sm'>Quantity</label>
                        <input 
                            onChange={HandleInvoiceDetailsInputsChange} 
                            name='quantity' 
                            id='Quantity' 
                            value={invoiceDetails.quantity} 
                            placeholder='Quantity' 
                            type="number" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                    <div className='flex flex-col grow min-w-1/2'>
                        <label htmlFor="Total" className='px-1 text-sm'>Total</label>
                        <input 
                            onChange={HandleInvoiceDetailsInputsChange} 
                            name='total' 
                            id='Total' 
                            value={invoiceDetails.total} 
                            placeholder='Total' 
                            type="number" 
                            className='focus:border-indigo-600 transition-all duration-300 outline-none rounded px-2 py-3 bg-transparent border border-neutral-600'
                        />
                    </div>
                </section>
            </section>
        </main>
    )
}