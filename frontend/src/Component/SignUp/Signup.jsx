import React from 'react'

const Signup = () => {
  return (
    <>
         <div className='loginbackground'>
        <div class="wrapper">
        <form action="">
            <h1>Sign Up</h1>
            <div class="input-box">
                <input type="text" placeholder="Username" required />
                <box-icon type='solid' name='user' color="white"></box-icon> 
            </div>
            <div class="input-box">
                <input type="email" placeholder="Email" required />
                <box-icon type='solid' name='user' color="white"></box-icon> 
            </div>
            <div class="input-box">
                <input type="password" placeholder="Password" required /> 
                <box-icon name='lock-alt' type='solid' color="white"></box-icon>
            </div>

            <div class="remember-forget">
                <label><input type="checkbox" />Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" class="btn">Login</button>

            <div class="register-link">
                <p>Don't have an account?<br /></p>
            </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Signup