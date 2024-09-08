import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets'

const Login = ({setShowLogin}) => {
    const [currState,setCurrState] = useState("Login")
  return (
    <div className='login-popup'>
        <form action="" className="login-popup-container">
            <div className="login-popup-title">
                <h2>
                    {currState}
                </h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Login"?<></>:<input type="text" placeholder='your name' required />}
                
                <input type="email" placeholder='your name' required />
                <input type="password" placeholder='your name' required />
            </div>
            <button>{currState==="Sign up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <p>I agree to the terms and condition</p>
            </div>
            {currState==="Login"
            ?<p>Create a new account <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>
            :<p>Already have an account<span onClick={()=>setCurrState("Login")}>Login here</span></p>}
        </form>
    </div>
  )
}

export default Login
