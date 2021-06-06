import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { withRouter } from 'react-router-dom'
import { userLogout } from '../actions/userActions'

const Header = () => {
  const userLogin = useSelector((state) => state.login)

  const {
    userInfos: { user },
  } = userLogin

  const dispatch = useDispatch()

  const handleLogout = (event) => {
    const result = window.confirm('Are you sure to logout')
    event.preventDefault()

    if (result) {
      dispatch(userLogout())
    }
  }

  return (
    <header>
      <div className='header-title'>
        <h2>Welcome, {user.username}</h2>
      </div>

      <div className='header-user'>
        <div>
          <button type='button' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}

export default withRouter(Header)
