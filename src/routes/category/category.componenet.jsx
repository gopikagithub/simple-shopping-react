import { Fragment, useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/product-card.component'
import './category.style.scss';

const Category=()=>{
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const [products,setProducts]=useState(categoriesMap[category])/* this also empty so instead of useState([]);   // const products=categoriesMap[category] here every time create so in useEffect*/
    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

    return(
        <Fragment> 
            <h2 className='category-title'>{category.toUpperCase()}</h2>     
             <div className='category-container'>
            
            {products&&/*make sure not call empty array */
                products.map((product)=> <ProductCard key={product.id} product={product}/> )

                
            }

        </div>
        </Fragment>
 
    );

}
export default Category;