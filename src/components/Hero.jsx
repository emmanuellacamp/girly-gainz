import React from 'react'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
                <p>IT'S TIME TO GET THOSE</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Gainz<span className='text-pink-300'> Girly</span></h1>
            </div>
           
            <p className='text-sm md:text-base font-light'>I hereby acknowledge that I may achieve incredibly <span className='text-pink-300 font-medium'>girly gainz</span> and accept all the challenges and rewards that come with becoming a <span className='text-pink-300 font-medium'>fabulous fitness queen</span>, adorned with sparkles and strength, and capable of conquering any challenge with grace and determination.</p>
            <button className='px-8 py-4 rounded-md border-[2px] bg-pink-800 border-pink-500 border-solid pinkShadow duration-200'>
                <p>Accept & Begin</p>
            </button>
        </div>
    )
}