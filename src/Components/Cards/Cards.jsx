import React, { useContext } from 'react';

const Cards = ({ product }) => {
    console.log(product)
    const { category,
        id,
        index,
        name,
        picture,
        price } = product;

    return (
        <div className='bg-gray-100 rounded-lg shadow-lg p-5'>
            <img className='w-full rounded-lg mb-4 shadow-lg' src={picture} alt="" />
            <h2 className='text-2xl font-bold mb-2'>{name}</h2>
            <p className='mb-1'>Category : {category}</p>
            <p className='font-bold mb-1'>Price : {price}$</p>
            <button className='bg-sky-300 px-28 py-4 block mx-auto rounded-full shadow-lg hover:bg-sky-500'>Add To Cart</button>
        </div>
    );
};

export default Cards;