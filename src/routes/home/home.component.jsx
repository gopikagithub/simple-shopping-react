import React from 'react'; 
import {Outlet} from 'react-router-dom';

import hat from '../../images/hat.png'
import jackets from '../../images/jackets.jpg'
import womens from '../../images/womens.jpg'
import mens from '../../images/mens.jpg'
import sneakers from '../../images/sneakers.jpg'
import Directory from '../../components/directory/directory.component';



const  Home=()=> {
  const categories=[
    {
      "id": 1,
      "title": "hats",
      "imageUrl": hat
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": jackets
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": sneakers
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": womens
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": mens
    }
  ];
  return (
    <div>
     <Outlet/>
     <Directory categories={categories}/>
     </div>
     );
  
};

export default Home;
