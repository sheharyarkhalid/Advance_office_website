import React from 'react';

import product_one from '../../Assets/image/Products1.png';
import {OurProductApi} from "../../OurProductApi/OurProductApi";
const OurProduct = () => {
    return (
        <>
   <section class="product_section">
    <div class="custom_container">
      <div class="our_product_header">  
      <h3>Our Products</h3>
      <ul>
          <li><span><i class="far fa-gem"></i></span></li>
          <li><span><i class="far fa-gem"></i></span></li>
          <li><span><i class="far fa-gem"></i></span></li>
      </ul>
      <p>Lorem ipsum dolor sit amet<br />
        consectetueradipiscing elit, sed diam nonummy nibh</p>
      </div>
      <div class="product_grid">
       
      {OurProductApi.map((currElement)=>{
         return(
             <>
             <div class="product_card">
             <a href="#"> 
           <div class="figure">
            <img src={currElement.image} />
           </div>
           <div class="product_detail">
            <h5>{currElement.name}</h5>
             <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
             <p>{currElement.price}</p>
            </div>
            </a> 
            </div>
             </>
         )
      })}
            
       
  
      </div>
    </div>
  </section>
        </>
    )
}

export default OurProduct
