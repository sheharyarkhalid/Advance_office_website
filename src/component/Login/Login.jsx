import React from 'react'
import { Link } from 'react-router-dom';
import "./Login.css";

import { Formik,Form } from 'formik';
import { useField } from 'formik';

const Login = () => {
    
    return (
        <>
        <section class="login_section">
       <div class="login_container">
         <h2>Welcome To Jewellery</h2>
         <div class="login_form">
         <Formik
         initialValues={
             {
               email:"",
               password:"",

             }
         }
         >
         {Formik=>(
             <>
           
             <Form>
                 <div class="input_field">
                 <input type="email" placeholder="Email" name="email" {...useField}/>
                 <input type="password" placeholder="Password" name="password" {...useField}/>
                 </div>
                 <div class="submit_btn">
                 <button type="submit">Login</button>
                 </div>
                 {console.log(Formik.values)}
             </Form>
             </>
             )}
           </Formik>
             <div class="sign_up_btn">
                 <span>Don't have an account?<Link to="/signup"> Sign Up Now</Link></span>
             </div>
             {/* <div class="forgot_pass">
                <a href="#"> Forgot password?</a>
            </div> */}
         </div>
         {/* <div class="policy_check">
             <p>By Clicking Login, you agree to our <a href="readme.html">Terms of Use</a> and
                have read and acknowledge our <a href="readme.html">Privacy Policy</a>.</p>
         </div> */}
       </div>
   </section>
            
        </>
    )
}

export default Login
