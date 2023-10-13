import React from 'react'
import '../css/signup.css'

const Signup = () => {
  return (
    <>
    <form>
      <h1>Sign up</h1>
      <input type="text" placeholder='Name...'/>
      <input type="Email" placeholder='Email...' />
      <input type="Text" placeholder='Address...' />
      <input type="number" placeholder='Contact number...' />
      <input type="password" placeholder='Password...'/>
      <input type="password" placeholder='Retype password...' />

      <button>Sign up</button>
      <p>Already have an account? <a href="#">Sign in</a></p>
      
    </form>
    </>
  )
}

export default Signup