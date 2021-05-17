import React from 'react'
import Content from './Content'
import Header from './Header'
import { useSelector } from 'react-redux'

const Home = () => {
  const user = useSelector((state) => state.login)

  console.log(user)
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}

export default Home
