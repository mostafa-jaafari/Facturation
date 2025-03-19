'use client';
import { Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react';

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
  // State for invoice details
  const [invoiceDetails, setInvoiceDetails] = useState<any[]>([]);
  
  // State for invoice issuer data
  const [invoiceData, setInvoiceData] = useState<any>(null);
  
  // State for stored customer info
  const [customerInfosStored, setCustomerInfosStored] = useState<any>(null);

  // Load all data from localStorage on component mount
  useEffect(() => {
    // Load invoice details
    const loadInvoiceDetails = () => {
      try {
        const data = JSON.parse(localStorage.getItem("storadinvoicedetails") || '[]');
        setInvoiceDetails(data);
      } catch (error) {
        console.error("Error loading invoice details:", error);
        setInvoiceDetails([]);
      }
    };

    // Load invoice issuer data
    const loadInvoiceData = () => {
      try {
        const data = JSON.parse(localStorage.getItem("InvoiceData") || 'null');
        setInvoiceData(data);
      } catch (error) {
        console.error("Error loading invoice data:", error);
        setInvoiceData(null);
      }
    };

    // Load customer info
    const loadCustomerInfo = () => {
      try {
        const data = JSON.parse(localStorage.getItem("customerinfos") || 'null');
        setCustomerInfosStored(data);
      } catch (error) {
        console.error("Error loading customer info:", error);
        setCustomerInfosStored(null);
      }
    };

    // Initial load
    loadInvoiceDetails();
    loadInvoiceData();
    loadCustomerInfo();

    // Set up storage event listener to detect changes from other components
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "storadinvoicedetails") {
        loadInvoiceDetails();
      } else if (event.key === "InvoiceData") {
        loadInvoiceData();
      } else if (event.key === "customerinfos") {
        loadCustomerInfo();
      }
    };

    // Add event listener for storage changes
    window.addEventListener('storage', handleStorageChange);

    // Create a MutationObserver to detect changes in localStorage
    const intervalId = setInterval(() => {
      loadInvoiceDetails();
      loadInvoiceData();
      loadCustomerInfo();
    }, 500); // Check every half second

    // Clean up
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(intervalId);
    };
  }, []);

  // Update localStorage when invoice details change from this component
  useEffect(() => {
    localStorage.setItem('storadinvoicedetails', JSON.stringify(invoiceDetails));
  }, [invoiceDetails]);

  // Handle item deletion
  const handleDeleteItem = (index: number) => {
    // Create a copy of the current array
    const updatedData = [...invoiceDetails];
    
    // Remove the item at the specified index
    updatedData.splice(index, 1);
    
    // Update the state with the new array
    setInvoiceDetails(updatedData);
    
    // Update localStorage with the updated array
    localStorage.setItem('storadinvoicedetails', JSON.stringify(updatedData));
    
    // Dispatch a custom event to notify other components of the change
    window.dispatchEvent(new Event('storageUpdated'));
  };

  // Calculate total for each row
  const calculateTotal = (price: string, quantity: string) => {
    const p = parseFloat(price) || 0;
    const q = parseFloat(quantity) || 0;
    if(q > 0){
      return (p * q).toFixed(2);
    }else{
      return (p * 1).toFixed(2)
    }
  };

  return (
    <main className='bg-neutral-100 rounded w-full h-[100vh] text-black p-8'>
      <h1 className='text-3xl font-semibold uppercase'>
        {invoiceData?.companyname || 'Company Name'}
      </h1>
      <div className='w-full text-sm py-4 flex items-start justify-between'>
        <span className='w-full'>
          <p className='text-neutral-500 font-semibold'>Invoice issued by :</p>
          <h1>{invoiceData?.fullname || ''}</h1>
          <h2>{invoiceData?.phonenumber || ''}</h2>
          <h2>{invoiceData?.country || ''} {invoiceData?.city && ' / '}{invoiceData?.city || ''}</h2>
          <h2>{invoiceData?.companyaddress || ''}</h2>
        </span>
        <span className='w-full'>
          <p className='text-neutral-500 font-semibold'>Bill to :</p>
          <h1>{FULLNAME || customerInfosStored?.fullname || ''}</h1>
          <h2>{PHONENUMBER || customerInfosStored?.phonenumber || ''}</h2>
          <h2>
            {COUNTRY || customerInfosStored?.country || ''}
            {(COUNTRY || customerInfosStored?.country) && (CITY || customerInfosStored?.city) ? ' / ' : ''}
            {CITY || customerInfosStored?.city || ''}
          </h2>
          <h2>{COMPANYADDRESS || customerInfosStored?.companyaddress || ''}</h2>
          <h2>{ADDITIONALINPUT || customerInfosStored?.additionalinput || ''}</h2>
        </span>
      </div>

      <table className="w-full">
        <thead className="bg-neutral-800 text-neutral-100">
          <tr>
            <th className="px-4 font-normal border border-neutral-400">N°</th>
            <th className="px-4 font-normal border border-neutral-400">Description</th>
            <th className="px-4 font-normal border border-neutral-400">Price</th>
            <th className="px-4 font-normal border border-neutral-400">Quantity</th>
            <th className="px-4 font-normal border border-neutral-400">Total</th>
            <th className="px-4 font-normal border border-neutral-400"></th>
          </tr>
        </thead>
        <tbody>
          {invoiceDetails?.length > 0 ? (
            invoiceDetails.map((data, index) => (
              <tr key={index} className='text-center relative group'>
                <td className="px-4 border border-neutral-400 text-center">{index + 1}</td>
                <td className="px-4 border border-neutral-400">{data?.description || ''}</td>
                <td className="px-4 border border-neutral-400 text-center">{data?.price || ''}</td>
                <td className="px-4 border border-neutral-400 text-center">{data?.quantity || ''}</td>
                <td className="px-4 border border-neutral-400 text-center">
                  {calculateTotal(data?.price, data?.quantity)}
                </td>
                <td className="px-4 border border-neutral-400 text-center">
                  <Trash
                    onClick={() => handleDeleteItem(index)} 
                    size={14}
                    className='text-red-700 cursor-pointer hover:scale-110 transition-all duration-200'
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="px-4 py-3 text-center border border-neutral-400">
                No invoice items added yet
              </td>
            </tr>
          )}
        </tbody>
        {invoiceDetails?.length > 0 && (
          <tfoot>
            <tr className="bg-neutral-200">
              <td colSpan={4} className="px-4 py-2 text-right font-semibold border border-neutral-400">
                Total Amount:
              </td>
              <td className="px-4 py-2 text-center font-semibold border border-neutral-400">
                {invoiceDetails.reduce((sum, item) => {
                  return sum + (parseFloat(item?.price || '0') * parseFloat(item?.quantity || '0'));
                }, 0).toFixed(2)}
              </td>
              <td className="border border-neutral-400"></td>
            </tr>
          </tfoot>
        )}
      </table>
    </main>
  );
}