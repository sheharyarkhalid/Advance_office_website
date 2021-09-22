import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import "./SignUp.css";


const SignUp = () => {
    const history = useHistory()
    const [error, seterror] = useState('');  
   const [SignUpData, setSignUpData] = useState({
       firstname:'',
       lastname:'',
       email:'',
       phone:'',
       password:'',
       confirmpassword:'',
       address:'',
   });

const InputEvent=(event)=>{

const {name,value}=event.target;

setSignUpData((PreVal)=>{
    return{
     ...PreVal,
     [name]:value,

    }
})

}

const SignUpform=(e)=>{
e.preventDefault();

if(SignUpData.firstname && SignUpData.lastname && SignUpData.email && SignUpData.phone && SignUpData.password
    && SignUpData.confirmpassword && SignUpData.address){
        console.log(`${SignUpData.firstname}`); 

 history.push('/login')
    }

if(!SignUpData.firstname){
   seterror('Requiree');
}
if(!SignUpData.lastname){
    seterror('Requiree');
 }
 if(!SignUpData.email){
    seterror('Requiree');
 }
 if(!SignUpData.phone){
     seterror('Requiree');
  }
  if(!SignUpData.password){
    seterror('Requiree');
 }
 else if(SignUpData.password != SignUpData.confirmpassword){
    seterror('password not matched');
 }
 if(!SignUpData.confirmpassword){
     seterror('Requiree');
  }
  if(!SignUpData.firstname){
    seterror('Requiree');
 }
 if(!SignUpData.address){
     seterror('Requiree');
  }



};

    return (
        <>
            <section class="sign_up_section">
       <div class="signup_container">
         <h2>Create Your account</h2>
         <div class="signup_main">
         <div class="signup_form">
             <form onSubmit={SignUpform}>
                
                 <div class="signup_input_field">
                    <div class="input_field">
                        <label>First Name <span>*</span></label> 
                        <input type="text" name="firstname" value={SignUpData.firstname} onChange={InputEvent} placeholder="First Name" />
                         <span>{error}</span> 
                    </div>
                    <div class="input_field">
                        <label>Last Name <span>*</span></label> 
                        <input type="text" name="lastname" value={SignUpData.lastname} onChange={InputEvent} placeholder="Last Name" />
                    </div>
                    <div class="input_field">
                        <label>Email Address <span>*</span></label> 
                        <input type="email" name="email" value={SignUpData.email} onChange={InputEvent} placeholder="Email Address" />
                        <span>{error}</span> 
                    </div>
                    <div class="input_field">
                        <label>Mobile <span>*</span></label> 
                        <input type="number" name="phone" value={SignUpData.phone} onChange={InputEvent} placeholder="Mobile" />
                        <span>{error}</span> 
                    </div>
                    <div class="input_field">
                        <label>Password <span>*</span></label> 
                        <input type="text" name="password" value={SignUpData.password} onChange={InputEvent} placeholder="Password" />
                        <span>{error}</span> 
                    </div>
                    <div class="input_field">
                        <label>confirm Password <span>*</span></label> 
                        <input type="text" name="confirmpassword" value={SignUpData.confirmpassword} onChange={InputEvent} placeholder="confirm Password" />
                        <span>{error}</span> 
                    </div>
                 </div>
                 <div class="business_input_field">
                    <label>Address <span>*</span></label>   
                 <input type="text" name="address" value={SignUpData.address} onChange={InputEvent} placeholder="Address" />
                 <span>{error}</span> 
                 </div>
                 <div class="submit_btn">
                 <button type="submit">Create New Account</button>
                 </div>
             </form>
             <div class="sign_up_btn">
                 <span>Already have an account?<Link to="/Login"> Login Here</Link></span>
             </div>
             {/* <div class="policy_check">
                <p>By signing up, you agree to our <a href="readme.html"> Terms of Use</a> and have read and acknowledge our <a href="readme.html"> Privacy Policy</a>.</p>
            </div> */}
         </div>
        </div>
       </div>
   </section>
        </>
    )
}

export default SignUp
