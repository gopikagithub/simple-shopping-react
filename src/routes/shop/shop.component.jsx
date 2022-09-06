import {Routes,Route} from 'react-router-dom'
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.componenet';

import './shop.style.scss'
const Shop=()=>{
    return(
       <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>}/>
       </Routes>
        );
};
    

export default Shop;



































/*import ProductCard from '../../components/product-card/product-card.component';
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context"

import './shop.style.scss'
const Shop=()=>{
    const {products}=useContext(ProductsContext);

    return(
        <div className='products-container' >
            {products.map((product)=>(
                <ProductCard key={product.id} product={product}/>

            ))}
            

        </div>

    );
    
};
export default Shop;
 */

/* cannot use context ?
import { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";

const Shop=()=>{
    const {products}=useContext(ProductsContext);
    return(
        <div>
            {products.map(({id,name})=>(
                <div key={id}>
                    <h1>{name}</h1>
                </div>
              ))}
        </div>
    );

};
export default Shop;*/