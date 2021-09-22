import React from 'react';
import bannerslider1 from "../../Assets/image/slider1.jpg";
import bannerslider2 from "../../Assets/image/slider2.jpg";
import bannerslider3 from "../../Assets/image/slider3.jpg";
import "../../pages/Style.css";
const HomeBanner = () => {
    return (
        <>
  <section class="banner">
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src={bannerslider1} />
        <div class="carousel-caption slider_2_text">
            <h2 class="slide-1">Designer Jewellery</h2>
            <span>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br />lorem quis bibendum auctor elit </span>
            <a href="#" class="m-t-20">Shop Now</a>
          </div>
      </div>
     
      <div class="carousel-item">
        <img class="d-block w-100" src={bannerslider2} />
        <div class="carousel-caption slider_2_text">
            <h2 class="slide-1">Designer Jewellery</h2>
            <span>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br />lorem quis bibendum auctor elit </span>
            <a href="#" class="m-t-20">Shop Now</a>
          </div>
      </div>
      
      <div class="carousel-item">
        <img class="d-block w-100" src={bannerslider3} />
        <div class="carousel-caption slider_2_text">
            <h2 class="slide-1">Designer Jewellery</h2>
           <span>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,<br />lorem quis bibendum auctor elit </span>
            <a href="#" class="m-t-20">Shop Now</a>
          </div>
      </div>
      
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</section>
        </>
    )
}

export default HomeBanner
