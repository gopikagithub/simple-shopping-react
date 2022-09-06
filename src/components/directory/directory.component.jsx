import React from 'react';
import './directory.style.scss'
import DirectoryItem from '../directory-item/directory-item.component'
import hat from '../../images/hat.png'
import jackets from '../../images/jackets.jpg'
import womens from '../../images/womens.jpg'
import mens from '../../images/mens.jpg'
import sneakers from '../../images/sneakers.jpg'


const categories=[
  {
    "id": 1,
    "title": "hats",
    "imageUrl": hat,
    "route":'shop/hats'
  },
  {
    "id": 2,
    "title": "jackets",
    "imageUrl": jackets,
    "route":'shop/jackets'
  },
  {
    "id": 3,
    "title": "sneakers",
    "imageUrl": sneakers,
    "route":'shop/sneakers'
  },
  {
    "id": 4,
    "title": "womens",
    "imageUrl": womens,
    "route":'shop/womens'
  },
  {
    "id": 5,
    "title": "mens",
    "imageUrl": mens,
    "route":'shop/mens'
  }
];

const Directory=()=>{
  
    return(
    <div className="directory-container">
      {categories.map((category)=>{
      return(                     //same name in {} direct access
        <DirectoryItem key={category.id}  category={category}/>
    )})}
      
    </div>
    )

}
export default Directory;
