import React from 'react';
import './About.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='text-center mt-10 w-[75%] mx-auto'>
            <h2 className='text-4xl mb-5 font-bold'>Help Center</h2>
            <div className='relative mb-7'>
            <input type="text" className='border-2 rounded-full px-12 py-2 bg-gray-200' placeholder='Search...'/>
            <MagnifyingGlassIcon className='w-6 h-6 absolute left-6 md:left-96 bottom-2 '></MagnifyingGlassIcon>
            </div>
            <div className=' grid grid-cols-3'>
                <Link to='/billing' className='p-5 md:p-12 b-r b-b'>Billing</Link>
                <Link to='features' className='p-5 md:p-12 b-r b-b'>Features</Link>
                <Link to='/enterprice' className='p-5 md:p-12 b-b'>Enterprice</Link>
                <Link to='/support' className='p-5 md:p-12 b-r b-b'>Support</Link>
                <Link to='/contact' className='p-5 md:p-12 b-r b-b'>Contact Us</Link>
                <Link to='/privacy' className='p-5 md:p-12 b-b'>Privacy</Link>
                <Link to='/account' className='p-5 md:p-12 b-r'>Account</Link>
                <Link to='/my_orders' className='p-5 md:p-12 b-r'>My Orders</Link>
                <Link to='/developers' className='p-5 md:p-12'>Developers</Link>
            </div>
        </div>
    );
};

export default About;