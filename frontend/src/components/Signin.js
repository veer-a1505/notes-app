import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  const [candidateData, setCandidateData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    setCandidateData({
      ...candidateData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(candidateData)
    setCandidateData({
      email: '',
      password: '',
    })
  }

  return (
    <div className='form-container'>
      <div className='form-heading'>
        <h3>Welome Back</h3>
        <p>Enter your credentials to acccess your account</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <i className='far fa-envelope icon'> </i>
          <input
            type='email'
            name='email'
            value={candidateData.email}
            onChange={handleChange}
            className='input-field'
            placeholder='Enter your email'
          />
        </div>

        <div className='input-container'>
          <i className='fas fa-lock icon'></i>
          <input
            type='password'
            name='password'
            value={candidateData.password}
            onChange={handleChange}
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
