import React from "react";
import logo from "./Assest/Rectangle.svg";
import logo1 from "./Assest/Rectangle (1).svg";
import "../Component/login.scss";
import bg from "../Component/Assest/Large_CTA Content.png"
import bg1 from "../Component/Assest/Small_Earnings.png"
import bg2 from"../Component/Assest/Illustration.png"
import bg3 from "../Component/Assest/Icon.svg"
function Login() {
  return (
    <div className="main">
      <div className="left-child">
        <div className="">
          <div className="left-child-top">
            <h1>Sign in</h1>
            <span>
              Don't have an account ? <a>Creat an account</a>
            </span>
          </div>
          <form className="form-card">
            <label>E-mail</label>
            <br></br>
            <input type="mail" placeholder="example@gmail.com"></input>
            <br></br>
            <label>Password</label> <br></br>
            <input type="password" placeholder="******"></input>
            <br></br>
            {/* <input type="checkbox"/> */}
            <button>Sign in</button>
          </form>
          <div className="login-card">
            <div className="google login">
              <img src={logo} /> Continue with Google
            </div>
            <div className="facebook login">
              <img src={logo1} /> Continue with Facebook
            </div>
          </div>
        </div>
      </div>
      <div className="right-child">

        
          <div className="right-child-card">
            <h3>Reach financial <br/> goals faster</h3>
            <p>Use your Venus card  around <br/>the world with no hidden fees. <br/>Hold, transfer and spend money.</p>
            <img src={bg2}/>
            <button className="btn">Learn More</button>
          </div>
            <div className="right-child-card-small">
              <img src={bg3}/> 
              <span>Earning<br/>$350.40</span>
              </div>
         
          {/* <img src={bg}/>
          <img src={bg1}/> */}
          <div className="right-child-head">
            <h2>Introducing new features</h2>
            <p>Analyzing previous trends ensures <br></br>that businesses always make the right decision. <br></br>And as the scale of the decision and it’s impact magnifies...</p>
          </div>
        </div>
      </div>
     

  );
}

export default Login;
