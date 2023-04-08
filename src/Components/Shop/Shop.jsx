import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
const Shop = () => {
    const products = useLoaderData()
    console.log(products)
    return (
        <div className='grid grid-cols-3 gap-10'>
            {
                products.map(product => <Cards key={product.id} product={product}></Cards>)
            }
        </div>
    );
};

export default Shop;