import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className='bg-[#FFFC92] p-8 flex flex-row justify-between'>
            <div className="">
                <Link href="" className='text-black lg:text-xl text-lg mx-4 font-sans '>Product</Link>
                <Link href="" className='text-black lg:text-xl text-lg mx-4 font-sans '>Resources</Link>
                <Link href="" className='text-black lg:text-xl text-lg mx-4 font-sans '>Contact Sales</Link>
                <Link href="" className='text-black lg:text-xl text-lg mx-4 font-sans '>Pricing</Link>
            </div>
            <div className="flex">
                <button className='bg-[#D5D3DD] mx-2 rounded-3xl px-4 py-2 text-black'>Login</button>
                <button className='bg-[#2ADD8C] mx-2 rounded-3xl px-4 py-2 text-black'>Get Started For free</button>
            </div>
        </div>
    )
}
