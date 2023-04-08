import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
        </div>
    );
};

export default Shop;