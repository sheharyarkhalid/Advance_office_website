import React,{useState} from 'react';
 import "../../pages/Style.css";
import header_logo from '../../Assets/image/menu-logo.png';
import { Link} from 'react-router-dom';


const Header = () => {

const [activeheader, setHeaderActive] = useState('');

    return (
        <>
           <header>
        <div class="custom_container">
            <div class="header_bar">
                <div class="logo">
                <a href="index.html"><img src={header_logo} /></a>
                </div>
                <button class="nav_btn open_close_nav" type="button" onClick={()=>setHeaderActive('responsive_bar')}>
                      <i class="fas fa-bars"></i>
                  </button>
                <div class="nav_bar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="cart.html">My Cart</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><Link to="/Aboutus">About Us</Link></li>
                        <li><a href="contactus.html">Contact us</a></li>
                    </ul>
                </div>
                <div class="call_us">
                    <span class="searchbar_btn">
                        <a href="#">
                            <i class="fas fa-search"></i>
                            <input class="searchbar" type="text" placeholder="search" />
                        </a>  
                    </span>
                    <span class="account_btn_hover">
                        <a  class="account_icon"><i class="fas fa-user-friends"></i></a>
                      <div class="account_btn">
                         <a href="wishlist.html">My Wishlist</a>
                         <Link to="/Login">Sign in</Link>
                         <a href="my_account.html">My Account</a>
                      </div>  
                    </span>
                    <span><a href="cart.html"><i class="fas fa-shopping-cart"></i></a></span>
                    
                </div>
            </div>
        </div>
    </header> 

<section class={`responsive_nav_bar ${activeheader}`}> 
    <div class="cancle_nav"><a class="open_close_nav" onClick={()=>setHeaderActive('')}><i class="fas fa-times"></i></a></div>
    <div class="responsive_call_us">
       
        <span class="searchbar_btn">
            <a href="#">
                <i class="fas fa-search"></i>
                <input class="searchbar" type="text" placeholder="search" />
            </a>  
        </span>
        <span class="account_btn_hover">
            <a href="#" class="account_icon"><i class="fas fa-user-friends"></i></a>
          <div class="account_btn">
             <a href="wishlist.html">My Wishlist</a>
             <a href="login.html">Sign in</a>
             <a href="my_account.html">My Account</a>
          </div>  
        </span>
        <span class="shoping_cart_icon"><a href="cart.html"><i class="fas fa-shopping-cart"></i></a></span>
    </div>
    <div class="responsive_nav">
        <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="cart.html">My Cart</a></li>
                        <li><a href="wishlist.html">Wishlist</a></li>
                        <li><a href="about_us.html">About Us</a></li>
                        <li><a href="contactus.html">Contact us</a></li>
        </ul>
    </div>
</section>  
        </>
    )
}

export default Header
