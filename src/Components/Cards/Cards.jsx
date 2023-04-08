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
        <div className='bg-gray-200 rounded-lg shadow-md p-5'>
            <img className='w-[300px] rounded-lg' src={picture} alt="" />
            <h2 className='text-2xl font-bold'>{name}</h2>
            <p>Category : {category}</p>
            <p className='font-bold'>Price : {price}$</p>
            <button className=''>Add To Cart</button>
        </div>
    );
};

export default Cards;