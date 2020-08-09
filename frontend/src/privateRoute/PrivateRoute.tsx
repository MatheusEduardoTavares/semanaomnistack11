import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router'

export interface PrivateRouteProps extends RouteProps {
  isAuth: boolean;
  redirectPath: string; 
}

const PrivateRoute: React.FC<PrivateRouteProps> = (props) => {
   return props.isAuth ? (
    <Route {...props} component={props.component} />
  ) : (
    <Redirect to={{pathname: props.redirectPath, state: {from: props.location}}} />
  )
}

export default PrivateRoute