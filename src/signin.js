import React,{useState} from "react";
import './signin.css';

const Signin = (props) =>{
    return(
        <>   
        <div className="container">
        <form>
        <h1 className='header'>Sign in page</h1>
        <div className='reg-form-divider'>
          <div className='reg-form'>
            <div className='field'>
              <label className='label-field'>Email</label>
              <input className='input-field' type="email" name="email" placeholder='email'></input>
            </div>
            <div className='field'>
              <label className='label-field'>Password</label>
              <input  className='input-field' type= "password" name='password' placeholder='Password'></input>
            </div>
            <button className='submit-btn'>Sign in</button>
          </div>
        </div>
       </form>
       <button onClick={()=>props.onFormSwitch('Signup')}  className='account'><p className='acc'>Already have an account?</p><p className='sgn'>Sign in.</p></button>
        </div>   
       </>
    );
}

export default Signin;