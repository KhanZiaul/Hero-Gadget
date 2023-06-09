import React from 'react';
import './Home.css'
import heroImg from '../../assets/hero.jpg'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className='bg-gray-200 py-40'>

            <h2 className='text-center text-6xl font-bold title-animation'>Welcome To HeroGadget</h2>
            <p className='text-center my-5 '>Best E-commerce platform for buying high quality Smart Home <br />  Appliances at extremely affordable Price.</p>

            <div className='flex justify-center items-center gap-4'>
                
                <Link to='/shop' className='block bg-sky-200 px-8 py-4 rounded-full drop-shadow-md font-semibold hover:bg-sky-400'>Shop now</Link >
                <Link to='/about' className='block bg-white px-8 py-4 rounded-full drop-shadow-md font-semibold hover:bg-sky-400'>Learn More</Link >
            </div>
            </div>

            <div className='w-[85%] h-[40%] mx-auto -mt-28'>
                <img className='rounded-xl' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Home;