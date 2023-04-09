import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import { useState } from 'react';
import { setCartIdInLocal } from "../LocalStorage/LocalStorage.js";
const Shop = () => {
    const products = useLoaderData()
    const [carts, setCarts] = useState([])

    function addToCart(id) {
        let saveCarts = [] 
        const matchingID = products.find(product => product.id === id)
        if(carts.includes(matchingID)){
            alert('Hey ! I am here')
        }
        saveCarts = [...carts,matchingID]
        setCarts(saveCarts)
        setCartIdInLocal(id)
    }

    console.log(carts)
    return (
        <div className='mx-auto md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                products.map(product => <Cards key={product.id} product={product} addToCart={addToCart}></Cards>)
            }
        </div>
    );
};

export default Shop;