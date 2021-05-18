import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userRegister } from './../actions/userActions'

const Signup = (props) => {
  const [candidateData, setCandidateData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const user = useSelector((state) => state.register)

  const { loading, userInfos, error, newUser } = user

  const handleChange = (event) => {
    setCandidateData({
      ...candidateData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(userRegister(candidateData))
    setCandidateData({
      username: '',
      email: '',
      password: '',
    })
  }

  useEffect(() => {
    setTimeout(() => {
      if (newUser) {
        props.history.push('/')
      }
    }, 3000)
  }, [newUser, props.history])

  return (
    <>
      {error ? <span className='error'>{error}</span> : null}
      {newUser ? (
        <span className='success'>Successfully Registered</span>
      ) : null}
      <div className='form-container'>
        <div className='form-heading'>
          <h3>Welome!!!</h3>
          <p>create an account and manage your all notes here</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='input-container'>
            <i className='far fa-user icon'></i>
            <input
              type='text'
              name='username'
              value={candidateData.username}
              onChange={handleChange}
              className='input-field'
              placeholder='Enter your username'
            />
          </div>

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
          <button type='submit'>Sign up</button>
        </form>

        <div className='signin-link'>
          <p>already have an account ?</p>
          <Link to='/'>
            <h4> Sign In</h4>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Signup
