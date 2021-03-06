import React from 'react'
import { Route, Redirect } from "react-router-dom"
import { useStateValue } from "../../session/store"

const AuthenticatedRoute = ({ component: Component, authenticatedFirebase, ...rest }) => {
  const [{ authenticated }, dispatch] = useStateValue()
  
  return (
    <Route
      {...rest}
      render={(props) => (authenticated === true || authenticatedFirebase !== null)
        ? <Component {...props} {...rest} />
        : <Redirect to="auth/login"/>
      }
    />
  )
}


export default AuthenticatedRoute
