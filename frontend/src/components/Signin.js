import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='form-container'>
      <div className='form-heading'>
        <h3>Welome Back</h3>
        <p>Enter your credentials to acccess your account</p>
      </div>

      <form>
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
        <button type='submit'>Sign in</button>
      </form>

      <div className='signup-link'>
        <Link to='/signup'>
          <h4>Sign up</h4>
        </Link>
      </div>
    </div>
  )
}

export default Signin
