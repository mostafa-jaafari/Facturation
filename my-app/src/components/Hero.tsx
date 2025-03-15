import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ErrorImage } from '../../public/Images';
import Companie1 from '../../public/FakeCompanies/companie1.png';
import Companie2 from '../../public/FakeCompanies/companie2.png';
import Companie3 from '../../public/FakeCompanies/companie3.png';

export default function Hero() {
    const Companies_Images = [Companie1, Companie2, Companie3]
  return (
    <main className='w-full h-[80vh] flex flex-col justify-center items-center'>
      <section className='flex items-center gap-4'>
        <div className='flex -space-x-4'>
            {Companies_Images.map((image, index) => {
              const Last_Image = index === Companies_Images.length - 1;
                return (
                    <div key={index} className={`relative w-12 h-12 overflow-hidden 
                      rounded-full border-2 border-neutral-900 ${Last_Image ? 'bg-neutral-800' : 'bg-neutral-300'}`}>
                        <Image src={image || ErrorImage} alt='' fill className={`object-cover ${Last_Image && ''}`}/>
                        {Last_Image && (
                          <span className='absolute text-sm w-full h-full flex justify-center items-center'>
                            +99
                          </span>
                        )}
                    </div>
                )
            })}
        </div>
        <div>
            <h2>Join +2,000 companies</h2>
            <span className='flex'>
                {Array(5).fill(0).map((_, index) => {
                    return (
                        <Star size={18} key={index} className='text-yellow-500 fill-yellow-500'/>
                    )
                })}
                <p className='pl-1 text-sm'>4.9/5</p>
            </span>
        </div>
      </section>
      <h1 className='px-4 py-6 text-3xl md:text-5xl lg:text-6xl font-semibold lg:w-3/4 text-center'>
        Reimagine Your
        Financial Workflow
      </h1>
      <p className='text-neutral-500 lg:w-3/5 w-3/4 text-center'>
        Advanced AI-powered invoice scanning and accounting system that 
        streamlines your financial management with precision and elegance.
      </p>
      <div className='space-x-4 py-8'>
        <Link style={{background: "linear-gradient(90deg, #6366f1 0%, #4f46e5 100%)"}} href='/' className='py-4 px-8 rounded-lg hover:shadow-[0_10px_20px_rgba(79,70,229,0.3)]'>Free Trial</Link>
        <Link href='/' className='border border-neutral-800 px-8 py-4 rounded-lg bg-neutral-900'>Watch Demo</Link>
      </div>
    </main>
  )
}
