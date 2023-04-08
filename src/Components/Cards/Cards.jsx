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
        <div>
            <img src={picture} alt="" />
        </div>
    );
};

export default Cards;