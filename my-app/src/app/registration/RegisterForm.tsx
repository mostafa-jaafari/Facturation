'use client'
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/Firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { stringify } from "querystring";



export default function RegisterForm(){
    const [isAlreadyExists, setIsAlreadyExists] = useState(false);
    const session = useSession();
    const userEmail = session.data?.user?.email;
    const [invoiceData, setInvoiceData] = useState(() => {
        return JSON.parse(localStorage.getItem("InvoiceData") as string) || null;
    });

    useEffect(() => {
        if (userEmail) {
            const checkUserExists = async () => {
                try {
                    const docRef = doc(db, "users", userEmail);
                    const docSnap = await getDoc(docRef);
                    if (docSnap.exists()) {
                        setIsAlreadyExists(true);
                        setInvoiceData(docSnap.data());
                        localStorage.setItem("InvoiceData", JSON.stringify(docSnap.data()));
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };
            checkUserExists();
        }
    }, [userEmail]);
    

    const [inputs, setInputs] = useState({
        fullname: '',
        phonenumber: '',
        companyaddress: '',
        country: '',
        city: '',
        companyname: '',
        zipcode: '',
    })
    const [isloading, setIsLoading] = useState(false);
    const HandleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, value, checked } = e.target;
    
        setInputs((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value, // التعامل مع checkbox بشكل صحيح
        }));
    };
    const HandleSubmitForm: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            if (!isAlreadyExists && userEmail) {
                setIsLoading(true);
                const userRef = doc(db, 'users', userEmail);
                await setDoc(userRef, {
                    fullname: inputs.fullname,
                    phonenumber: inputs.phonenumber,
                    companyaddress: inputs.companyaddress,
                    country: inputs.country,
                    city: inputs.city,
                    companyname: inputs.companyname,
                    zipcode: inputs.zipcode,
                    createdAt: new Date(),
                });
                setInputs({
                    fullname: '',
                    phonenumber: '',
                    companyaddress: '',
                    country: '',
                    city: '',
                    companyname: '',
                    zipcode: '',
                })
                setIsAlreadyExists(true)
            } else if(isAlreadyExists && userEmail){
                const userRef = doc(db, 'users', userEmail);
                await updateDoc(userRef, {
                    fullname: inputs.fullname,
                    phonenumber: inputs.phonenumber,
                    companyaddress: inputs.companyaddress,
                    country: inputs.country,
                    city: inputs.city,
                    companyname: inputs.companyname,
                    zipcode: inputs.zipcode,
                    lastupdated: new Date(),
                })
                setInputs({
                    fullname: '',
                    phonenumber: '',
                    companyaddress: '',
                    country: '',
                    city: '',
                    companyname: '',
                    zipcode: '',
                })
                alert("updated Successfuly");
            }
            localStorage.setItem('invoiceData', JSON.stringify(inputs));
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }finally{
            setIsLoading(false);
        }
    };
    return (
        <section className='w-full flex flex-col justify-center items-center'>
            <form onSubmit={HandleSubmitForm} className='border flex flex-col gap-2 border-neutral-800 rounded-lg bg-neutral-900 bg-opacity-30 w-[550px] min-w-[350px] p-8'>
                {/* ---------- Full Name && Phone Number ---------- */}
                <div className="w-full flex gap-2">
                {/* ---------- Full Name ---------- */}
                    <div className="grow">
                        <label 
                            htmlFor="FullName" 
                            className='p-1 text-sm text-neutral-300'>
                                Full Name
                        </label>
                        <input 
                            name="fullname" 
                            id="FullName" 
                            value={inputs.fullname}
                            onChange={HandleChangeInputs}
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-transparent focus:border-indigo-500 placeholder:text-neutral-600 outline-none" 
                            placeholder="Full Name" 
                            required
                        />
                    </div>
                    {/* ---------- Phone Number ---------- */}
                    <div className="grow">
                        <label 
                            htmlFor="PhoneNumber" 
                            className='p-1 text-sm text-neutral-300'>
                                Phone Number
                        </label>
                        <input 
                            name="phonenumber"
                            value={inputs.phonenumber} 
                            id="PhoneNumber" 
                            onChange={HandleChangeInputs}
                            type="number" 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-transparent focus:border-indigo-500 placeholder:text-neutral-600 outline-none" 
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                </div>
                {/* ---------- Company Address ---------- */}
                <div className='flex flex-col'>
                    <span className='w-full p-1 text-sm flex items-center justify-between'>
                        <label 
                            htmlFor="CompanyAddress" 
                            className='text-neutral-300'>
                                Company address
                        </label>
                    </span>
                    <input 
                        name="companyaddress" 
                        onChange={HandleChangeInputs} 
                        value={inputs.companyaddress} 
                        placeholder='Company address' 
                        id='CompanyAddress' 
                        type='text' 
                        className='focus:border-indigo-500 placeholder:text-neutral-600 outline-none border border-neutral-800 rounded-lg px-4 py-3 bg-transparent' 
                        required
                    />
                </div>
                {/* ---- Company Name && Zip Code ---- */}
                <div className="w-full flex gap-2">
                {/* ---------- Company Name ---------- */}
                    <div className="grow">
                        <label 
                            htmlFor="CompanyName" 
                            className='p-1 text-sm text-neutral-300'>
                                Company Name
                        </label>
                        <input 
                            name="companyname"
                            value={inputs.companyname} 
                            onChange={HandleChangeInputs}
                            id="CompanyName" 
                            type="text" 
                            className="w-full px-4 py-3 rounded-lg border border-neutral-800 bg-transparent focus:border-indigo-500 placeholder:text-neutral-600 outline-none" 
                            placeholder="Company Name" 
                            required
                        />
                    </div>
                {/* ---------- Zip Code ---------- */}
                    <div className="grow">
                        <label 
                            htmlFor="ZipCode" 
                            className='p-1 text-sm text-neutral-300'>
                                Zip Code
                        </label>
                        <input 
                            name="zipcode" 
                            value={inputs.zipcode}
                            id="ZipCode" 
                            onChange={HandleChangeInputs}
                            type="number" 
                            className="grow px-4 py-3 rounded-lg border border-neutral-800 bg-transparent focus:border-indigo-500 placeholder:text-neutral-600 outline-none" 
                            placeholder="Zip Code" 
                            required
                        />
                    </div>
                </div>
                {/* ---------- City && Country ---------- */}
                <div className="w-full flex gap-2">
                    {/* ---------- City ---------- */}
                    <div className='grow'>
                        <label 
                            htmlFor="City" 
                            className='p-1 text-sm text-neutral-300'>
                                City
                        </label>
                        <input 
                            name="city" 
                            value={inputs.city} 
                            onChange={HandleChangeInputs} 
                            id='City' 
                            type='text' 
                            className='w-full px-4 py-3 rounded-lg border border-neutral-800 bg-transparent focus:border-indigo-500 placeholder:text-neutral-600 outline-none' 
                            placeholder="City" 
                            required
                        />
                    </div>
                    {/* ---------- Country ---------- */}
                    <div className='grow'>
                        <label 
                            htmlFor="Country" 
                            className='p-1 text-sm text-neutral-300'>
                                Country
                        </label>
                        <input 
                            name="country" 
                            onChange={HandleChangeInputs} 
                            value={inputs.country} 
                            placeholder='Country' 
                            id='Country' 
                            type='text' 
                            className='w-full px-4 py-3 rounded-lg border border-neutral-800 bg-transparent focus:border-indigo-500 placeholder:text-neutral-600 outline-none' 
                            required
                        />
                    </div>
                </div>

                {/* ---------- Submit Button ---------- */}
                <button disabled={isloading} type="submit" className='py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 border border-indigo-400 font-semibold'>{isAlreadyExists ? "Update" : "Register"}</button>
            </form>
        </section>
    )
}