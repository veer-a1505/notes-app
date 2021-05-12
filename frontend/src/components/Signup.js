import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='form-container'>
      <div className='form-heading'>
        <h3>Welome!!!</h3>
        <p>create an account and manage your all notes here</p>
      </div>

      <form>
        <div className='input-container'>
          <i class='far fa-user icon'></i>
          <input
            type='text'
            className='input-field'
            placeholder='Enter your username'
          />
        </div>

        <div className='input-container'>
          <i class='far fa-envelope icon'> </i>
          <input
            type='email'
            className='input-field'
            placeholder='Enter your email'
          />
        </div>

        <div className='input-container'>
          <i class='fas fa-lock icon'></i>
          <input
            type='password'
            className='input-field'
            placeholder='Enter your password'
          />
        </div>
        <button type='submit'>Sign up</button>
      </form>

      <div className='signin-link'>
        <p>already have an account ?</p>
        <Link to='/'>
          <h4> Sign In</h4>
        </Link>
      </div>
    </div>
  )
}

export default Signup
