import React from 'react';
import './Home.css'
import heroImg from '../../assets/hero.jpg'
const Home = () => {
    return (
        <div>
            <h2 className='text-center text-6xl font-bold title-animation'>Welcome To HeroGadget</h2>
            <p className='text-center my-5 font-semibold  text-gray-600'>Best E-commerce platform for buying high quality Smart Home <br />  Appliances at extremely affordable Price.</p>

            <div className='w-[75%] mx-auto'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Home;