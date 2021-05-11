import React from 'react'

const Header = () => {
  return (
    <header>
      <div className='header-title'>
        <h2>Welcome mr.user</h2>
      </div>
      <div className='header-user'>
        <h3>Username</h3>
        <button type='button'>Logout</button>
      </div>
    </header>
  )
}

export default Header
