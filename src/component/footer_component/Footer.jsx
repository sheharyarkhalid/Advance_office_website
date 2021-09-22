import React from 'react';

 const Footer = () => {
    return (
        <>
            <footer>
    <div class="footer-main-section">
        <div class="custom_container">

           <div class="footer_data">
            <div class="footer-section1">
                <h4 class="footer-head-line">About us</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has
                    been the industry.</p>
                <ul class="text-box">
                    <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <span>hello@gmail.com</span>
                    </li>
                    <li>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <span>P: 3333 222 1111</span>
                    </li>
                    <li>
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        <span> 99 Barnard St States - GA 22222 </span>
                    </li>
                </ul>
            </div>

            <div class="footer-section2">
                <h4 class="footer-head-line">Information</h4>
                <ul class="footer-box2 pad-top15">
                    <li><a href="about_us.html">About Us</a></li>
                    <li><a href="readme.html">Privacy Policy</a></li>
                    <li><a href="index.html">Advanced Search</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                </ul>
            </div>

            <div class="footer-section2">
                <h4 class="footer-head-line">My Account</h4>
                <ul class="footer-box2 pad-top15">
                    <li><a href="login.html">Sign In</a></li>
                    <li><a href="cart.html">View Cart</a></li>
                    <li><a href="wishlist.html">My Wishlist</a></li>
                    <li><a href="readme.html">Private Policy</a></li>
                    <li><a href="contactus.html">Help</a></li>
                </ul>
            </div>
            <div class="footer-section1">
                <h4 class="footer-head-line">Newsletter</h4>
                <p>Sign up for our mailing list to get latest updates and offers.</p>
                <div class="search-box-1 mar-bottom15 newsletter_mail">
                    <input type="text" class="search_terms" name="search" placeholder="Email address" />
                    <button class="button-style" type="submit" value=""><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                </div>
                <p>We respect your privacy</p>
                <div class="footer_social_icon">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
           </div> 

        </div>
        <div class="footer-bottom-bar pad-top-bottom25">
            <p>Copyright © 2021 <span class="footer-text"></span> All Rights
                Reserved. Designed by <span class="footer-text"><a href="#">9TH DIMENSION</a></span>
            </p>
        </div>
    </div>
</footer>
        </>
    )
}
export default Footer