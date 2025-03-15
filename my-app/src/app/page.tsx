import UICardFeatures from '@/UI/UICardFeatures';
import { Brain, Camera, Settings } from 'lucide-react';
import React from 'react'
import Hero from "@/components/Hero";
import Image from 'next/image'
import { ErrorImage, FactureImage } from '../../public/Images'
import HeadlineTitle from '@/components/HeadlineTitle';
import UICardHItW from '@/UI/UICardHItW';
import Link from 'next/link';
import Plans from '@/components/Plans';

export default function Home() {
  const Features_Data = [
    {icon: Camera, title: 'Advanced OCR Scanning', description: 'Instantly digitize and extract data from any invoice or receipt with exceptional accuracy.'},
    {icon: Settings, title: 'Automated Workflows', description: 'Save time by automating financial processes and reducing human errors.'},
    {icon: Brain, title: 'Predictive Insights', description: 'Forecast future financial trends with intelligent data analysis and machine learning.'},
];

const Steps_How_It_Work = [
  {number: 1, title: 'Scan & Capture', description: 'Take a photo of your invoice or upload it directly. Our advanced OCR technology immediately gets to work extracting all relevant data.'},
  {number: 2, title: 'AI Analysis', description: 'Our AI automatically categorizes expenses, identifies tax implications, and suggests the correct accounting entries based on your chart of accounts.'},
  {number: 3, title: 'Financial Insights', description: 'Access real-time financial reports, tax summaries, and performance analytics. Make informed business decisions with accurate data.'},
];

  return (
    <main className="w-full min-h-screen bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.15)_0%,_transparent_50%)]">
      <Hero />

      {/* ---------- Facture Preview ---------- */}
      <section className='w-full flex lg:flex-row gap-2 flex-col lg:justify-between lg:px-20 px-6 items-center
        border-y border-blue-900 py-8 shadow-lg flex-wrap
        bg-[radial-gradient(circle_at_50%_50%,_rgba(79,_70,_229,_0.15)_0%,_transparent_50%)]'>
      <div className='relative flex-shrink-0 grow max-w-[500px] w-[400px] h-[500px] rounded-lg 
        overflow-hidden bg-green-yellow'>
        <Image src={FactureImage || ErrorImage} alt='' fill className='object-cover'/>
      </div>
      <div className='relative flex-shrink-0 grow max-w-[500px] w-[400px] h-[500px] rounded-lg 
        overflow-hidden bg-green-yellow'>
        <Image src={FactureImage || ErrorImage} alt='' fill className='object-cover'/>
      </div>
    </section>

      {/* ------------- Features ------------- */}
      <section className='w-full bg-neutral-900 lg:px-20 px-6 py-10'>
        <HeadlineTitle 
          TITLE='Intelligent Features' 
          DESCRIPTION='Our AI-powered system transforms your financial workflow'
        />
        <section className='w-full flex items-center flex-col justify-center lg:flex-row py-8 gap-2'>
          {Features_Data.map((feature, index) => {
              return (
                  <UICardFeatures 
                      key={index} 
                      DESCRIPTION={feature.description}
                      TITLE={feature.title}
                      ICON={feature.icon}
                  />
              )
          })}
        </section>
      </section>

        {/* ---------------- How It Works -------------- */}
      <section className='w-full lg:px-20 px-6 flex flex-col items-center py-10'>
          <HeadlineTitle 
            TITLE='How It Works'
            DESCRIPTION='From document to financial insight in three simple steps' 
          />
          <section className='w-full flex items-center flex-col justify-center lg:flex-row py-8 gap-2'>
            {Steps_How_It_Work.map((step, index) => {
              return (
                <UICardHItW 
                key={index}
                DESCRIPTION={step.description}
                NUMBER={step.number}
                TITLE={step.title}
                />
              )
            })}
          </section>
      </section>
        {/* ---------------- See It In Action ---------------- */}
        <section className='w-full min-h-[40vh] flex flex-col justify-center items-center'>
          <HeadlineTitle 
            TITLE='See It In Action'
            DESCRIPTION='Watch how Luxe Facturation transforms your financial workflow'
            />
            <div className='space-x-4 py-10'>
              <Link style={{background: "linear-gradient(90deg, #6366f1 0%, #4f46e5 100%)"}} href='/' className='py-4 px-8 rounded-lg hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]'>Free Trial</Link>
              <Link href='/' className='border border-neutral-800 px-8 py-4 rounded-lg bg-neutral-900'>Watch Demo</Link>
            </div>
        </section>

        <Plans />
    </main>
  );
}
