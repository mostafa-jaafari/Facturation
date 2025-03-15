import { BadgeCheck } from 'lucide-react';
import React from 'react'
import HeadlineTitle from './HeadlineTitle';

export default function Plans() {
    const Plans_Data = [
        {
            title: "Starter Plan",
            price: "$19",
            description: "Perfect for freelancers and small businesses just getting started.",
            features: [
                "50 invoices/month",
                "Basic OCR scanning",
                "Standard financial reports",
                "Email support",
            ],
      recommendedplan: false,
        },
        {
            title: "Professional Plan",
            price: "$49",
            description: "Designed for growing teams and expanding businesses.",
            features: [
              "200 invoices/month",
              "Advanced OCR scanning",
              "Detailed financial reports",
              "Priority email support",
              "Integration with accounting software",
            ],
            recommendedplan: true,
          },
          {
            title: "Premium Plan",
            price: "$99",
            description: "Ideal for large businesses with complex financial needs.",
            features: [
              "500 invoices/month",
              "AI-powered OCR scanning",
              "Custom financial reports",
              "Dedicated support",
              "Integration with accounting software",
              "Multi-user access",
            ],
            recommendedplan: false,
          },
    ];
  return (
    <main className='bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.15)_0%,_transparent_50%)]
    py-10 lg:px-20 px-6 w-full'>
        <HeadlineTitle 
            TITLE='Choose Your Plan'
            DESCRIPTION='Flexible pricing options designed to scale with your business'/>
        
        <section className='w-full flex flex-wrap gap-2 justify-center lg:justify-between items-start py-10'>
        {Plans_Data.map((plan, index) => {
            return (
                <section key={index} className={`grow lg:w-1/4 max-w-[500px]  hover:bg-opacity-40 transition-all duration-300 bg-neutral-700 backdrop-blur-lg bg-opacity-30 w-full overflow-hidden rounded-lg border ${plan.recommendedplan === true ? 'border-2 border-indigo-700' : 'border-neutral-700'}`}>
                    {plan.recommendedplan === true && (
                        <p className='w-full bg-indigo-700 flex justify-center py-2 text-xl font-semibold'>Recommended Plan</p>
                    )}
                    <section className='p-6'>
                        <span className='flex flex-col'>
                            <b className='text-2xl'>{plan.title}</b>
                            <ins className='no-underline text-3xl font-semibold flex items-end'>{plan.price} <p className='text-sm font-normal text-neutral-400'>/month</p></ins>
                        </span>
                        <p className='py-4 text-neutral-500'>{plan.description}</p>
                        <div className='space-y-4 my-6'>
                            {plan.features.map((feature, index) => {
                                return (
                                    <span key={index} className='flex gap-2 items-center'><BadgeCheck className='text-indigo-500'/> {feature}</span>
                                )
                            })}
                        </div>
                        <div className='w-full mt-4'>
                            <button className='bg-indigo-700 w-full py-3 rounded-lg hover:bg-indigo-900'>Get Started</button>
                        </div>
                    </section>
                </section>
            )
        })}
        </section>
    </main>
  )
}
