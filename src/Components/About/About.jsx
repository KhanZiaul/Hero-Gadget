import React from 'react';
import './About.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const About = () => {
    return (
        <div className='text-center mt-10 w-[75%] mx-auto'>
            <h2 className='text-4xl mb-5 font-bold'>Help Center</h2>
            <div className='relative mb-7'>
            <input type="text" className='border-2 rounded-full px-12 py-2' placeholder='Search...'/>
            <MagnifyingGlassIcon className='w-6 h-6 absolute left-6 md:left-96 bottom-2 '></MagnifyingGlassIcon>
            </div>
            <div className=' grid grid-cols-3'>
                <p className='p-5 md:p-12 b-r b-b'>Billing</p>
                <p className='p-5 md:p-12 b-r b-b'>Features</p>
                <p className='p-5 md:p-12 b-b'>Enterprice</p>
                <p className='p-5 md:p-12 b-r b-b'>Support</p>
                <p className='p-5 md:p-12 b-r b-b'>Contact Us</p>
                <p className='p-5 md:p-12 b-b'>Privacy</p>
                <p className='p-5 md:p-12 b-r'>Account</p>
                <p className='p-5 md:p-12 b-r'>My Orders</p>
                <p className='p-5 md:p-12'>Developers</p>
            </div>
        </div>
    );
};

export default About;