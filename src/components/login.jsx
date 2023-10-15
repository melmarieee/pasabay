import React from 'react'
import '../css/login.css'

const Login = () => {
  return (
    <>
    <div className="container">
      <img src="#" />
      <h1>Hello Welcome to our page</h1>

    <form>
      <h1>Login</h1>
      <div className="fill-up-form">
      <input type="text" Placeholder="Username..."/>
      <input type="passowrd" Placeholder="Password..." />
      </div>

      <div className="checkbox">
      <input type="checkbox" />
      <p>Remember me?</p>
      <p>Not a Member yet?</p>
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
    </div>
    </>
  )
}

export default Login