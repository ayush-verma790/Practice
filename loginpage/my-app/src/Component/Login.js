import React from 'react'
import '../Component/login.scss'
function Login() {
  return (
    <div>
      <div className='left-child'>
         <div className=''>
          <div className='left-child-top'>
          <h1>Sign in</h1>
          <span>Don't have an account ? <a>Creat an account</a></span>
          </div>
          <form>
            <lable>Mail</lable>
            <input type='mail' placeholder='example@gmail.com'></input>
            <br></br>
            <lable>Password</lable>
            <input type='password' placeholder='******'></input>
            <br></br>
            <button>Sign in</button>

          </form>
         </div>
      </div>
      <div className='right-child'>
  right
      </div>
    </div>
  )
}

export default Login