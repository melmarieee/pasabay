import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <>
    <form>
      <h1>Login</h1>
      <div className="fill-up-form">
      <input type="text" Placeholder="Username..."/>
      <input type="passowrd" Placeholder="Password..." />
      </div>

      <div className="checkbox">
      <input type="checkbox" />
      <p>Remember me?</p>
      </div>
      <a href="components/signup.jsx"><p>Sign up</p></a>
      <button>Sign in</button>

      <p>OR</p>

      <p>—————————
      <a href="#"><img src="#" />link1</a>
      <a href="#"><img src="#" />link2</a>
      <a href="#"><img src="#" />link3</a>
      —————————</p>
    </form>
    </>
  )
}

export default Login