import React from 'react'
import Content from './Content'
import Header from './Header'
import { useSelector } from 'react-redux'

const Home = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default Home
