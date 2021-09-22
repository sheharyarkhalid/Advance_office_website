import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = (props) => {
    return (
        <>
            <section class="custom_banner">
       
       <div class="custom_banner_header">  
           <h3>{props.title}</h3>
           <ul>
               <li><span><i class="far fa-gem"></i></span></li>
               <li><span><i class="far fa-gem"></i></span></li>
               <li><span><i class="far fa-gem"></i></span></li>
           </ul>
           <div class="page_navigation"><Link to="/">Home</Link><span></span><p>{props.name}</p></div>
           </div>
   
            </section>
        </>
    )
}

export default Banner
