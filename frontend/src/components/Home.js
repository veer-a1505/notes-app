import React from 'react'
import Content from './Content'
import Header from './Header'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'

const Home = (props) => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default Home
