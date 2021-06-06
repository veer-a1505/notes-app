import Cookies from 'js-cookie'
import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedComponent = ({ component: Component, ...rest }) => {
  const { loggedIn } = useSelector((state) => state.login)
  const user = Cookies.get('jwt')

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: props.location,
              }}
            />
          )
        }
      }}
    />
  )
}

export default ProtectedComponent
