import React from 'react'
import '../Login/login.css'
import MetaTag from '../Meta/MetaTag'
const Login = () => {
    return (
        <>
            <MetaTag
                title="Login - Media Man"
                description="Login page for Media Man's website. Secure access for users to log in to their accounts. Features fields for username and password, along with options for remembering login details and recovering forgotten passwords."
                keyword="Media Man, login, user login, secure login, password recovery, register"
            />

            <div className='loginbackground'>
                <div class="wrapper">
                    <form action="">
                        <h1>Login</h1>
                        <div class="input-box">
                            <input type="text" placeholder="Username" required />
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
                            <p>Don't have an account?<br /> <a href="#">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login