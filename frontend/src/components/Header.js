import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const {
    userInfos: { user },
  } = useSelector((state) => state.login)

  const handleLogout = (event) => {
    event.preventDefault()
    console.log('event')
  }

  return (
    <header>
      <div className='header-title'>
        <h2>Welcome, {user.username}</h2>
      </div>
      <div className='header-user'>
        <button type='button' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}

export default Header
