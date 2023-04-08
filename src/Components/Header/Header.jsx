import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-10 my-7'>
            <Link to='/' className='flex justify-center items-center gap-3'>
                <div className='bg-sky-200 inline-block rounded-full p-3'>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 32 32'
                        fill='currentColor'
                        className='flex-shrink-0 w-7 h-7 rounded-full text-cyan-600'
                    >
                        <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                    </svg>
                </div>
                <h2 className='text-2xl font-bold'>
                    HeroGadget
                </h2>
            </Link>
            <div className='md:flex gap-7'>
                <NavLink
                    to='/'
                    className={({ isActive}) =>isActive ? "active font-semibold" : "font-semibold"}
                >
                    Home
                </NavLink>
                <NavLink
                    to='/shop'
                    className={({ isActive}) =>isActive ? "active font-semibold" : "font-semibold"}
                >
                    Shop
                </NavLink>
                <NavLink
                    to='/previewCart'
                    className={({ isActive}) =>isActive ? "active font-semibold" : "font-semibold"}
                >
                    <ShoppingCartIcon className="h-6 w-6 text-blue-400"></ShoppingCartIcon>
                </NavLink>
                <NavLink
                    to='/about'
                    className={({ isActive}) =>isActive ? "active font-semibold" : "font-semibold"}
                >
                    About Us
                </NavLink>
            </div>
        </div>
    );
};

export default Header;