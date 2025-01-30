import Image from 'next/image'
import React from 'react'

import { footerLinks } from '@/constants/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
        <div className='flex max-m:flex-col flex-wrap justi gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-center items-center gap-6'>
                <Image src='/logo.svg' alt='' width={118} height={18} className='object-contain'/> 
                <p className='text-base text-gray-700'>
                    Carhub 2024 <br/>
                    All rights reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((link)=>(
                    <div key={link.title} className='footer__link'>
                        <h1 className='font-bold'>{link.title}</h1>
                        {link.links.map((item) => (
                            <Link href={item.url}>{item.title}</Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>

            <div className='flex justify-center items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 '>
                <p>@2025 CarHub.All rights reserved. </p>
                <div className='footer__copyrights-link'>
                    <Link href="" className='text-gray-500'>Privacy Policy</Link>
                    <Link href="" className='text-gray-500'>Terms of Use</Link>
                </div>
            </div>
       
    </footer>
  )
}

export default Footer