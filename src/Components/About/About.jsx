import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className=' grid grid-cols-3 text-center mt-20 w-[75%] mx-auto'>
            <p className='p-12 b-r b-b'>Billing</p>
            <p className='p-12 b-r b-b'>Features</p>
            <p className='p-12 b-b'>Enterprice</p>
            <p className='p-12 b-r b-b'>Support</p>
            <p className='p-12 b-r b-b'>Contact Us</p>
            <p className='p-12 b-b'>Privacy</p>
            <p className='p-12 b-r'>Account</p>
            <p className='p-12 b-r'>My Orders</p>
            <p className='p-12'>Developers</p>
        </div>
    );
};

export default About;