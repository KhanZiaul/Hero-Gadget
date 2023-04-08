import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
const Shop = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div>
            {
                products.map(product => <Cards key={product.id} product={product}></Cards>)
            }
        </div>
    );
};

export default Shop;

/*
category
id
index
name
picture
price
*/